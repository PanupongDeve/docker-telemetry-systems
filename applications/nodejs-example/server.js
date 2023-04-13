var apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'example-nodejs',
  
    // Use if APM Server requires a token
    secretToken: '',
  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200'
  })



apm.logger.info("Start Success!!!")