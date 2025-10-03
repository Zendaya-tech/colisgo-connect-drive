import { Leaf, Recycle, TreePine, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";
import { useTranslation } from "react-i18next";

const getEcoStats = (t: any) => [
  {
    icon: Leaf,
    value: "70%",
    label: t("eco.stats.co2Less"),
    color: "text-green-400",
  },
  {
    icon: Recycle,
    value: "500K",
    label: t("eco.stats.tonnesSaved"),
    color: "text-blue-400",
  },
  {
    icon: TreePine,
    value: "100%",
    label: t("eco.stats.ecological"),
    color: "text-emerald-400",
  },
  {
    icon: Zap,
    value: "0",
    label: t("eco.stats.emptyTrips"),
    color: "text-yellow-400",
  },
];

export default function EcoSection() {
  const { t } = useTranslation();
  const ecoStats = getEcoStats(t);
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Leaf className="w-4 h-4" />
              </motion.div>
              <span>{t("eco.badge")}</span>
            </motion.div>

            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
                <motion.span
                  className="inline-block hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {t("eco.title").split(" ")[0]}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {" "}
                  {t("eco.title").split(" ")[1]}
                </motion.span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t("eco.subtitle")}
              </p>
            </AnimatedSection>
          </AnimatedSection>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {ecoStats.map((stat, index) => (
              <AnimatedSection
                key={index}
                delay={0.6 + index * 0.1}
                direction="scale"
              >
                <motion.div
                  className="bg-white rounded-3xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group"
                  whileHover={{
                    y: -16,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 12,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                        delay: index * 0.2,
                      }}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className={`text-3xl lg:text-4xl font-bold font-space mb-2 ${stat.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value === "500K" ? (
                      <AnimatedCounter value={500} suffix="K" />
                    ) : stat.value === "70%" ? (
                      <>
                        <AnimatedCounter value={70} />%
                      </>
                    ) : stat.value === "100%" ? (
                      <>
                        <AnimatedCounter value={100} />%
                      </>
                    ) : (
                      <AnimatedCounter value={0} />
                    )}
                  </motion.div>

                  <div className="text-slate-600 font-medium text-sm lg:text-base group-hover:text-slate-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Visual Section */}
          <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <div className="text-white">
                <h3 className="text-3xl lg:text-4xl font-bold font-space mb-4">
                  {t("eco.visualSection.title")}
                </h3>
                <p className="text-green-100 text-lg mb-6">
                  {t("eco.visualSection.subtitle")}
                </p>

                <div className="flex items-center gap-4 text-green-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <span className="text-sm">
                      {t("eco.visualSection.optimizedTrips")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-sm">
                      {t("eco.visualSection.reducedEmissions")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right visual */}
              <AnimatedSection
                className="relative flex justify-center lg:justify-end"
                delay={1.2}
                direction="right"
              >
                <div className="relative group">
                  {/* Earth illustration */}
                  <motion.div
                    className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="text-6xl lg:text-7xl"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      🌍
                    </motion.div>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.25 }}
                  >
                    <Leaf className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer"
                    animate={{
                      rotate: [0, 15, -15, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    whileHover={{ scale: 1.25 }}
                  >
                    <Recycle className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
