#!groovy

def err_msg = ""
def repo_name = "jenkins-pipeline-sample"
def git_url = "git@sample.github.com:comefigo/${repo_name}.git"
def dev_branch = "dev"
def release_branch = "master"

node {
  try {
    // ソースの取得
    stage("get resource") {
      // カレントディレクトにgitリポジトリが存在するか否かの確認
      if(fileExists("./${repo_name}") && fileExists("./${repo_name}/.git")) {
        // ブランチの切替
        def CHECKOUT_RESULT = sh(script: "cd ./${repo_name} && git checkout ${dev_branch}", returnStatus: true) == 0
        if(!CHECKOUT_RESULT) {
          // throw error
          error "checkoutに失敗しました"
        }
        // gitがある場合はpull
        def PULL_RESULT = sh(script: "cd ./${repo_name} && git pull", returnStatus: true) == 0
        if(!PULL_RESULT) {
          error "pullに失敗しました"
        }
      } else {
        // gitがない場合はclone
        def CLONE_RESULT = sh(script: "git clone ${git_url} ${repo_name}", returnStatus: true) == 0
        if(!CLONE_RESULT) {
          error "cloneに失敗しました"
        }
      }
    }
      
    // npmライブラリのインストール
    stage("install libs") {
      withEnv(["PATH+NODE=${JENKINS_HOME}/.nvm/versions/node/v6.9.3/bin/"]) {
        def NPM_RESULT = sh(script: "cd ./${repo_name} && npm install", returnStatus: true) == 0
        if(!NPM_RESULT) {
          error "npm installに失敗しました"
        }
      }
    }
      
      // コードのテスト
      stage("testing code") {
        withEnv(["PATH+NODE=${JENKINS_HOME}/.nvm/versions/node/v6.9.5/bin/"]) {
          def TEST_RESULT = sh(script: "cd ./${repo_name} && npm test", returnStatus: true) == 0
          if(!TEST_RESULT) {
            error "testに失敗しました"
          }
        }
      }

  } catch (err) {
    err_msg = "${err}"
    currentBuild.result = "FAILURE"
  } finally {
    if(currentBuild.result != "FAILURE") {
      currentBuild.result = "SUCCESS"
    }
    notigication(err_msg)
  }
}