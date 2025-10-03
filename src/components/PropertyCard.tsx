import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface PropertyCardProps {
  name: string;
  location: string;
  price: string;
  rating: string;
  image: string;
  featured?: boolean;
  weight?: string;
  departure?: string;
  airline?: string;
  isRequest?: boolean;
  avatar?: string;
  type?: "traveler" | "transporter";
}

export default function PropertyCard({
  name,
  location,
  price,
  type,
  rating,
  image,
  featured = false,
  weight,
  departure,
  airline,
  isRequest = false,
  avatar,
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { t } = useTranslation();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la navigation vers le lien
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/announces/${"9"}`}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden px-2 py-3  transition-shadow border border-gray-200 dark:border-gray-800"
    >
      <div className="relative overflow-hidden h-72 rounded-2xl">
        <img src={image} alt={name} className={` w-full object-cover `} />
        {featured && (
          <div className="absolute top-4 left-4 bg-emerald-950/80 text-white px-4 py-1 rounded-full text-xs">
            {t("home.featuredProperties.verified")}
          </div>
        )}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 backdrop-blur-sm p-2 rounded-full transition-all duration-200 hover:scale-110 ${
            isFavorite
              ? "bg-red-500/90 text-white"
              : "bg-white/80 dark:bg-gray-900/70 hover:bg-white dark:hover:bg-gray-800"
          }`}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavorite ? "text-white" : "text-gray-600 dark:text-gray-300"
            }`}
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        {airline && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-gray-700">
            {airline}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
          <h3 className="font-semibold text-gray-900 dark:text-white ">
            {name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {location}
        </p>
        {weight && (
          <p className="text-blue-600 text-sm font-medium mb-2">
            {type === "transporter"
              ? t("home.featuredProperties.availableSpace")
              : t("home.featuredProperties.requestedSpace")}
            : {weight}
          </p>
        )}
        {departure && (
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
            {t("home.featuredProperties.departure")}: {departure}
          </p>
        )}

        {departure && (
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900 dark:text-white">
              {price}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
