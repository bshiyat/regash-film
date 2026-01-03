import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { projects } from '../lib/projects';
import { Link } from 'wouter';

export default function FeaturedWork() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            A selection of recent projects showcasing documentary and narrative storytelling
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden bg-white/5">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center">
                    <Play className="text-white" size={28} fill="white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-accent-500 font-medium">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.role[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio">
            <a className="btn-primary inline-flex items-center gap-2 group">
              View All Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
