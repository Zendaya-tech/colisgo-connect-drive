const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-yellow-300 flex items-center justify-center text-3xl">👌</div>
              <div className="absolute inset-0 rounded-2xl ring-4 ring-blue-400 translate-x-1 translate-y-1 -z-10"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Cocolis, la livraison qui tient dans la poche.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Aussi bien pensée pour les expéditeurs que les transporteurs, notre application vous suit partout !
            Disponible dès maintenant en scannant le QR code. Allez-y, c'est gratuit !
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="bg-white rounded-2xl p-3 shadow-sm border">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent("https://colisgo.example.com/app")}`}
                alt="QR code pour télécharger l'application"
                className="w-[220px] h-[220px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" aria-label="Disponible sur Google Play">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Disponible sur Google Play"
                  className="h-16 w-auto object-contain"
                />
              </a>
              <a href="#" aria-label="Télécharger dans l'App Store">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Télécharger dans l'App Store"
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;