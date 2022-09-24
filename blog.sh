#!/bin/bash

set -ue

if [[ $# -ne 1 ]]; then
  echo "Invalid args. Please input one args."
  exit 1
fi

case $1 in
  "--blog")
    deno run --allow-write temp/blog.ts --blog;;
  "--content")
    deno run --allow-write temp/blog.ts --content;;
  *)
    echo "Args is only permitted '--blog' or '--content'."
    exit 2
esac

