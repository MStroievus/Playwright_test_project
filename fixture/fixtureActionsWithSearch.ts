import { Application } from '../app/pages/PageManager'
import { mainTest } from './fixtureBase';

export const userOnSearch = mainTest.extend<{ app: Application }>({
  app: async ({ app }, use) => {
    await app.onHomePage.header.searchButton.click()
    await use(app);

  }
})

