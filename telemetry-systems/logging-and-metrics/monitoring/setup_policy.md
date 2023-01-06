

PUT _ilm/policy/cleanup_policy
{
  "policy": {
    "phases": {
      "delete": {
        "actions": {
          "delete" : { 
            "min_age": "1d",           
            "actions": { "delete": {} }
          }
        }
      }
    }
  }
}


PUT filebeat-*/_settings
{
  "lifecycle": {
    "name": "cleanup_policy"
  }
}


PUT metricbeat-*/_settings
{
  "lifecycle": {
    "name": "cleanup_policy"
  }
}

PUT fluentd-*/_settings
{
  "lifecycle": {
    "name": "cleanup_policy"
  }
}


PUT _template/logging_policy_template
{
  "index_patterns": ["filebeat-*", "metricbeat-*", "fluentd-*"],
  "settings": {
    "index": {
      "lifecycle": {
        "name": "cleanup_policy"
      }
    }
  }
}