/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';

  const select = {
    templateOf: {
      menuProduct: '#template-menu-product',
    },
    containerOf: {
      menu: '#product-list',
      cart: '#cart',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    menuProduct: {
      clickable: '.product__header',
      form: '.product__order',
      priceElem: '.product__total-price .price',
      imageWrapper: '.product__images',
      amountWidget: '.widget-amount',
      cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
      amount: {
        input: 'input[name="amount"]',
        linkDecrease: 'a[href="#less"]',
        linkIncrease: 'a[href="#more"]',
      },
    },
  };

  const classNames = {
    menuProduct: {
      wrapperActive: 'active',
      imageVisible: 'active',
    },
  };

  const settings = {
    amountWidget: {
      defaultValue: 1,
      defaultMin: 1,
      defaultMax: 9,
    }
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  };

  class Product {                                  /* tworzymy klasę Product */
    constructor(id, data) {                        /* z app.initMenu: id = productData, data = thisApp.data.products[productData]*/
      const thisProduct = this;                    /*  thisProduct.id- to samo co w przykładzie z Employee: thisEmoployee.name*/

      thisProduct.id = id;                         /* zapisujemy wartości argumentów do właściwości instancji*/
      thisProduct.data = data;                     /* używamy 'this / thisProduct', który jest odnośnikiem do obiektu <new Product>*/

      console.log('new Product: ', thisProduct);
    }
  }

  const app = {                                    /* deklaracja obiektu app */
    initMenu: function () {                        /* dodajemy deklarację metody app.initMenu */
      const thisApp = this;
      console.log('thisApp.data: ', thisApp.data);

      for (let productData in thisApp.data.products) { /* tworzymy instancję dla każdego produktu przez użycie pętli */
        new Product(productData, thisApp.data.products[productData]); /*  przekazane do konstruktora jako "id" oraz "data"*/
      }
    },

    initData: function () {
      const thisApp = this;

      thisApp.data = dataSource;                    /* thisApp.data to referencja do tych samych danych, do których kieruje OBIEKT dataSource */
    },

    init: function () {
      const thisApp = this;                         /* uruchamiamy metodę init na obiekcie app (app.init), dlatego this wskazuje na app */
      console.log('*** App starting ***');
      console.log('thisApp:', thisApp);
      console.log('classNames:', classNames);
      console.log('settings:', settings);
      console.log('templates:', templates);

      thisApp.initData();
      thisApp.initMenu();
    },
  };

  app.init();
}
