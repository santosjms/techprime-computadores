const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Os melhores notebooks,
            </span>
            <br />
            <span className="text-foreground">
              selecionados para você.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground animate-fade-in delay-100 px-4">
            Encontre o notebook perfeito com as melhores configurações e preços
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
