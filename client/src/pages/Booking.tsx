import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', preferredDate: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">Ready to bring your vision to life?</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8">Book a Session</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-film-dark text-white border border-white/10 focus:border-film-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-film-dark text-white border border-white/10 focus:border-film-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-film-dark text-white border border-white/10 focus:border-film-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full px-4 py-3 bg-film-dark text-white border border-white/10 focus:border-film-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 bg-film-dark text-white border border-white/10 focus:border-film-accent focus:outline-none">
                  <option value="">Select a type</option>
                  <option value="event">Event</option>
                  <option value="documentary">Documentary</option>
                  <option value="corporate">Corporate</option>
                  <option value="performance">Performance/Dance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-film-dark text-white border border-white/10 focus:border-film-accent focus:outline-none resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="w-full btn-primary">Send Message</button>
              {submitted && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/20 border border-green-500 text-green-400 text-center">Message sent!</motion.div>}
            </form>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-film-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:Hello@regash.com" className="text-gray-400 hover:text-film-accent">Hello@regash.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-film-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">Palestine / International</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-film-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Response Time</h3>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}