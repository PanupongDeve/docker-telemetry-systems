
# System Logs

curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.17.8-amd64.deb <br />
sudo dpkg -i filebeat-7.17.8-amd64.deb <br /><br />


Modify /etc/filebeat/filebeat.yml to set the connection information: <br />

output.elasticsearch:
  hosts: ["<es_url>"]
  username: "elastic"
  password: "<password>"
setup.kibana:
  host: "<kibana_url>


sudo filebeat modules enable system <br />
Modify the settings in the /etc/filebeat/modules.d/system.yml file. You must enable at least one fileset.


sudo filebeat setup
sudo service filebeat start


# System Metrics

curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.17.8-amd64.deb
sudo dpkg -i metricbeat-7.17.8-amd64.deb


/etc/metricbeat/metricbeat.yml

output.elasticsearch:
  hosts: ["<es_url>"]
  username: "elastic"
  password: "<password>"
setup.kibana:
  host: "<kibana_url>


sudo metricbeat modules enable system
sudo metricbeat setup
sudo service metricbeat start