describe("menuItemValidator Directive", function() {
  var $compile;
  var $rootScope;
  var MenuService;
  var $httpBackend;
  var ApiPath;

  beforeEach(module('common'));

  beforeEach(inject(function ($injector) {
    MenuService = $injector.get('MenuService');
    $httpBackend = $injector.get('$httpBackend');
    ApiPath = $injector.get('ApiPath');
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('shouldn\'t return an error if menu item exists', function(){

    var item = 'L1';

    $httpBackend.whenGET(ApiPath + '/menu_items/' + item + '.json').respond({
      "id":193,
      "short_name":"L1",
      "name":"Orange Chicken",
      "description":"chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
      "price_small":null,
      "price_large":9.75,
      "small_portion_name":null,
      "large_portion_name":null,
      "created_at":"2016-12-04T21:22:53.573Z",
      "updated_at":"2016-12-04T21:22:53.573Z",
      "category_short_name":"L",
      "image_present":true
    });

    $rootScope.favoriteDish = item;
    var html = angular.element('<form name="newsletterForm" \
      <input type="text" name="favoriteDish" ng-model="favoriteDish" menu-item-validator required>\
      </form>');
    var element = $compile(html)($rootScope);

    $rootScope.$digest();
    $httpBackend.flush();

    expect($rootScope.newsletterForm.$error.invalidMenuItem).toBeUndefined();
    expect($rootScope.newsletterForm.$invalid).toBe(false);
  });

  it('should return an error if menu item doesn\'t exist', function(){

    var item = 'A';

    $httpBackend.whenGET(ApiPath + '/menu_items/' + item + '.json').respond(500, {
      "status":"500",
      "error":"Internal Server Error"
    });

    $rootScope.favoriteDish = item;
    var html = angular.element('<form name="newsletterForm" \
      <input type="text" name="favoriteDish" ng-model="favoriteDish" menu-item-validator required>\
      </form>');
    var element = $compile(html)($rootScope);

    $rootScope.$digest();
    $httpBackend.flush();

    expect($rootScope.newsletterForm.$error.invalidMenuItem).toBeDefined();
    expect($rootScope.newsletterForm.$invalid).toBe(true);
  });
});
