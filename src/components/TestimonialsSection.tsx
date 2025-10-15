import { Star, Quote, Verified } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "react-i18next";

const getTestimonials = (t: any) => [
  {
    name: t("testimonials.reviews.0.name"),
    role: t("testimonials.reviews.0.role"),
    content: t("testimonials.reviews.0.content"),
    rating: 5,
    avatar: "photo1.jpg",
    verified: true,
  },
  {
    name: t("testimonials.reviews.1.name"),
    role: t("testimonials.reviews.1.role"),
    content: t("testimonials.reviews.1.content"),
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
  {
    name: t("testimonials.reviews.2.name"),
    role: t("testimonials.reviews.2.role"),
    content: t("testimonials.reviews.2.content"),
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: true,
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = getTestimonials(t);
  return (
    <section
      id="temoignages"
      className="py-24 bg-gradient-to-b from-slate-100 rounded-lg to-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Star className="w-4 h-4 group-hover:wiggle" />
            <span>{t("testimonials.badge")}</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold font-space text-slate-800 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="hover:scale-105 inline-block transition-transform duration-300">
              {t("testimonials.title").split(" utilisateurs")[0]}
            </span>
            <span className="gradient-text hover:scale-105 inline-block transition-transform duration-300 cursor-pointer">
              {" "}
              utilisateurs
            </span>
          </h2>
          <p
            className="text-xl text-slate-600 max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={0.6 + index * 0.2}
              direction="up"
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 cursor-pointer group h-full"
                whileHover={{
                  y: -16,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Header with avatar and info */}
                <div className="flex items-center mb-6">
                  <motion.div className="relative" whileHover={{ scale: 1.1 }}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    {testimonial.verified && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: index * 0.5,
                        }}
                      >
                        <Verified className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-800 font-space group-hover:text-orange-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        scale: 1.2,
                        rotate: 15,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Star className="w-5 h-5 text-orange-400 fill-current" />
                    </motion.div>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                    5.0
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: index * 0.7,
                    }}
                  >
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-orange-200" />
                  </motion.div>
                  <p className="text-slate-600 leading-relaxed pl-6 font-medium">
                    "{testimonial.content}"
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Overall rating */}
        {/* <div
          className="text-center mt-16 fade-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="inline-flex items-center space-x-6 bg-white rounded-3xl px-10 py-6 shadow-xl border border-slate-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-orange-400 fill-current group-hover:wiggle"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <div className="text-slate-800">
              <span className="font-bold text-2xl font-space group-hover:text-orange-600 transition-colors duration-300">
                4.9/5
              </span>
              <span className="text-slate-500 ml-3 font-medium group-hover:text-slate-700 transition-colors duration-300">
                {t("testimonials.rating")}
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
