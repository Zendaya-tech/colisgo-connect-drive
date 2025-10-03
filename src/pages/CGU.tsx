import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gray-50">
        <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Conditions Générales d'Utilisation (CGU) – ColisGo
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Objet
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (ci-après « CGU
                ») ont pour objet de définir les modalités d'accès et
                d'utilisation de la plateforme ColisGo par les utilisateurs,
                qu'ils soient expéditeurs ou voyageurs. L'utilisation de ColisGo
                implique l'acceptation sans réserve des présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Définitions
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Expéditeur :</strong> utilisateur qui publie une
                  annonce pour faire transporter un colis.
                </li>
                <li>
                  <strong>Voyageur ou transporteur :</strong> utilisateur qui
                  accepte de transporter un colis dans le cadre d'un trajet
                  prévu.
                </li>
                <li>
                  <strong>Plateforme :</strong> application mobile et site
                  internet ColisGo.
                </li>
                <li>
                  <strong>Service :</strong> mise en relation sécurisée entre
                  expéditeurs et voyageurs, avec paiement via la plateforme.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Colis prohibés (interdits)
              </h2>
              <p className="text-gray-700 mb-4">
                Il est strictement interdit d'utiliser la plateforme ColisGo
                pour expédier les catégories de colis suivantes :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>L'argent comptant.</li>
                <li>L'alcool</li>
                <li>
                  Tout colis dont la valeur dépasse 1 000 $, sauf autorisation
                  spéciale obtenue par écrit auprès du service à la clientèle de
                  ColisGo.
                </li>
                <li>
                  Toute substance dont la possession ou le transport est
                  illégal.
                </li>
                <li>Le cannabis et l'ensemble de ses produits dérivés.</li>
                <li>Les armes à feu et munitions.</li>
                <li>Le tabac et produits du tabac.</li>
                <li>
                  Les matières dangereuses identifiées comme telles par une
                  fiche signalétique (ex. batteries contenant du liquide).
                </li>
                <li>
                  Les matières biologiques, notamment les substances médicales
                  classées UN 3373, Catégorie A et B.
                </li>
                <li>
                  Les colis qui ne sont pas adéquatement emballés ou dont
                  l'emballage ne protège pas le contenu.
                </li>
              </ol>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-800">
                  <strong>Important :</strong> les mentions « fragile », «
                  périssable » ou toute autre indication pertinente doivent
                  apparaître de manière claire sur les colis concernés.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Inscription et Compte utilisateur
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  L'inscription sur ColisGo est gratuite mais nécessite de
                  fournir des informations exactes et à jour.
                </li>
                <li>
                  Chaque utilisateur doit être majeur et disposer de la capacité
                  légale de contracter.
                </li>
                <li>
                  ColisGo se réserve le droit de suspendre ou supprimer tout
                  compte en cas de non-respect des CGU.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Fonctionnement du service
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  L'expéditeur publie une annonce (lieu de départ, destination,
                  description du colis, poids, valeur, etc.).
                </li>
                <li>Le voyageur intéressé accepte l'annonce.</li>
                <li>
                  Le paiement est effectué via la plateforme et conservé en
                  séquestre jusqu'à la confirmation de livraison.
                </li>
                <li>
                  ColisGo agit uniquement en tant qu'intermédiaire et n'est pas
                  transporteur.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Obligations des utilisateurs
              </h2>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                6.1 Expéditeur
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>
                  Fournir des informations exactes sur le colis (taille, poids,
                  contenu).
                </li>
                <li>
                  Ne pas envoyer de produits interdits, dangereux, périssables
                  ou illégaux.
                </li>
                <li>
                  Emballer correctement le colis pour éviter les dommages.
                </li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                6.2 Voyageur
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Respecter l'annonce et livrer le colis selon les conditions
                  convenues.
                </li>
                <li>Transporter les colis avec soin.</li>
                <li>
                  Informer immédiatement ColisGo et l'expéditeur en cas
                  d'incident.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Assurance et Responsabilité
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  ColisGo propose une assurance optionnelle pour les
                  expéditeurs, couvrant perte, vol ou dommage du colis, selon
                  les conditions négociées avec l'assureur partenaire.
                </li>
                <li>
                  Sans souscription à cette assurance, l'expéditeur assume
                  l'entière responsabilité de son envoi.
                </li>
                <li>
                  ColisGo ne saurait être tenue responsable en cas de fausse
                  déclaration, d'utilisation frauduleuse du service ou de force
                  majeure.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Paiement et Commission
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Le prix de la livraison est proposé par l'expéditeur et validé
                  par le voyageur.
                </li>
                <li>
                  ColisGo prélève une commission (%) sur chaque transaction pour
                  la gestion du service.
                </li>
                <li>
                  Le paiement est sécurisé et débloqué au voyageur uniquement
                  après confirmation de réception par l'expéditeur.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Données personnelles
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Les données collectées sont utilisées uniquement pour le
                  fonctionnement du service.
                </li>
                <li>
                  Conformément à la loi sur la protection des données, chaque
                  utilisateur dispose d'un droit d'accès, de rectification et de
                  suppression de ses données.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Suspension et Résiliation
              </h2>
              <p className="text-gray-700 mb-2">
                ColisGo se réserve le droit de suspendre ou résilier un compte
                utilisateur en cas de :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Fraude ou tentative de fraude.</li>
                <li>Non-respect des CGU.</li>
                <li>Utilisation abusive du service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                11. Modification des CGU
              </h2>
              <p className="text-gray-700">
                ColisGo se réserve le droit de modifier les présentes CGU à tout
                moment. Les utilisateurs seront notifiés et devront accepter la
                nouvelle version pour continuer à utiliser le service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                12. Vérification d'identité des voyageurs
              </h2>
              <p className="text-gray-700 mb-4">
                Afin d'assurer la sécurité, la fiabilité et la conformité du
                service, Colisgo exige de tout voyageur/transporteur la
                présentation d'une pièce d'identité officielle valide (parmi :
                permis de conduire, passeport, carte de résidence permanente ou
                tout autre pièce émise par une autorité gouvernementale).
              </p>

              <p className="text-gray-700 mb-2">
                La vérification d'identité a pour objectif de :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Confirmer l'identité réelle de l'utilisateur</li>
                <li>Prévenir l'usurpation d'identité et la fraude</li>
                <li>Assurer la sécurité des expéditeurs et des voyageurs</li>
                <li>
                  Permettre à colisgo de répondre à ses obligations légales en
                  cas d'enquête judiciaire
                </li>
              </ol>

              <p className="text-gray-700 mb-4">
                Les informations recueillies sont traitées conformément à la loi
                sur la protection des renseignements personnels dans le secteur
                privé (Québec, loi 25) et à la loi sur la protection des
                renseignements personnels et les documents électroniques
                (LPRDPDE, Canada).
              </p>

              <p className="text-gray-700 mb-4">
                Ces données sont utilisées uniquement à des fins de vérification
                et de sécurité. Elles sont conservées de manière sécurisée et
                pendant une durée limitée, conformément à la politique de
                confidentialité de colisgo.
              </p>

              <p className="text-gray-700 mb-4">
                L'utilisateur dispose d'un droit d'accès, de rectification et de
                suppression de ses informations personnelles, qu'il peut exercer
                en contactant le service à la clientèle à l'adresse{" "}
                <a
                  href="mailto:contact@colisgo.org"
                  className="text-blue-600 hover:underline"
                >
                  contact@colisgo.org
                </a>
                .
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800">
                  <strong>Important :</strong> Tout refus de fournir une pièce
                  d'identité valide entraîne l'impossibilité d'utiliser le
                  service colisgo en tant que voyageur/transporteur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                13. Vérification d'identité des expéditeurs
              </h2>
              <p className="text-gray-700 mb-4">
                Dans un souci de sécurité et de transparence, ColisGo peut
                exiger des expéditeurs la présentation d'une pièce d'identité
                officielle valide (permis de conduire, passeport, carte
                d'assurance maladie, carte de résidence permanente ou toute
                autre pièce émise par une autorité gouvernementale).
              </p>

              <p className="text-gray-700 mb-2">
                La vérification d'identité des expéditeurs est :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>
                  Obligatoire pour les envois dont la valeur déclarée excède 200
                  $ CAD, ou pour les envois à l'international.
                </li>
                <li>
                  Optionnelle pour les autres envois, mais fortement recommandée
                  afin d'obtenir un statut « Expéditeur vérifié » sur la
                  plateforme.
                </li>
              </ol>

              <p className="text-gray-700 mb-2">Cette procédure vise à :</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>Prévenir la fraude et l'usurpation d'identité.</li>
                <li>
                  Réduire les risques liés à l'expédition de biens interdits ou
                  dangereux.
                </li>
                <li>Renforcer la confiance entre expéditeurs et voyageurs.</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Les données recueillies sont traitées conformément à la Loi 25
                (Québec) et à la LPRPDE (Canada). Elles sont utilisées
                uniquement pour la vérification et conservées de manière
                sécurisée pour une durée limitée conformément à la politique de
                confidentialité de colisgo.
              </p>

              <p className="text-gray-700">
                ColisGo se réserve le droit de refuser ou suspendre tout envoi
                en cas de doute sérieux sur l'identité de l'expéditeur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                14. Droit applicable et juridiction compétente
              </h2>
              <p className="text-gray-700">
                Les présentes CGU sont régies par les lois du Québec et du
                Canada. Tout litige relatif à leur interprétation ou exécution
                sera soumis aux tribunaux compétents du district judiciaire
                concerné.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGU;
