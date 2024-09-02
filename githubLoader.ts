import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github'

const url = process.argv[2]

const branch = process.argv[3] || "main"

const gitHubAccessToken = process.env.GITHUB_ACCESS_TOKEN || ""

async function readSorceCodesFromGithub(url: string, branch: string, gitHubAccessToken: string) {

  const loader = new GithubRepoLoader(
    url,
    {
      branch: branch,
      accessToken: gitHubAccessToken,
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

readSorceCodesFromGithub(url, branch, gitHubAccessToken)
