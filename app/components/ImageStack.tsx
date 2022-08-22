import * as DialogPrimitive from "@radix-ui/react-dialog";

type ImageStackType = {
  children: React.ReactNode | React.ReactNode[];
};

export default function ImageStack({ children }: ImageStackType) {
  const images = children.props.children
    .filter((child) => typeof child?.props?.src !== "undefined")
    .map(({ props }) => ({ src: props.src, alt: props.alt }));

  return (
    <div>
      {images.map(({ alt, src }) => (
        <DialogPrimitive.Dialog key={src}>
          <DialogPrimitive.Trigger asChild>
            <input type="image" alt={alt} src={src} />
          </DialogPrimitive.Trigger>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black opacity-60" />
            <DialogPrimitive.Content>
              <div key={src} className="ddd flex flex-wrap gap-xs">
                {images.reverse().map(({ alt, src }) => (
                  <img key={src} alt={alt} src={src} />
                ))}
              </div>
              {/* <DialogPrimitive.Close></DialogPrimitive.Close> */}
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Dialog>
      ))}
    </div>
  );
}
