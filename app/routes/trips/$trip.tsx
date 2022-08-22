import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

import { bundleMDX } from "~/services/mdx.server";
import styles from "~/styles/routes/trips/$trip.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const { data, meta } = await fetch(`${process.env.STRAPI_URL_BASE}/api/posts/1`, {
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    }
  }).then(post => post.json());

  const mdx = await bundleMDX({
    source: data.attributes.content.trim().replaceAll("![](/", `![](${process.env.STRAPI_URL_BASE}/`),
    cwd: process.env.DIR,
  });

  return json(mdx);
}

export default function Trip() {
  const { code, frontmatter } = useLoaderData();

  const Component = React.useMemo(() => getMDXComponent(code), [code])
  
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <Component />
    </article>
  );
}
