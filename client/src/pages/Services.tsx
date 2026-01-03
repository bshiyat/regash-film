import { motion } from 'framer-motion';
import { Video, Film, Briefcase, Camera, Users, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Video size={40} />,
      title: 'Event Videography',
      description: 'Professional coverage of conferences, festivals, performances, and special events with cinematic quality.'
    },
    {
      icon: <Film size={40} />,
      title: 'Documentary Filmmaking',
      description: 'Authentic storytelling that captures real stories with cultural sensitivity and narrative depth.'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Corporate Videos',
      description: 'High-quality promotional content, company profiles, and internal communications.'
    },
    {
      icon: <Camera size={40} />,
      title: 'Behind-the-Scenes',
      description: 'Exclusive BTS photography and videography for film productions and creative projects.'
    },
    {
      icon: <Users size={40} />,
      title: 'Dance & Performance',
      description: 'Specialized filming of performing arts including dance, theatre, and circus arts.'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Short Films',
      description: 'Creative narrative and experimental short films that explore meaningful themes.'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional video production services with a focus on authentic storytelling 
            and cultural sensitivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-film-dark p-8 border border-white/10 hover:border-film-accent transition-colors duration-300"
            >
              <div className="text-film-accent mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-film-dark p-12 border border-white/10 mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Production Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-film-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-semibold text-white mb-2">Consultation</h4>
              <p className="text-sm text-gray-400">Discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-film-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-semibold text-white mb-2">Planning</h4>
              <p className="text-sm text-gray-400">Pre-production and scheduling</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-film-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-semibold text-white mb-2">Filming</h4>
              <p className="text-sm text-gray-400">Professional on-site production</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-film-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="font-semibold text-white mb-2">Post-Production</h4>
              <p className="text-sm text-gray-400">Editing and final touches</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-film-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h4 className="font-semibold text-white mb-2">Delivery</h4>
              <p className="text-sm text-gray-400">Final files in your preferred format</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <a href="/booking" className="btn-primary">
            Book a Consultation
          </a>
        </div>
      </div>
    </motion.div>
  );
}
