## setup

1. sudo sysctl -w vm.max_map_count=262144 <br />
2. sudo mkdir -p ./elasticsearch/data && sudo chmod -R 777 ./elasticsearch <br />
3. sudo docker compose up -d  elasticsearch
4. https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-minimal-setup.html >> setup x-pack
5. sudo docker exec -it <elasticsearch-docker id> bash
6. ./bin/elasticsearch-setup-passwords auto > save password at account-note.md
7. change password in ./conf/kibana/kibana.yml
8. sudo docker compose up -d  kibana
9. https://docs.fluentd.org/container-deployment/docker-compose >> follow up step4
