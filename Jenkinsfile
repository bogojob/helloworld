pipeline {
  agent {dockerfile true}
  stages {
    stage ("build"){
      step {
        echo "building application"
      }
    }
    stage ("test"){
      step {
        echo "testing  application"
      }
    }
    stage ("deploy"){
      step {
        echo "deploying  application"
      }
    }
  }
}
