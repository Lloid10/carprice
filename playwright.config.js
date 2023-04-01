// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 50 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  /* Run tests in files in parallel */
  fullyParallel: true,
  use: {
    // в каком браузере будут щапускаться тесты
   browserName: 'chromium',
   headless: true,
   // скриншот на каждый шаг
   screenshot: 'on',
   ignoreHTTPSErrors: true,
   //собирает весь трейс/ (логи ошибки) только когда падает тест
   trace: 'retain-on-failure', //on/off
   baseURL: process.env.BASE_URL    
   },

   globalSetup: 'utils/globalSetup.js'
};

module.exports = config;

