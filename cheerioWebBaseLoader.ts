import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { HtmlToTextTransformer } from '@langchain/community/document_transformers/html_to_text'

async function webLoad (url: string) {
  const loader = new CheerioWebBaseLoader(url)
  const docs = await loader.load()
  const splitter = RecursiveCharacterTextSplitter.fromLanguage('html')
  const transformer = new HtmlToTextTransformer()
  const sequence = splitter.pipe(transformer)
  const newDocuments = await sequence.invoke(docs)
  console.log('newDocuments:')
  console.log(newDocuments)
}

webLoad('https://shu-kob.hateblo.jp/entry/2024/08/29/234143')