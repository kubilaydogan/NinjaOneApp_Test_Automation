module.exports = {
  src_folders: ['test'],
  page_objects_path: ['nightwatch/page-objects'],
  custom_commands_path: [],
  custom_assertions_path: [],
  plugins: [],
  globals_path: 'nightwatch/globals/globals.js',
  
  webdriver: {},

  test_workers: {
    enabled: true
  },

  skip_testcases_on_fail: false,

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://app.ninjarmm.com/auth/#',

      screenshots: {
        enabled: false,
        path: 'screenshots',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },
      
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: {}
      },
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            '--no-sandbox',
            '--ignore-certificate-errors',
            '--disable-dev-shm-usage',
            '--disable-infobars',
             '--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: undefined,
        host: 'localhost',
        ssl: false,
        default_path_prefix: '',
        proxy: undefined,
        cli_args: [
          // --verbose
        ]
      }
    },
    
  },
  
};
