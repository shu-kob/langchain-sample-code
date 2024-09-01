import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github'

const url = process.argv[2]

async function readSorceCodesFromGithub(url: string) {

  const loader = new GithubRepoLoader(
    url,
    {
      branch: "main", // Defaultブランチが "master" でないか注意。他のブランチも選択可能
      recursive: true,
      processSubmodules: true,
      unknown: "warn",
      maxConcurrency: 5, // Defaults to 2
      ignorePaths: ["*.json", "*.yaml", "*.yml", "*config*", "*.md", "Dockerfile", "*ignore", ".eslintrc.js", "*.svg"] // 除外するファイルパス
    }
  );

  for await (const doc of loader.loadAsStream()) {
    console.log(doc)
  }
};

readSorceCodesFromGithub(url)
