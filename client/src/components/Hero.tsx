import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop"
          alt="Cinematic background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-film-darker via-film-dark/50 to-film-darker"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient">
            REGASH
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-4 font-display">
            Filmmaker & Cinematographer
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Amplifying Marginalized Voices Through Cinema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio"><a className="btn-primary">View Work</a></Link>
            <Link href="/booking"><a className="btn-secondary">Book a Session</a></Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white opacity-50" size={32} />
      </motion.div>
    </section>
  );
}
