# langchain-sample-code

- 使い方はこちら
  - https://speakerdeck.com/shukob/langchaindewebsaitononei-rong-qu-de-yagithubsosukodoqu-de

## Webサイトの情報取得

```
npx ts-node cheerioWebBaseLoader.ts https://www.touken-world.jp/tips/7398/
```
- 出力結果にコードが多く混じる場合

```
npx ts-node webLoad.ts https://www.gyomusuper.jp/
```

## GitHubのソースコード取得

- mainブランチの場合

```
npx ts-node githubLoader.ts https://github.com/GoogleCloudPlatform/enterprise-knowledge-solution
```

- mainブランチ以外（masterブランチの場合もこちら)

```
npx ts-node githubLoader.ts https://github.com/GoogleCloudPlatform/enterprise-knowledge-solution version1.2
```

※GitHubのRate Limitに抵触してエラーになることあり
