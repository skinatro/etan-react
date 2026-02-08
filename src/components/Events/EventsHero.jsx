import { motion } from "framer-motion";

const EventsHero = () => {
  return (
    <div className="relative py-20 px-4">
      {/* Content - Centered */}
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Events &{" "}
            <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Workshops
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join our exciting events, workshops, and competitions designed to
            enhance your technical skills and connect with the tech community.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsHero;
