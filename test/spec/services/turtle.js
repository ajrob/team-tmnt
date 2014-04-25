'use strict';

describe('Service: Turtle', function () {

  // load the service's module
  beforeEach(module('teamTmntApp'));

  // instantiate service
  var Turtle;
  beforeEach(inject(function (_Turtle_) {
    Turtle = _Turtle_;
  }));

  it('should do something', function () {
    expect(!!Turtle).toBe(true);
  });

});
