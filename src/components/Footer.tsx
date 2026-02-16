const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/60">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg text-background/80 mb-2">
          Кристина Толокнова
        </p>
        <p className="font-body text-sm">
          © {new Date().getFullYear()} Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
