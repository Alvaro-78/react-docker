cd e2e
docker run -v $(pwd):/app -w /app node:alpine npm install
cd ..
docker run --network="host" -v $(pwd)/e2e:/workdir rdelafuente/cypress
