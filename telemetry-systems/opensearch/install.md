1.To increase the value, add the following line to /etc/sysctl.conf:

vm.max_map_count=262144
sudo sysctl -p to reload.

cat /proc/sys/vm/max_map_count
2. create docker compose  -> https://opensearch.org/docs/latest/install-and-configure/install-opensearch/docker/#sample-docker-composeyml
3. setup security -> https://opensearch.org/docs/latest/security/configuration/index/
3. Login with the default username (admin) and password (admin)