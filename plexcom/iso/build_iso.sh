#!/bin/bash
mkdir -p iso_root/bin
cp ../plex_exec.plcm iso_root/bin/
grub-mkrescue -o plexcom.plexcore iso_root
