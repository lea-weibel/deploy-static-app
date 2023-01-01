#!/bin/bash

echo "Pulling"
git pull

echo "Starting application"
docker compose up -d --build
