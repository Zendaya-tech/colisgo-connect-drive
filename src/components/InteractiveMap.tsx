import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";

const InteractiveMap = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const routes = [
    {
      id: "canada-europe",
      name: "Canada ↔ Europe",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      countries: ["🇨🇦 Canada", "🇫🇷 France", "🇬🇧 Royaume-Uni"],
      frequency: "15 voyages/mois",
    },
    {
      id: "canada-africa",
      name: "Canada ↔ Afrique",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      countries: ["🇨🇦 Canada", "🇨🇲 Cameroun", "🇸🇳 Sénégal", "🇨🇮 Côte d'Ivoire"],
      frequency: "12 voyages/mois",
    },
    {
      id: "europe-africa",
      name: "Europe ↔ Afrique",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      countries: ["🇫🇷 France", "🇨🇲 Cameroun", "🇨🇩 RDC"],
      frequency: "20 voyages/mois",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Routes List */}
        <div className="space-y-4">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeRoute === route.id
                  ? route.bgColor + " shadow-lg"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onMouseEnter={() => setActiveRoute(route.id)}
              onMouseLeave={() => setActiveRoute(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <MapPin
                    className={`w-6 h-6 mr-3 ${
                      activeRoute === route.id
                        ? route.textColor
                        : "text-gray-600"
                    }`}
                  />
                  <span
                    className={`text-lg font-semibold ${
                      activeRoute === route.id
                        ? route.textColor
                        : "text-gray-800"
                    }`}
                  >
                    {route.name}
                  </span>
                </div>
                <Plane
                  className={`w-5 h-5 ${
                    activeRoute === route.id ? route.textColor : "text-gray-400"
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {route.countries.map((country, idx) => (
                  <span
                    key={idx}
                    className={`text-sm px-3 py-1 rounded-full ${
                      activeRoute === route.id
                        ? "bg-white/50 " + route.textColor
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {country}
                  </span>
                ))}
              </div>

              <div
                className={`text-sm font-medium ${
                  activeRoute === route.id ? route.textColor : "text-gray-500"
                }`}
              >
                {route.frequency}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive World Map Placeholder */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 bg-gradient-to-br from-blue-100 via-orange-50 to-green-100 rounded-3xl overflow-hidden"
          >
            {/* World Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-48 h-48 text-gray-300" />
            </div>

            {/* Animated Route Lines */}
            {activeRoute && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                {/* Animated dots representing active route */}
                <motion.div
                  animate={{
                    x: [50, 250, 50],
                    y: [100, 150, 100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-3 h-3 bg-orange-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{
                    x: [250, 50, 250],
                    y: [150, 100, 150],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute w-3 h-3 bg-blue-600 rounded-full shadow-lg"
                />
              </motion.div>
            )}

            {/* Map Labels */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
              <span className="text-sm font-semibold text-gray-700">
                Carte Interactive
              </span>
            </div>

            {!activeRoute && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Globe className="w-32 h-32 text-orange-400 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-600 font-medium">
                    Survolez une route pour voir l'animation
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
