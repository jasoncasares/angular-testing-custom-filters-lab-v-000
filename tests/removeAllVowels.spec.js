describe('removeAllVowels Filter', function () {
	var $filter;

	beforeEach(module('app'));

	beforeEach(function () {
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
	});

	it('should filter the food', function () {
	  var string = "Here is a string to remove some vowels.";

    result = $filter('removeAllVowels')(string);

    expect(result).toEqual('Hr s  strng t rmv sm vwls.');
	});
});
