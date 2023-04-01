const elementsData = require ('../data/elementData.json')


export const inputPlace =  async (page, label, text) => {
    await page.getByPlaceholder(label).type(text)
}

export const selectFilter =  async (page, text) => {
    await page.getByText(text, { exact: true }).click()
}

export const auth =  async (page) => {
    const field = "[placeholder='A 000 AA 000']"
    if (field && field.length > 0) {
        await page.getByRole('link', { name: 'ввести данные' }).click()
    } else  {
        await page.getByRole('heading', { name: 'Мы покупаем автомобили по рыночной цене' }).click()
    } 
}

