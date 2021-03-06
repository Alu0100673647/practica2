/*
* Dependencias
*/
var gulp  = require('gulp');
var shell = require('gulp-shell');

var desplegargh = function() {
  "use strict";
  let gh = require('gh-pages');

  //process.env.CMDDESC="Deploy GitBook on Github";

  let json = require('./package.json');
  let REPO = json.repository.url;
  console.log( "Repositorio:"+REPO);

  gh.publish('./gh-pages', { repo: REPO, logger: function(m) { console.error(m); } });
};

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('despliegue', desplegargh);

gulp.task('empujar', ['build'], 
 shell.task(
    "git add ."+
    ";"+
    "git commit -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);


//generar pdf
gulp.task('pdf', 
  shell.task(
    "gitbook pdf ./txt",
    { verbose: true })
);



gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});
});
