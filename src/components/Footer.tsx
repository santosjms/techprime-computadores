import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-12 sm:mt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl">T</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechPrime Notebooks
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Os melhores notebooks com as melhores configurações e preços do mercado.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">Sobre Nós</li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">Catálogo</li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">Contato</li>
              <li className="hover:text-primary transition-colors duration-200 cursor-pointer">Política de Privacidade</li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 animate-fade-in sm:col-span-2 md:col-span-1" style={{ animationDelay: "200ms" }}>
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <div className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="p-2 bg-secondary/50 rounded-lg hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} TechPrime Notebooks. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
