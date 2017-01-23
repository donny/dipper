#!/usr/bin/env bash

npm run build
cp _redirects build/
cp _headers build/
