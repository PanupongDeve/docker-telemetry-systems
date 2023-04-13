https://www.elastic.co/guide/en/apm/guide/7.17/apm-quick-start.html

1. get service token at <kibanahost>/app/fleet/agents and add FLEET_SERVER_SERVICE_TOKEN=
2. docker compose up -d elastic-agent
3. goto <kibanahost>:5601/app/fleet/integrations/apm-7.17.0/add-integration
