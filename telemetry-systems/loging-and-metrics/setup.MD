## setup

1. sudo sysctl -w vm.max_map_count=262144 <br />
2. sudo mkdir -p ./elasticsearch/data && sudo chmod -R 777 ./elasticsearch <br />
3. sudo docker compose up -d
4. https://docs.fluentd.org/container-deployment/docker-compose >> follow up step4