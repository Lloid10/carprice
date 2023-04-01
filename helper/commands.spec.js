const elementsData = require ('../data/elementData.json')


export const selectFilter =  async (page, text) => {
    await page.getByText(text, { exact: true }).click()
}

export const auth =  async (page, field) => {
    field = await page.getByPlaceholder(elementsData.numberName)
    if (await field.isVisible()) {
      await page.getByRole('link', { name: elementsData.manual }).click()
    }  else  {
      await page.getByRole('heading', { name: elementsData.table }).click()
    } 
}

