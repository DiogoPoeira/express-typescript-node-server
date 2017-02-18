module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./assets",
            src: ["**"],
            dest: "./build/assets"
          }
        ]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
          dest: "./build",
          force: true,
        }],
        options: {
          module: "commonjs",
          target: "es6",
          sourceMap: false
        }
      }
    },
    tslint: {
        options: {
            configuration: "tslint.json",
            force: true,
            fix: false
        },
        files: {
            src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"]
        }
    },
    watch: {
      ts: {
        files: ["src/\*\*/\*.ts"],
        tasks: ["tslint","ts"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-ts");

  
  grunt.registerTask("dev", [
    "copy",
    "tslint",
    "ts",
    "watch"
  ]);

  grunt.registerTask("default", [
    "copy",
    "ts"
  ]);

};