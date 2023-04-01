// @ts-check
const { test, expect } = require('@playwright/test')

import { inputPlace, auth, selectFilter } from '../helper/commands.spec'
const elementsData = require ('../data/elementData.json')
const dataset = JSON.parse(JSON.stringify(require('../data/data.json')))

let page


test.describe('Тест на вход в карпрайс', async ()=> {


  test.beforeEach(async ({browser})=> {
    
    const context = await browser.newContext()
    page = await context.newPage()

  })


for(const data of dataset){
test(`тест ${data.lighter}`, async () => {

  //перейти на страницу
  await page.goto('')
await page.pause()
  await auth(page)
  
  // выбрать фирму
  await page.locator('div').filter({ hasText: /^Марка авто$/ }).nth(2).click()
  await selectFilter(page, data.firma)

  // выбрать год
  await page.locator('div').filter({ hasText: /^Год$/ }).nth(2).click()
  await selectFilter(page, data.year)
  
  // вставить значение в модель
  await page.locator('div').filter({ hasText: /^Модель$/ }).nth(2).click()
  await selectFilter(page, data.model)

  //вставить емэйл
  await inputPlace(page, elementsData.emailName, data.email)

  // проверить кнопку
  await expect(page.getByRole('button', { name: elementsData.getName })).toBeEnabled()

  //нажать кнопку
  await page.getByRole('button', { name: elementsData.getName }).click()

  //проверить урл
  await expect(page).toHaveURL('https://carprice.ru/wizard-finish')

})
}
})
