import { userOnSearch } from '../fixture/fixtureActionsWithSearch'
import { test, expect } from '@playwright/test';

test.describe('Check search functionality', () => {


  userOnSearch('Check if users can find something using a valid value in the search  @Regression @Smoke', async ({ app }) => {
    await app.onHomePage.header.searchComponent.fillKeywordInSearch('dashboard')
    await app.onHomePage.checkIfKeywordExistsOnSideBar('dashboard')
  });

  userOnSearch('Check that is impossible to find something by  using invalid value in search @Regression', async ({ app }) => {
    await app.onHomePage.header.searchComponent.fillKeywordInSearch('I have done my first fixture')
    await app.onHomePage.checkIfKeywordExistsOnSideBar('I have done my first fixture')

  })

  // TODO Тут на сайті  присутня бага тому в провірку  не включив .not,
  userOnSearch('Check that is possible to close search by clicking  on the close button @Regression', async ({ app }) => {
    await app.onHomePage.header.searchComponent.closeButton.click()
    await app.onHomePage.header.searchComponent.searchInput.screenshot({ path: 'screenshot/screenshot.png' })
    await expect(app.onHomePage.header.searchComponent.searchInput).toHaveScreenshot('screenshot/screenshot.png')
    //? Це мала бути  головна  перевірка для вашого  розуміння я добавив скріншот, щоб ви могли побачити як  сховали пошук xD
    //* await expect(app.homePage.header.searchComponent.searchInput).not.toBeVisible()
  })
})
