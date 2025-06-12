#!/bin/bash
mkdir -p iso_root/bin
cp ../plex_exec iso_root/bin/
grub-mkrescue -o plexcom.iso iso_root
