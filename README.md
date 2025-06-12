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


