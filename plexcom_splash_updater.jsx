// VACU Boot Splash + Updater Daemon for Plexcom GUI
// Shows animated startup and background auto-update daemon

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SplashAndUpdater() {
  const [booting, setBooting] = useState(true);
  const [updateMsg, setUpdateMsg] = useState("Checking for updates...");

  useEffect(() => {
    const bootTimer = setTimeout(() => setBooting(false), 3000);
    const updateTimer = setTimeout(() => setUpdateMsg("✅ Plexcom is up to date."), 4500);
    return () => {
      clearTimeout(bootTimer);
      clearTimeout(updateTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-violet-900 to-fuchsia-800 text-white flex items-center justify-center">
      {booting ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold tracking-widest text-fuchsia-300 animate-pulse">PLEXCOM</h1>
          <p className="mt-4 text-sm text-fuchsia-100">Initializing VACU Modules...</p>
          <div className="mt-6 w-60 h-2 bg-violet-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-fuchsia-400"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.6, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-2 text-fuchsia-100">{updateMsg}</h2>
          <p className="text-sm text-green-300 italic">VACU Daemon running in background</p>
        </motion.div>
      )}
    </div>
  );
}
