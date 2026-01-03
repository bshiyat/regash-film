import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Loader2 } from 'lucide-react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const presetPrompts = [
    'Cinematic portrait of a filmmaker, dramatic lighting, film noir style',
    'Documentary photography, Palestine street scene, natural light',
    'Behind the scenes film production, camera crew at work',
    'Artistic dance performance, motion blur, stage lighting',
    'Circus performance, dramatic composition, vibrant colors'
  ];

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: prompt,
            options: { wait_for_model: true }
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate image. Please try again.');
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;

    const a = document.createElement('a');
    a.href = generatedImage;
    a.download = `regash-generated-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              <span className="text-gradient">AI Image Generator</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Create stunning cinematic images using AI. Perfect for concept art, mood boards, and creative inspiration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Prompt Input */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <label className="block text-white font-semibold mb-3">
                  <Sparkles className="inline-block w-5 h-5 mr-2 text-gold" />
                  Describe Your Image
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A cinematic portrait with dramatic lighting..."
                  className="w-full h-32 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <button
                  onClick={generateImage}
                  disabled={isLoading || !prompt.trim()}
                  className="w-full mt-4 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Image
                    </>
                  )}
                </button>
              </div>

              {/* Preset Prompts */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-white font-semibold mb-3">Quick Presets</h3>
                <div className="space-y-2">
                  {presetPrompts.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(preset)}
                      className="w-full text-left px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/80 text-sm transition-colors border border-white/10"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-white font-semibold mb-3">Tips for Best Results</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Be descriptive about lighting, mood, and style</li>
                  <li>• Include artistic references (e.g., "film noir", "documentary style")</li>
                  <li>• Specify details like "dramatic lighting" or "natural light"</li>
                  <li>• Generation takes 10-30 seconds depending on server load</li>
                  <li>• Free tier with no API key required</li>
                </ul>
              </div>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full">
                <h3 className="text-white font-semibold mb-4">Generated Image</h3>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-4">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}

                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
                  {isLoading ? (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto mb-4" />
                      <p className="text-white/60">Creating your image...</p>
                    </div>
                  ) : generatedImage ? (
                    <div className="w-full h-full relative group">
                      <img
                        src={generatedImage}
                        alt="Generated"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={downloadImage}
                          className="btn-primary"
                        >
                          <Download className="w-5 h-5 mr-2 inline-block" />
                          Download
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-white/40">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Your generated image will appear here</p>
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <button
                    onClick={downloadImage}
                    className="w-full mt-4 btn-secondary flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Image
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
