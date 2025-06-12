// VACU Boot Selector UI for Plexcom Modules
// Cross-platform React UI that launches individual .plxcm modules

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const modules = [
  {
    name: "Network Boot",
    file: "net_boot.plxcm",
    description: "Initializes networking stack and device ID broadcast."
  },
  {
    name: "Core Repair",
    file: "core_repair.plxcm",
    description: "Runs a diagnostic pass and applies self-heal instructions."
  },
  {
    name: "Data Map",
    file: "data_map.plxcm",
    description: "Loads core file structure and virtual mount map."
  },
  {
    name: "Echo Drain",
    file: "echo_drain.plxcm",
    description: "Purges background echo-chatter and restores input focus."
  }
];

export default function PlexcomBootSelector() {
  const [activeModule, setActiveModule] = useState(null);
  const [status, setStatus] = useState("");

  const handleLaunch = (mod) => {
    setActiveModule(mod);
    setStatus(`Launching ${mod.name}...`);
    setTimeout(() => setStatus(`✅ ${mod.name} executed successfully.`), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-violet-900 to-fuchsia-800 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          🌐 VACU Boot Selector
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-violet-800/80 rounded-2xl p-5 shadow-lg hover:shadow-xl border border-fuchsia-600"
            >
              <h2 className="text-2xl font-semibold text-fuchsia-200">{mod.name}</h2>
              <p className="text-sm text-fuchsia-100 mb-3 mt-1">{mod.description}</p>
              <Button
                onClick={() => handleLaunch(mod)}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 mt-2 w-full text-white"
              >
                Launch
              </Button>
            </motion.div>
          ))}
        </div>

        {status && (
          <div className="mt-8 text-center text-lg text-green-300 font-mono animate-pulse">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
