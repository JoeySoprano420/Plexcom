# Plexcom


 How to Build and Run



cd plexcom
make all         # Compile to .plcm executable
make run         # Execute the .plxcm script through interpreter
make iso         # Build ISO image (.plexcore) for VirtualBox boot




| Purpose               | New Extension |
| --------------------- | ------------- |
| Source Script         | `.plxcm`      |
| Intermediate Script   | `.pxcm`       |
| Executable/Transpiled | `.plcm`       |
| VirtualBox Loader     | `.plexcore`   |



🔏 Reserved + Canonical
We’ll use:

.plxcm → main Plexcom source files

.pxcm → intermediary transpiled formats

.plcm → compiled object/executable designations

.plexcore → core OS ISO loader file (VirtualBox loader)


serve the Plexcom GUI via index.html + bundle.js (or vite, next, etc.)


🔮 Features:
Cross-platform React/Electron compatible

Fully animated VACU-style splash screen

Gradient bloom from black → violet → fuchsia

Animated loader bar and delayed launcher reveal

Designed for Windows x64, but runs on Linux/macOS in Electron or any browser runtime


🌟 Features Included:
🚀 Launch GUI for .plxcm module execution

🧠 Animated VACU gradient shell: black → violet → fuchsia

🧰 Auto-status updater simulating real-time ops

🧾 Preloaded modules:

net_boot.plxcm – Networking init

core_repair.plxcm – Diagnostic repair

data_map.plxcm – Filesystem loader

echo_drain.plxcm – Focus/echo suppression




---

## 🌐 **PLEXCOM**

**Tagline:** *Command the Core. Boot the Future.*

---

### 🔍 Overview

**PLEXCOM** is a cross-platform, terminal-powered execution environment engineered for modular control, GUI-enhanced access, and mythic interface interaction. Designed in the spirit of the **VACU aesthetic**, it blends elite system orchestration with a ritualized launch style—bridging script, interface, and performance into one cohesive command suite.

PLEXCOM is not just a launcher. It's a **fully-integrated, self-contained, command-operated experience** with:

* 🌠 **VACU splash animations**
* 🌀 **Module-based boot selectors**
* ⚡ **One-click execution runners**
* 🛠 **Self-compiling from source to .exe / .AppImage**
* 🎨 **Custom VACU GUI interfaces with immersive theming**

---

### 💡 Core Philosophy

> “The interface is not just the bridge. It is the ceremony.”

PLEXCOM’s core logic is built around the idea of **command as ritual**—where each script, module, or function represents not just code, but a precise invocation of control.

---

### 🔧 Architecture

* **Written In:** `Electron + React + Bash + JSON-script + C/ASM bridges`
* **Execution Types:** AOT (Ahead-of-Time), JIT (Just-in-Time), Transpiled/Scripted
* **Runs On:** Windows (via `.exe`) and Linux (via `.AppImage`)
* **No Dependencies Required:** All systems are embedded and bundled

---

### 📦 What’s Inside

| Component          | Purpose                                                  |
| ------------------ | -------------------------------------------------------- |
| `main.js`          | Electron entrypoint with preload support                 |
| `preload.js`       | Context bridge for native system calls                   |
| `index.html`       | Injects GUI React interfaces (Splash, Selector)          |
| `bundle.js`        | Compiled frontend logic (VACU visuals + UI)              |
| `modules/*.plxcm`  | Executable command modules (networking, repair, mapping) |
| `assets/icon.png`  | Official VACU-style launcher icon                        |
| `plexcom-runner.*` | One-click desktop launchers for Windows and Linux        |
| `package.json`     | Build config for Electron Builder                        |

---

### 🌠 Interface Features

* 🔥 **VACU Boot Splash** — Pulsing animations, loader bar, auto-update daemon
* 📁 **Boot Module Selector** — Launch `.plxcm` commands with full status feedback
* 🎮 **Self-launcher scripts** — Works instantly with a single double-click
* 💻 **Full build system** — Easily convert to `.exe` or `.AppImage`

---

### 🚀 Ready-To-Run

* Windows: Double-click `PLEXCOM.exe` or run `plexcom-runner.bat`
* Linux/macOS: Execute `PLEXCOM.AppImage` or `plexcom-runner.sh`

No setup. No installation. **Just power and launch.**

---

### 🛡 Use Cases

* 🧩 Tactical operations UI
* 🧠 Scripted automation with GUI preview
* 🌍 Cross-platform system interface gateway
* 📦 Developer tools for executing command trees and environmental setup

---

### 🧬 VACU Integration

PLEXCOM is canonically aligned with **Violet Aura Creations Universe (VACU)**. It supports modular integration of universe-specific command arcs, factions, terminal rituals, and echo-driven modules.

It is used in-universe by:

* The **WOLF PACK** for drop-deploy field bootups
* **S.E.E.D. Protocol** for initiating localized environments
* **Coreline Outposts** as standard operations panel software

---

### 🔗 Final Thought

**PLEXCOM** doesn’t just run programs.
It awakens them.

---


