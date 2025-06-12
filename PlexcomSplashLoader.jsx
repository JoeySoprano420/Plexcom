// VACU-Themed Splash & Loader UI for Plexcom (Platform-Agnostic)
// Designed for Windows x64 or cross-platform Electron-based packaging

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlexcomSplashLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-violet-800 to-fuchsia-700 text-white flex items-center justify-center">
      <AnimatePresence>
        {!loaded ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <div className="mb-4 animate-pulse">
              <h1 className="text-5xl font-bold tracking-wide">⚡ PLEXCOM</h1>
              <p className="mt-2 text-xl text-fuchsia-200">VACU Execution Environment</p>
            </div>
            <div className="mt-6 text-sm opacity-70">Initializing Core Modules...</div>
            <div className="w-64 h-2 mt-4 bg-violet-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-fuchsia-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="launcher"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold">🎮 Launching Interface...</h2>
            <p className="text-fuchsia-200 mt-2">Your Plexcom environment is now ready.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
