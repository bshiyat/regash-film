import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-[128px] animate-pulse animation-delay-400"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90">
              Award-Winning Filmmaker
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold mb-6">
            <span className="text-gradient">REGASH</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-4 font-display font-medium">
            Filmmaker & Cinematographer
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Amplifying Marginalized Voices Through Cinema
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <a className="btn-primary flex items-center gap-2 group">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                View My Work
              </a>
            </Link>
            <Link href="/booking">
              <a className="btn-secondary">
                Book a Session
              </a>
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">6+</div>
              <div className="text-sm text-white/60">Years</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">12+</div>
              <div className="text-sm text-white/60">Projects</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-sm text-white/60">Countries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white/40" size={32} />
      </motion.div>
    </section>
  );
}
