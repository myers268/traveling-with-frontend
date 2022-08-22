import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type PostInfo = {
  id: string;
  slug: string;
  title: string;
};

export const loader: LoaderFunction = async () => {
  const { data, meta } = await fetch(`${process.env.STRAPI_URL_BASE}/api/posts`, {
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    }
  }).then(posts => posts.json());

  const postInfo = data.map(({ id, attributes }: { id: string, attributes: any }) => ({ id, slug: attributes.slug, title: attributes.title } as PostInfo));

  return json<PostInfo[]>(postInfo);
}

export default function Index() {
  const posts = useLoaderData<PostInfo[]>();

  return (
    <div>
      <h1>Traveling With</h1>
      <ul>
        {posts.map(({ id, slug, title }) => (
          <li key={id}>
            <a href={`trips/${slug}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
