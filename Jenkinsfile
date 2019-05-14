pipeline {
    agent any
    parameters {
        string(name: 'Greeting', defaultValue: 'Hello', description: 'How should I greet the world?')
    }
    stages {
        stage('Building') {
            steps {
               sh 'npm install'
               sh 'sass src/assets/scss/main.scss:public/index.css'
            }
        }

        stage('Testing') {
            steps {
                echo "No Tests!"
            }
        }

        stage('Webpack Build') {
            steps {
                sh './node_modules/webpack/bin/webpack.js -p --config-name=webpack.production.config.js'
            }
        }

        stage('Deployment') {
            steps {
                echo "Deployment!"
            }
        }
    }
}
