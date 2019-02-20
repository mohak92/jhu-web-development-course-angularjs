(function(){
    'use stricit';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var ToBuy = this;

        ToBuy.items = ShoppingListCheckOffService.getToBuyItems();
        ToBuy.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var AlreadyBought = this;

        AlreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "candies", quantity: 3 },
            { name: "Pizzas", quantity: 5 },
            { name: "drinks", quantity: 7 },
            { name: "cakes", quantity: 4 }
        ];
        var boughtItems = [];

        service.buyItem = function(itemIndex) {
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }

})();
