#!/bin/bash

docker run -it --rm --network=videoclub_default --name gen_docs -v "$(dirname $PWD)"/docs:/usr/src/docs -w /usr/src/docs node:latest bash -c "npm i -g @graphidocs/docs && graphidocs -e http://processor:3000/graphql -o api_doc"
