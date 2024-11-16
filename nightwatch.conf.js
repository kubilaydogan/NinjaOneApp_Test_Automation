const Services = {}
function loadServices() {
  try {
    Services.chromedriverPath = process.env.CHROMEDRIVER_PATH || require('chromedriver').path;
  } catch (e) {
    console.error('Failed to load services:', e);
  }
}

loadServices();

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
        server_path: Services.chromedriverPath,
      },
      
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            'start-maximized',
            '--no-sandbox',
            '--ignore-certificate-errors',
            'disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-infobars',
            'disable-browser-side-navigation',
            '--remote-debugging-pipe'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
  },
  
};
