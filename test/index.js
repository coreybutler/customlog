"use strict";

var assert = require('assert');

suite('Sanity Check',function(){

  var MyModule;

  test('Instantiate the module.',function(){
    try {
      MyModule = require('../index');
      assert.ok(MyModule !== null,'Unexpected result. Module imported but returned null.');
      var test = new MyModule();
      assert.ok(test !== null && test !== undefined,'Could not initialize the module.');
    } catch (e) {
      assert.ok(false,'Could not import the module.');
    }
  });

//  test('Forced error', function(){
//    assert.ok(true === false, 'Why are you forcing me to be bad?');
//  });

});
