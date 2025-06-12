all:
	gcc compiler/plexaotc.c -o plexaotc
	nasm -f elf64 compiler/asmgen.asm -o out.o
	ld -o plex_exec out.o

run:
	./plexinterp.bash example.plex

iso:
	cd iso && bash build_iso.sh
