(function() {
  'use strict';

  var app = angular.module('cameraApp', []);

  app.filter('asterisks', function() {
    return (input) => {
      let asterisksArray = [];
      for (var i = 0; i < parseInt(input); i++) {
        asterisksArray.push('*');
      }
      return asterisksArray.join('');
    }
  })

  app.controller('cartCtrl', function() {
    this.addedToCart = [];

    this.addToCart = function(camera) {
      if (this.addedToCart.length) {
        for (var i = 0; i < this.addedToCart.length; i++) {
          if (this.addedToCart[i].id === camera.id) {
            return this.addedToCart[i].quantity++;
          }
        }
      }
      camera.quantity = 1;
      this.addedToCart.push(camera);
    };

    this.removeFromCart = function(camera) {
      this.addedToCart = this.addedToCart.filter(item => item.id !== camera.id);
    }

    this.subtotal = 0;

    this.updatePrices = function() {
      var total = 0;
      this.addedToCart.forEach((item) => {
        total += (item.quantity * item.price);
      });
      this.subtotal = total;
    }

  });

  app.controller('inventoryCtrl', function() {
    this.cameras = [{
      id: 1,
      name: 'Nikon D3100 DSLR',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 4,
      price: 369.99,
      onSale: true
    },
    {
      id: 2,
      name: 'Canon EOS 70D',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2,
      price: 1099.0,
      onSale: false
    },
    {
      id: 3,
      name: 'Nikon D810A',
      image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
      rating: 3,
      price: 3796.95,
      onSale: true
    }];

    this.sort = 'name';
    this.search = '';
  });

  $('select').material_select();

})();
