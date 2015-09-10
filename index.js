var chalk = require('chalk');

var MyModule = function(config){

  var config = config || {};

  // Use the "colorize" parameter/default to true
  config.colorize = config.hasOwnProperty('colorize') ? config.colorize : true;

  var log = function(str){
    if (config.hasOwnProperty('prefix')){
      return config.prefix + ': ' + str;
    }
    return str;
  };

  // Basic logging
  this.log = function(msg){
    console.log(log(msg));
  };

  // Basic information
  this.info = function(msg){
    msg = "[INFO] "+msg;
    if (config.colorize){
      console.log(chalk.blue(log(msg)));
    } else {
      console.log(log(msg));
    }
  };

  // Warning
  this.warn = function(msg){
    msg = "[WARNING] "+msg;
    if (config.colorize){
      console.log(chalk.yellow.bold(log(msg)));
    } else {
      console.log(log(msg));
    }
  };

  // Error
  this.error = function(msg){
    msg = "[ERROR] "+msg;
    if (config.colorize){
      console.log(chalk.red.bold(log(msg)));
    } else {
      console.log(log(msg));
    }
  };

};

module.exports = MyModule;
