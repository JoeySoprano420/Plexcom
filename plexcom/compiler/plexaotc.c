#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
       printf("Usage: %s <input.plxcm>\n", argv[0]);
        return 1;
    }

    FILE *src = fopen(argv[1], "r");
    if (!src) {
        perror("fopen");
        return 1;
    }

    FILE *out = fopen("out.asm", "w");
    if (!out) {
        perror("fopen");
        fclose(src);
        return 1;
    }

    char line[256];

    fprintf(out, "section .data\nmsg db 'Plexcom executing',0Ah\n");
    fprintf(out, "section .text\nglobal _start\n_start:\n");

    while (fgets(line, sizeof(line), src)) {
        if (strstr(line, "::prompt:")) {
            fprintf(out, "    ; PROMPT: %s", line);
        } else if (strstr(line, "@link:")) {
            fprintf(out, "    ; LINK: %s", line);
        } else if (strstr(line, "[exec]")) {
            fprintf(out,
                    "    mov eax, 4\n    mov ebx, 1\n    mov ecx, msg\n    mov edx, 20\n    int 0x80\n");
        }
    }

    fprintf(out, "    mov eax, 1\n    xor ebx, ebx\n    int 0x80\n");

    fclose(src);
    fclose(out);

    system("nasm -f elf64 out.asm -o out.o && ld -o plex_exec out.o");
    return 0;
}
