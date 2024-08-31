import * as cheerio from 'cheerio'

const url = process.argv[2]

async function webLoad (url: string) {
  // HTMLの取得
  const response = await fetch(url)
  const htmlText = await response.text()
  const cheerioText = cheerio.load(htmlText)

  // styleとscriptを除去
  cheerioText('style').remove()
  cheerioText('script').remove()

  const bodyContent: string = cheerioText('body').text().replace(/\s+/g, '')

  console.log('bodyContent:')
  console.log(bodyContent)
  return bodyContent
}

webLoad(url)
