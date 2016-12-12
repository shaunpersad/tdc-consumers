#!/usr/bin/env bash

while ! curl http://elasticsearch:9200; do sleep 1; done;

node index.js