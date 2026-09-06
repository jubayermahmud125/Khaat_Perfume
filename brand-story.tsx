'use client';

const stats = [
  { value: '100+', label: 'Years of Heritage' },
  { value: '47', label: 'Rare Ingredients' },
  { value: '12', label: 'Master Perfumers' },
  { value: '3', label: 'Generations of Craft' },
];

export function BrandStory() {
  return (
    <section id="craft" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.pexels.com/photos/8450219/pexels-photo-8450219.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Master perfumer blending ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating second image */}
            <div className="absolute -bottom-8 -right-4 lg:-right-12 w-40 h-52 lg:w-56 lg:h-72 overflow-hidden rounded-sm border-4 border-background shadow-xl hidden md:block">
              <img
                src="https://images.pexels.com/photos/8450466/pexels-photo-8450466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Perfume making workshop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <span className="text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Craft
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              A Century of
              <br />
              <span className="italic">Olfactory Art</span>
            </h2>
            <div className="space-y-4 font-sans-body text-foreground/70 leading-relaxed">
              <p>
                Founded in 1921 in the flower fields of Grasse, Maison Lumière
                began as a single atelier where a master perfumer sought to
                capture light itself in a bottle. Three generations later, we
                still harvest our jasmine by hand at dawn, when the petals are
                heaviest with dew.
              </p>
              <p>
                Every composition begins with raw materials sourced from their
                spiritual homes — Bulgarian rose, Sumatran patchouli, Mysore
                sandalwood — then aged in oak casks for a minimum of six months
                to let the notes marry and deepen.
              </p>
              <p>
                We do not chase trends. We make scents that endure.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif-display text-3xl lg:text-4xl text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-sans-body tracking-widest uppercase text-foreground/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
