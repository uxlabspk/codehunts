interface OurStackSectionProp {
  image: string;
  title: string;
}

export default function OurStackSection({ image, title }: OurStackSectionProp) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-card">
      <img
        src={image}
        alt={title}
        className="w-12 transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <span className="text-sm font-medium text-muted-foreground">{title}</span>
    </div>
  );
}
