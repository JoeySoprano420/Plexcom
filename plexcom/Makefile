all:
	gcc compiler/plexaotc.c -o plexaotc
	nasm -f elf64 out.asm -o out.o
	ld -o plex_exec.plcm out.o

run:
	./interpreter/plexinterp.bash example.plxcm

iso:
	cd iso && bash build_iso.sh
