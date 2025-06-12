#!/bin/bash

parse_line() {
    line="$1"
    if [[ "$line" == ::prompt:* ]]; then
        echo "[PROMPT] ${line#*::prompt:}"
    elif [[ "$line" == @link:* ]]; then
        cmd=${line#*@link: }
        echo "[LINK] Executing: $cmd"
        bash -c "$cmd"
    elif [[ "$line" == \[exec\]* ]]; then
        echo "[EXEC] Running compiled ASM..."
        ./plex_exec
    fi
}

while read -r line; do
    parse_line "$line"
done < "$1"
