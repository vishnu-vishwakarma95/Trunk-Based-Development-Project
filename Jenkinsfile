pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/vishnu-vishwakarma95/Trunk-Based-Development-Project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            junit 'test-results/*.xml'
        }
    }
}
