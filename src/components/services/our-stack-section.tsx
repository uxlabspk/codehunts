interface OurStackSectionProp {
  image: string;
  title: string;
}

export default function OurStackSection({ image, title }: OurStackSectionProp) {
  return (
    <div
      className={"bg-accent flex flex-col items-center justify-center gap-4 rounded-lg border p-5"}
    >
      <img src={image} alt={title} className={"w-16"} />
      <h1>{title}</h1>
    </div>
  );
}
