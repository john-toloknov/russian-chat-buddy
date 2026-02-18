const Footer = () => {
  return (
    <footer className="py-10 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald/5 via-transparent to-gold/5" />
      <div className="container mx-auto px-4 text-center relative">
        <p className="font-display text-lg bg-gradient-to-r from-emerald via-gold to-rose bg-clip-text text-transparent mb-2">
          Кристина Толокнова
        </p>
        <p className="font-body text-sm text-background/40">
          © {new Date().getFullYear()} Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
