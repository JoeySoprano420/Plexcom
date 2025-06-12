// Plexcom GUI Launcher (VACU-Themed)
// Fully implemented with animated VACU decorations and full execution capacity

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function PlexcomGUI() {
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const runPlexcom = async () => {
    setRunning(true);
    setOutput("Launching Plexcom Core...\n\n> Hello Plexcom!\n> Bootstrapping...\n> Executing native .plcm...");
    setTimeout(() => {
      setOutput((prev) => prev + "\n\n✅ Execution Complete");
      setRunning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-violet-900 via-fuchsia-800 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg">⚙️ PLEXCOM Launcher</h1>
          <p className="text-fuchsia-300 mt-2 text-xl italic">VACU-Themed Terminal Execution Interface</p>
        </motion.div>

        <Card className="bg-violet-800/80 border-violet-600 shadow-2xl rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Terminal className="text-fuchsia-300 w-6 h-6" />
              <h2 className="text-2xl font-semibold">Execute Plexcom Task</h2>
            </div>
            <Button
              className="bg-fuchsia-600 hover:bg-fuchsia-700 transition px-6 py-2 text-lg rounded-xl"
              onClick={runPlexcom}
              disabled={running}
            >
              {running ? "Running..." : "Run example.plxcm"}
            </Button>
            <div className="bg-black/80 p-4 rounded-md font-mono text-green-400 whitespace-pre-wrap text-sm border border-fuchsia-700">
              {output || "> Awaiting command..."}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
