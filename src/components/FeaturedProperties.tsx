import PropertyCard from "./PropertyCard";
import { useTranslation } from "react-i18next";

// mock data  font write fullname   just name+ cropped lastname exemple  patrick  olong = patrick O
export default function FeaturedProperties() {
  const { t } = useTranslation();
  const travelers = [
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      name: "Marie L",
      location: "Paris → New York",
      price: "15$/kg",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=300&fit=crop&crop=face",
      weight: "8kg",
      departure: "15 Mars 2024",
      type: "transporter",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=300&fit=crop&crop=face",
      name: "Thomas D",
      location: "Lyon → Tokyo",
      price: "12$/kg",
      rating: "4.9",
      //image de meuble
      image:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=300&fit=crop&crop=face",
      weight: "5kg",
      departure: "20 Mars 2024",
      type: "transporter",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      name: "Sophie E",
      location: "Marseille → Londres",
      price: "8$/kg",
      rating: "4.7",
      //image de meuble
      image:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=300&fit=crop&crop=face",
      weight: "12kg",
      departure: "18 Mars 2024",
      type: "transporter",
    },
  ];

  return (
    <section className="pb-12 pt-4 px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t("home.featuredProperties.title")}{" "}
        <span className="text-orange-600">
          {t("home.featuredProperties.titleHighlight")}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {travelers.map((traveler, index) => (
          <PropertyCard
            key={index}
            {...traveler}
            featured={true}
            type={traveler.type as "transporter" | "traveler"}
          />
        ))}
      </div>
    </section>
  );
}
