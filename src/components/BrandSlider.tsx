const brands = [
  "Samsung", "LG", "Sony", "TCL", "Hisense",
  "Toshiba", "Panasonic", "Philips", "Sharp", "Skyworth",
  "Haier", "JVC", "Hitachi", "Sanyo",
];

export default function BrandSlider() {
  return (
    <section className="py-10 overflow-hidden border-y bg-card">
      <h2 className="text-xl font-bold text-center mb-6 text-muted-foreground">
        Brands We Buy & Sell
      </h2>
      <div className="brand-slider-track flex gap-10 items-center">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="shrink-0 text-2xl font-extrabold tracking-tight text-foreground/20 hover:text-primary/60 transition-colors whitespace-nowrap select-none"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
