// section showing app advantages + banana tree image (configurable)
import { CheckCircle } from "lucide-react";

type EcoSectionProps = {
    imageSrc?: string; // path to bananier image (user can configure)
};

//ecologys advantages
const advantages: string[] = [
    "Prix 30 à 50% moins cher que les solutions classiques",
    "Sécurité renforcée et assurance incluse",
    "Suivi en temps réel de vos envois",
    "Flexibilité des horaires et des itinéraires",
    "Communauté fiable avec profils vérifiés",
];

export default function EcoSection({ imageSrc = "/eco.png" }: EcoSectionProps) {
    return (
        <section className="py-20 mt-20">
            <div className="container relative rounded-3xl bg-green-700 py-20 max-w-7xl   mx-auto  px-10">
                <div className="">
                    {/* Left: Advantages list */}
                    <div>
                        <h2 className="text-3xl  md:text-5xl font-extrabold text-white mb-4">
                            un trajet écologique ?
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-500 mb-4">
                            Bien Sur !
                        </h3>
                        <p className="text-white mb-6 max-w-prose">
                            Découvrez les principaux avantages de notre application pour vos envois et trajets.
                        </p>
                        <ul className="space-y-3">
                            {advantages.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Banana tree image */}

                    <img
                        src={imageSrc}
                        alt="Bananier"
                        className="w-[700px] -bottom-20 right-0 absolute"
                        loading="lazy"
                    />

                </div>
            </div>
        </section>
    );
}