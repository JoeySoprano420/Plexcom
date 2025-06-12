# Plexcom


 How to Build and Run



cd plexcom
make all          # Compiles AOT compiler and builds output binary
make run          # Runs interpreter on example.plex
make iso          # Builds VirtualBox-compatible ISO image



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


