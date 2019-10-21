@Library('eigi-jenkins-library') _

def log = new common.v1.Log(this)

node('docker') {
    checkout scm
    stage('Build') {
        docker.image('node:6.3').inside {
            sh 'npm --version'
        }
    }
}