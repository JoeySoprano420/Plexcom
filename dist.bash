/dist
├── main.js                  # Electron entry
├── index.html               # Injects SplashLoader + BootSelector
├── preload.js               # Optional Electron preload
├── package.json             # Includes electron-builder config
├── assets/
│   └── plexcom-icon.png     # Generated
├── plexcom-runner.bat       # For Windows
├── plexcom-runner.sh        # For Linux/macOS
├── modules/
│   ├── net_boot.plxcm
│   ├── core_repair.plxcm
│   ├── data_map.plxcm
│   └── echo_drain.plxcm
