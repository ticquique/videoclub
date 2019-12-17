#!/bin/bash
docker run -it --rm --network=videoclub_default --name seed_db.js -v "$PWD":/usr/src/app -w /usr/src/app node:latest node seed_db.js
