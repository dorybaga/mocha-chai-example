var chai = require('chai'); //how we pull in a package

var expect = chai.expect;
var should = chai.should();

var Human = require('../human.js');

describe('Human Class', function (){

  var human = Human;
  var nakaz;

  // before each it statement instantiate a new Numan named Nakaz; don't have to repeat yourself within each it statement
  beforeEach(function (){
    nakaz = new Human('Nakaz');
  });


  // build a class Human
  it('should be a function', function (){
    expect(human).to.be.a('function');
  });

  // want human to have a name
  it('should have a property name', function (){
    // var nakaz = new Human('Nakaz');
    // expect(nakaz.name)to.equal('Nakaz')
    expect(nakaz.name).to.equal('Nakaz');
  });

  it('should have a method sayName()', function (){
    // var nakaz = new Human('Nakaz');
    expect(nakaz.sayName).to.be.a('function');
    expect(nakaz.sayName()).to.equal('Nakaz');
  });

});