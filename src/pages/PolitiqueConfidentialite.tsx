import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gray-50">
        <div className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Politique de Confidentialité – ColisGo
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ColisGo s'engage à protéger la confidentialité et la sécurité
                des informations personnelles de ses utilisateurs. Cette
                politique de confidentialité explique comment nous collectons,
                utilisons, stockons et protégeons vos données personnelles
                conformément à la Loi 25 (Québec) et à la Loi sur la protection
                des renseignements personnels et les documents électroniques
                (LPRPDE, Canada).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Informations collectées
              </h2>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                2.1 Informations d'inscription
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Date de naissance</li>
                <li>Adresse de résidence</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                2.2 Informations de vérification d'identité
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>
                  Pièce d'identité officielle (permis de conduire, passeport,
                  etc.)
                </li>
                <li>Photo de profil</li>
                <li>Informations bancaires pour les paiements</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                2.3 Informations d'utilisation
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>Historique des transactions</li>
                <li>Évaluations et commentaires</li>
                <li>Messages échangés sur la plateforme</li>
                <li>Données de géolocalisation (avec votre consentement)</li>
                <li>Informations sur l'appareil et la connexion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Utilisation des informations
              </h2>
              <p className="text-gray-700 mb-4">
                Nous utilisons vos informations personnelles pour :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Créer et gérer votre compte utilisateur</li>
                <li>
                  Faciliter les transactions entre expéditeurs et voyageurs
                </li>
                <li>Vérifier votre identité et prévenir la fraude</li>
                <li>Traiter les paiements et gérer la facturation</li>
                <li>Fournir un support client</li>
                <li>
                  Améliorer nos services et développer de nouvelles
                  fonctionnalités
                </li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>
                  Envoyer des notifications importantes concernant votre compte
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Partage des informations
              </h2>
              <p className="text-gray-700 mb-4">
                ColisGo ne vend jamais vos informations personnelles. Nous
                pouvons partager vos données dans les cas suivants :
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                4.1 Avec d'autres utilisateurs
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>Informations de profil public (nom, photo, évaluations)</li>
                <li>Informations de contact nécessaires pour la transaction</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                4.2 Avec nos partenaires de service
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>Processeurs de paiement (pour traiter les transactions)</li>
                <li>Services de vérification d'identité</li>
                <li>
                  Compagnies d'assurance (si vous souscrivez à une assurance)
                </li>
                <li>Fournisseurs de services techniques et d'hébergement</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                4.3 Pour des raisons légales
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Conformité aux lois et réglementations applicables</li>
                <li>Réponse aux demandes des autorités compétentes</li>
                <li>Protection de nos droits et de ceux de nos utilisateurs</li>
                <li>Prévention de la fraude et des activités illégales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Sécurité des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour
                protéger vos informations :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  Chiffrement des données sensibles en transit et au repos
                </li>
                <li>Accès restreint aux informations personnelles</li>
                <li>Surveillance continue de nos systèmes</li>
                <li>
                  Formation régulière de notre personnel sur la sécurité des
                  données
                </li>
                <li>Audits de sécurité périodiques</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Conservation des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous conservons vos informations personnelles :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Tant que votre compte est actif</li>
                <li>Pendant la durée nécessaire pour fournir nos services</li>
                <li>
                  Pour respecter nos obligations légales (généralement 7 ans
                  pour les données financières)
                </li>
                <li>
                  Pour résoudre les litiges et faire respecter nos accords
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Après cette période, vos données sont supprimées de manière
                sécurisée ou anonymisées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Vos droits
              </h2>
              <p className="text-gray-700 mb-4">
                Conformément à la législation applicable, vous disposez des
                droits suivants :
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                7.1 Droit d'accès
              </h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez demander une copie des informations personnelles que
                nous détenons à votre sujet.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                7.2 Droit de rectification
              </h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez demander la correction d'informations inexactes ou
                incomplètes.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                7.3 Droit de suppression
              </h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez demander la suppression de vos données personnelles,
                sous réserve de certaines exceptions légales.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                7.4 Droit à la portabilité
              </h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez demander le transfert de vos données dans un format
                structuré et lisible par machine.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                7.5 Droit d'opposition
              </h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez vous opposer au traitement de vos données à des fins
                de marketing direct.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Comment exercer vos droits :</strong> Contactez-nous à
                  l'adresse{" "}
                  <a
                    href="mailto:privacy@colisgo.org"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@colisgo.org
                  </a>{" "}
                  ou via notre formulaire de contact. Nous répondrons à votre
                  demande dans les 30 jours.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Cookies et technologies similaires
              </h2>
              <p className="text-gray-700 mb-4">
                Nous utilisons des cookies et des technologies similaires pour
                améliorer votre expérience sur notre plateforme :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Cookies essentiels :</strong> nécessaires au
                  fonctionnement de la plateforme
                </li>
                <li>
                  <strong>Cookies de performance :</strong> pour analyser
                  l'utilisation et améliorer nos services
                </li>
                <li>
                  <strong>Cookies de préférences :</strong> pour mémoriser vos
                  choix et personnaliser votre expérience
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Vous pouvez gérer vos préférences de cookies dans les paramètres
                de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Transferts internationaux
              </h2>
              <p className="text-gray-700">
                Vos données peuvent être transférées et traitées dans des pays
                autres que votre pays de résidence. Nous nous assurons que ces
                transferts respectent les exigences légales applicables et que
                vos données bénéficient d'un niveau de protection adéquat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Mineurs
              </h2>
              <p className="text-gray-700">
                Nos services sont destinés aux personnes âgées de 18 ans et
                plus. Nous ne collectons pas sciemment d'informations
                personnelles auprès de mineurs de moins de 18 ans.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                11. Modifications de cette politique
              </h2>
              <p className="text-gray-700">
                Nous pouvons modifier cette politique de confidentialité de
                temps à autre. Nous vous informerons de tout changement
                important par e-mail ou via une notification sur notre
                plateforme. La version mise à jour entrera en vigueur dès sa
                publication.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                12. Contact
              </h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de
                confidentialité ou le traitement de vos données personnelles,
                contactez-nous :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>E-mail :</strong>{" "}
                    <a
                      href="mailto:privacy@colisgo.org"
                      className="text-blue-600 hover:underline"
                    >
                      privacy@colisgo.org
                    </a>
                  </li>
                  <li>
                    <strong>Support client :</strong>{" "}
                    <a
                      href="mailto:contact@colisgo.org"
                      className="text-blue-600 hover:underline"
                    >
                      contact@colisgo.org
                    </a>
                  </li>
                  <li>
                    <strong>Adresse postale :</strong> 475 rue racine est
                    Chicoutimi, Québec, Canada
                  </li>
                </ul>
              </div>
            </section>

            <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t">
              <p>Dernière mise à jour : [Date de mise à jour]</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
