var chalk = require('chalk');

var MyModule = function(config){

  var config = config || {};

  // Use the "colorize" parameter/default to true
  config.colorize = config.hasOwnProperty('colorize') ? config.colorize : true;

  var log = function(str){
    if (config.hasOwnProperty('prefix')){
      str = config.prefix + ': ' + str;
    }
    if (config.hasOwnProperty('postfix')){
      str = str+' '+config.postfix;
    }
    return str;
  };

  // Basic logging
  this.log = function(msg){
    console.log(log(msg));
    if (config.hasOwnProperty('after')){
      config.after('log', msg);
    }
  };

  // Basic information
  this.info = function(msg){
    if (config.hasOwnProperty('transform')){
      if (typeof config.transform === 'function'){
        msg = config.transform('info', msg);
      }
    }
    if (config.colorize){
      console.log(chalk.blue(log(msg)));
    } else {
      console.log(log(msg));
    }
    if (config.hasOwnProperty('after')){
      config.after('info', msg);
    }
  };

  // Warning
  this.warn = function(msg){
    if (config.hasOwnProperty('transform')){
      if (typeof config.transform === 'function'){
        msg = config.transform('warn', msg);
      }
    }
    if (config.colorize){
      console.log(chalk.yellow.bold(log(msg)));
    } else {
      console.log(log(msg));
    }
    if (config.hasOwnProperty('after')){
      config.after('warn', msg);
    }
  };

  // Error
  this.error = function(msg){
    if (config.hasOwnProperty('transform')){
      if (typeof config.transform === 'function'){
        msg = config.transform('error', msg);
      }
    }
    if (config.colorize){
      console.log(chalk.red.bold(log(msg)));
    } else {
      console.log(log(msg));
    }
    if (config.hasOwnProperty('after')){
      config.after('error', msg);
    }
  };

};

module.exports = MyModule;
