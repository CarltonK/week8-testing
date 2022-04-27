const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl: 'http://localhost:9000',
        options: {
            'sonar.sources': '.',
            'sonar.tests': '.',
            'sonar.login': 'admin',
            'sonar.password': 'moringa',
            'sonar.inclusions': '**', // Entry point of your code
            'sonar.test.inclusions': '*.js',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
        }
    }, () => { });