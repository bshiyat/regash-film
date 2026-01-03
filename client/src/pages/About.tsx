import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 text-center">
          About Alaa
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Passionate Palestinian filmmaker dedicated to authentic storytelling that amplifies 
              marginalized voices, explores cultural identity, resilience, and human connection 
              through documentary, narrative, and performing arts projects.
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Experience</h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-film-accent pl-6">
                  <h3 className="text-xl font-semibold text-white">Palestine Comedy Club (2025)</h3>
                  <p className="text-film-accent mb-2">Director / Cinematographer</p>
                  <p>Intimately documented the groundbreaking 2022 stand-up tour Balad, filming all performances, interviews, and behind-the-scenes moments.</p>
                </div>

                <div className="border-l-2 border-film-accent pl-6">
                  <h3 className="text-xl font-semibold text-white">Stereo48 Dance Company (Recent)</h3>
                  <p className="text-film-accent mb-2">Director, Filmmaker & Editor</p>
                  <p>Directed and edited multiple dance films including False Awakening (3-episode series), Four Phases of Fear, and Closer than Ever.</p>
                </div>

                <div className="border-l-2 border-film-accent pl-6">
                  <h3 className="text-xl font-semibold text-white">The Palestine Before Initiative (2022-2023)</h3>
                  <p className="text-film-accent mb-2">Director of Photography</p>
                  <p>Filmed key interviews across Palestine, delivering high-quality cinematography and visual storytelling.</p>
                </div>

                <div className="border-l-2 border-film-accent pl-6">
                  <h3 className="text-xl font-semibold text-white">The Freedom Theatre (2020-2021)</h3>
                  <p className="text-film-accent mb-2">Director, Filmmaker & Editor</p>
                  <p>Directed Freedom Bus Film and collaborated on Keffiyeh Made in China documentary.</p>
                </div>

                <div className="border-l-2 border-film-accent pl-6">
                  <h3 className="text-xl font-semibold text-white">Palestine Circus School (2019-Present)</h3>
                  <p className="text-film-accent mb-2">Filmmaker</p>
                  <p>Created 40-episode educational series, ID Circus documentary, and Inhale short film.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-film-dark p-4">
                  <p className="font-semibold text-white">Directing & Cinematography</p>
                </div>
                <div className="bg-film-dark p-4">
                  <p className="font-semibold text-white">Film Editing</p>
                </div>
                <div className="bg-film-dark p-4">
                  <p className="font-semibold text-white">Documentary Photography</p>
                </div>
                <div className="bg-film-dark p-4">
                  <p className="font-semibold text-white">Visual Storytelling</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Languages</h2>
              <p>Arabic (Native) | English (Fluent)</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
