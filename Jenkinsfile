pipeline {
  agent any

  tools {
    nodejs 'node7.10.0'
  }

  environment {
    CIRCLE_PROJECT_USERNAME = 'slncu'
    CIRCLE_PROJECT_REPONAME = 'slncu'
    GIT_COMMITTER_NAME = 'jenkins'
    GIT_COMMITTER_EMAIL = 'braundrot.s@gmail.com'
    GIT_AUTHOR_NAME = 'jenkins'
    GIT_AUTHOR_EMAIL = 'braundrot.s@gmail.com'
  }

  stages {
    stage('dependency') {
      steps {
        echo 'test成功'
      }
    }

    // stage('dist') {
    //   when {
    //     branch 'release'
    //     expression {
    //       !sh(returnStdout: true, script: 'git show -s --format=%s HEAD').trim().startsWith(':rocket:')
    //     }
    //   }

    //   steps {
    //     sh 'npm run ci:status -- pending jenkins/dist "リリースビルド中" $BUILD_URL'
    //     sh 'npm run dist'
    //     sh 'git add .'
    //     sh 'git commit -m ":rocket: chore: update dist - automated commit by jenkins"'
    //     sh 'git push origin HEAD:release'
    //   }

    //   post {
    //     success {
    //       sh 'npm run ci:status -- success jenkins/dist "リリースビルド成功" $BUILD_URL'
    //     }
    //     failure {
    //       sh 'npm run ci:status -- failure jenkins/dist "リリースビルド失敗" $BUILD_URL'
    //     }
    //   }
    // }

    // stage('lint') {
    //   steps {
    //     sh 'npm run ci:status -- pending jenkins/lint "Lint中" $BUILD_URL'
    //     sh 'npm run lint'
    //   }
    //   post {
    //     success {
    //       sh 'npm run ci:status -- success jenkins/lint "Lint OK" $BUILD_URL'
    //     }
    //     failure {
    //       sh 'npm run ci:status -- failure jenkins/lint "Lint Error" $BUILD_URL'
    //     }
    //   }
    // }

    // stage('stylelint') {
    //   steps {
    //     sh 'npm run ci:status -- pending jenkins/stylelint "Stylelint中" $BUILD_URL'
    //     sh 'npm run stylelint'
    //   }
    //   post {
    //     success {
    //       sh 'npm run ci:status -- success jenkins/stylelint "Stylelint OK" $BUILD_URL'
    //     }
    //     failure {
    //       sh 'npm run ci:status -- failure jenkins/stylelint "Stylelint Error" $BUILD_URL'
    //     }
    //   }
    // }

    // stage('unit test') {
    //   steps {
    //     sh 'npm run ci:status -- pending jenkins/unit-test "ユニットテスト中" $BUILD_URL'
    //     sh 'npm test'
    //   }
    //   post {
    //     success {
    //       sh 'npm run ci:status -- success jenkins/unit-test "ユニットテストOK" $BUILD_URL'
    //     }
    //     failure {
    //       sh 'npm run ci:status -- failure jenkins/unit-test "ユニットテスト失敗" $BUILD_URL'
    //     }
    //     always {
    //       sh 'npm run codecov'
    //     }
    //   }
    // }
  }
}