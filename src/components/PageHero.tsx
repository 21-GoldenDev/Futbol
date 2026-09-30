type PageHeroProps = {
  kicker: string;
  title: string;
  text: string;
  image?: string;
};

export default function PageHero({
  kicker,
  title,
  text,
  image = "/images/hero.jpg",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <p className="font-heading text-xs uppercase tracking-[0.32em] text-gold">{kicker}</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{text}</p>
      </div>
    </section>
  );
}
