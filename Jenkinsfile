pipeline {
  agent {dockerfile true}
  stages {
    stage ("build"){
      step {
        sh 'echo "building application" '
      }
    }
    stage ("test"){
      step {
        sh 'echo "testing  application" '
      }
    }
    stage ("deploy"){
      step {
        sh 'echo "deploying  application" '
      }
    }
  }
}
