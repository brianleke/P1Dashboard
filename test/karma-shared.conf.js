module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
//      //3rd Party Code
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angularjs-scope.safeapply/src/Scope.SafeApply.js',
//      'app/scripts/lib/router.js',

      //App-specific Code
      'app/scripts/config/config.js',
      'app/scripts/services/**/*.js',
      'app/scripts/directives/**/*.js',
      'app/scripts/controllers/**/*.js',
      'app/scripts/filters/**/*.js',
      'app/scripts/config/routes.js',
      'app/scripts/app.js'

//      //Test-Specific Code
//      'node_modules/chai/chai.js',
//      'test/lib/chai-should.js',
//      'test/lib/chai-expect.js'
    ]
  }
};
