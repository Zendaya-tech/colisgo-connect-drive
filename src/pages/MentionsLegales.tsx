import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gray-50">
        <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Mentions Légales – ColisGo
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Éditeur du site
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Dénomination sociale :</strong> ColisGo Inc.
                  </li>
                  <li>
                    <strong>Forme juridique :</strong> Société par actions
                  </li>
                  <li>
                    <strong>Siège social :</strong> Chicoutimi, Québec, Canada
                  </li>
                  <li>
                    <strong>Numéro d'entreprise du Québec (NEQ) :</strong> [À
                    compléter]
                  </li>
                  <li>
                    <strong>Directeur de la publication :</strong> [Nom du
                    directeur]
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Contact
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Adresse e-mail :</strong>{" "}
                    <a
                      href="mailto:contact@colisgo.org"
                      className="text-blue-600 hover:underline"
                    >
                      contact@colisgo.org
                    </a>
                  </li>
                  <li>
                    <strong>Téléphone :</strong>{" "}
                    <a
                      href="tel:+14188129475"
                      className="text-blue-600 hover:underline"
                    >
                      +1 418 812 9475
                    </a>
                  </li>
                  <li>
                    <strong>Adresse postale :</strong> Chicoutimi, Québec,
                    Canada
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Hébergement
              </h2>
              <p className="text-gray-700 mb-4">
                Le site web ColisGo est hébergé par :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Hébergeur :</strong> Vercel Inc.
                  </li>
                  <li>
                    <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                    91789, États-Unis
                  </li>
                  <li>
                    <strong>Site web :</strong>{" "}
                    <a
                      href="https://vercel.com"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      vercel.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 mb-4">
                L'ensemble des éléments composant le site ColisGo (textes,
                images, vidéos, logos, graphismes, icônes, sons, logiciels,
                etc.) ainsi que le site lui-même sont protégés par les lois en
                vigueur sur la propriété intellectuelle.
              </p>
              <p className="text-gray-700 mb-4">
                Ces éléments sont la propriété exclusive de ColisGo Inc. ou de
                ses partenaires. Toute reproduction, représentation,
                modification, publication, adaptation de tout ou partie des
                éléments du site, quel que soit le moyen ou le procédé utilisé,
                est interdite, sauf autorisation écrite préalable de ColisGo
                Inc.
              </p>
              <p className="text-gray-700">
                Toute exploitation non autorisée du site ou de l'un quelconque
                des éléments qu'il contient sera considérée comme constitutive
                d'une contrefaçon et poursuivie conformément aux dispositions
                des articles L.335-2 et suivants du Code de la Propriété
                Intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Marques et logos
              </h2>
              <p className="text-gray-700">
                Les marques "ColisGo", le logo ColisGo et tous les autres signes
                distinctifs reproduits sur le site sont des marques déposées ou
                en cours de dépôt de ColisGo Inc. Toute reproduction ou
                représentation totale ou partielle de ces marques sans
                autorisation expresse de ColisGo Inc. est prohibée.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Données personnelles
              </h2>
              <p className="text-gray-700 mb-4">
                ColisGo s'engage à respecter la confidentialité des données
                personnelles de ses utilisateurs conformément à la Loi 25
                (Québec) et à la Loi sur la protection des renseignements
                personnels et les documents électroniques (LPRPDE, Canada).
              </p>
              <p className="text-gray-700">
                Pour plus d'informations sur la collecte, l'utilisation et la
                protection de vos données personnelles, veuillez consulter notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="text-blue-600 hover:underline"
                >
                  Politique de Confidentialité
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Responsabilité
              </h2>
              <p className="text-gray-700 mb-4">
                ColisGo s'efforce de fournir des informations aussi précises que
                possible sur le site. Toutefois, ColisGo ne pourra être tenue
                responsable des omissions, des inexactitudes et des carences
                dans la mise à jour, qu'elles soient de son fait ou du fait des
                tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-gray-700 mb-4">
                ColisGo ne pourra être tenue responsable des dommages directs et
                indirects causés au matériel de l'utilisateur, lors de l'accès
                au site, et résultant soit de l'utilisation d'un matériel ne
                répondant pas aux spécifications indiquées, soit de l'apparition
                d'un bug ou d'une incompatibilité.
              </p>
              <p className="text-gray-700">
                ColisGo ne pourra également être tenue responsable des dommages
                indirects (tels par exemple qu'une perte de marché ou perte
                d'une chance) consécutifs à l'utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Liens hypertextes
              </h2>
              <p className="text-gray-700 mb-4">
                Le site ColisGo peut contenir des liens hypertextes vers
                d'autres sites présents sur le réseau Internet. Les liens vers
                ces autres ressources vous font quitter le site ColisGo.
              </p>
              <p className="text-gray-700">
                Il est possible qu'un lien ne fonctionne pas correctement ou que
                le site de destination ait disparu. ColisGo ne peut être tenue
                responsable de ces inconvénients.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Droit applicable et juridiction
              </h2>
              <p className="text-gray-700 mb-4">
                Les présentes mentions légales sont régies par le droit canadien
                et québécois. En cas de litige, les tribunaux québécois seront
                seuls compétents.
              </p>
              <p className="text-gray-700">
                Pour toute question relative aux présentes mentions légales,
                vous pouvez nous contacter à l'adresse{" "}
                <a
                  href="mailto:legal@colisgo.org"
                  className="text-blue-600 hover:underline"
                >
                  legal@colisgo.org
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Conditions générales d'utilisation
              </h2>
              <p className="text-gray-700">
                L'utilisation du site ColisGo implique l'acceptation pleine et
                entière des conditions générales d'utilisation décrites dans nos{" "}
                <a href="/cgu" className="text-blue-600 hover:underline">
                  Conditions Générales d'Utilisation
                </a>
                .
              </p>
            </section>

            <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t">
              <p>Dernière mise à jour : Décembre 2024</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
