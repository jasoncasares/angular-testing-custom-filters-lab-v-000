describe('Favorite Food Filter', function () {
	var $filter;

	beforeEach(module('app'));

	beforeEach(function () {
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
	});

	it('should filter the food', function () {
	  var people = [
      {
        name: 'Brian',
        favoriteFood: 'Pizza'
      },
      {
        name: 'Loriann',
        favoriteFood: 'Sugar'
      }
    ];

    result = $filter('favoriteFood')(people, 'Pizza');

    expect(result[0].favoriteFood).toEqual('Pizza');
    expect(result[0].name).toEqual('Brian');
	});
});
