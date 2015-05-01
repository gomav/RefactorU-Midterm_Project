$(document).on('ready', function() {

});

var Menu = function(title, description, price){
  this.title = title;
  this.description = description;
  this.price = price;

  this.render();
};

Menu.prototype.render = function (){
  if(this.el === undefined){

    this.el = $('#menu-tpl')
    .clone()
    .attr('id', null);
  }

  this.el.find('.menu-title').text(this.title);//('<a href="http://en.wikipedia.org/wiki/' + this.title.split(' ').join('_') + '">'+ this.title + '</a>' );
  this.el.find('.menu-description').text(this.description);
  this.el.find('.item-price').text(this.price);

  return this.el;
};

var MenuLibrary = function(name){

  this.name = name;

  this.menus = [];

  this.render();
};

MenuLibrary.prototype.addMenu = function(menu) {

  this.menus.push(menu);

  this.render();
};

MenuLibrary.prototype.render = function () {
  if(this.el === undefined){

    this.el = $('#menu-library-tpl')
      .clone()
      .attr('id', null);

    this.el.find('.new-menu-form').on('submit', this.onFormSubmit.bind(this));
  }

  this.el.find('.library-name').text(this.name);

  var menuElements = this.menus.map(function(menu){
    return menu.render();
  });

  this.el.find('.menu-list').append(menuElements);

  return this.el;

};
MenuLibrary.prototype.onFormSubmit = function(e){
  e.preventDefault();


  var menuTitle = $(e.currentTarget).find('[name=menu-title]').val();
  var menuDescription = $(e.currentTarget).find('[name=menu-description]').val();
  var itemPrice = $(e.currentTarget).find('[name=item-price]').val();

  var newMenu = new Menu(menuTitle, menuDescription, itemPrice);

  this.addMenu(newMenu);
};

// var menuItem1 = new Menu('Papa a la Huancaina', 'Yukon gold potato with ají Amarillo, feta cheese sauce on butter lettuce, with hard-boild egg and olive', '$15.00' );
// var menuItem2 = new Menu('Tequeños', 'Wonton puffs filled with wild Dungeness crab, shrimp, cream cheese, red bell pepper and chives served with Huancaína & Huacaína & sauce.', '$12.99');
// var menuItem3 = new Menu('Causa Limeña', 'Ají amarillo-lime infused potato, wild Dungeness crab, avocado, egg, bolija olive, rocoto, Huacatay & HUancaína sauce.', '$3.98');
// var menuItem4 = new Menu('Choritos a la chalaca', 'Six chilled New Zealand green mussels with diced onions, tomato, Ají amarillo, Cuzco corn, cilantro and lime.', '$5.95');
// var menuItem5 = new Menu('Papa Rellena', 'Panko crusted fried potato croquette, filled with beef picadillo, onions, raisins, egg and botija olives; served with salsa criolla.', '$13.99');
//
// var myLibrary1 = new MenuLibrary('Almuerzo Menu Items - Aperitivos' );
//
// myLibrary1.addMenu(menuItem1);
// myLibrary1.addMenu(menuItem2);
// myLibrary1.addMenu(menuItem3);
// myLibrary1.addMenu(menuItem4);
// myLibrary1.addMenu(menuItem5);
//
// $('body').append(myLibrary1.render());
//
// var menuItem6 = new Menu('Ceviche Mango', 'Prawns, mango peree, rocoto, cilantro, lime; served with plantain chips');
// var menuItem7 = new Menu('Copitas de Peruvian Blue Tilapia', 'Tilapia, diced ají amarillo, rocoto, ginger, celerey, parsley, lime, yuca and plantain chips.', '$');
// var menuItem8 = new Menu('Ceviche de Pescado Clásico', 'Tilapia, rocoto \'Leche de Tigre\', onion, cilantro and lime; served with toasted chancha, Cuzco corn and sweet potato.', '$');
// var menuItem9 = new Menu('Ceviche Mixto', 'Prawns, scallops, clams, squid, tilapia, rocoto \'Leche de Tigre\', onion, cilantro; served with toasted chancha, Cuzco corn and sweet potato', '$');
// var menuItem10 = new Menu('Ahi Ceviche Nikei', 'Ahi tuna, soy, ponzu, onion, jalapeños, cilantro, huancatay, sesame seeds, sesame oil, avocado and wonton chips.', '$');
//
// var myLibrary2 = new MenuLibrary('Ceviches');
//
// myLibrary2.addMenu(menuItem6);
// myLibrary2.addMenu(menuItem7);
// myLibrary2.addMenu(menuItem8);
// myLibrary2.addMenu(menuItem9);
// myLibrary2.addMenu(menuItem10);
//
// $('body').append(myLibrary2.render());
//
// var menuItem11 = new Menu('Ensalada de la Casa', 'Organic lettuce, tomato, mozzarella, olive, plantain chip, hard-boiled egg, balsamic vinaigrette.', '$');
// var menuItem12 = new Menu('Arroz Cubano', 'Fried sweet plantains, rice, fried egg.', '$');
// var menuItem13 = new Menu('Plátanos Fritos Maduros', 'Fried sweet plantains, sour cream, salsa Criolla.', '$');
// var menuItem14 = new Menu('Camote Frito', 'Fried sweet potato chips with Hucatay sauce.', '$');
// var menuItem15 = new Menu('Wonton Frito', 'Fried wonton chips.', '$');
//
// var myLibrary3 = new MenuLibrary('Platos Chicos');
//
// myLibrary3.addMenu(menuItem11);
// myLibrary3.addMenu(menuItem12);
// myLibrary3.addMenu(menuItem13);
// myLibrary3.addMenu(menuItem14);
// myLibrary3.addMenu(menuItem15);
//
// $('body').append(myLibrary3.render());
//
// var menuItem16 = new Menu('Chupe de Camarones', 'Creamy prawn chowder, Peruvian yello potato, rice, peas, fish stock, poached egg.', '$');
// var menuItem17 = new Menu('Pan con Pollo a la Brasa', 'Rocky Free-range chicken, marinated with house blended traditional Peruvian rotisserie spices, provolone cheese, salsa criolla, cilantro aioli on hoagie soft roll; served with house-cut fries or salad.', '$');
// var menuItem18 = new Menu('Pan con Chicharón', 'Peruvian deep fried pork, sweet potato, salsa criolla, rocoto aioli on cibata roll; served with house-cut fries or salad,', '$');
// var menuItem19 = new Menu('Pan con Lomito', 'Peruvian wok fried steak, soy-balsamic sauce, tomato, onion, cilantro, huacatay aioli on soft sweet roll; served with house-cut fries or salad.', '$');
//
// var myLibrary4 = new MenuLibrary('Sopa y Sandwiches');
//
// myLibrary4.addMenu(menuItem16);
// myLibrary4.addMenu(menuItem17);
// myLibrary4.addMenu(menuItem18);
// myLibrary4.addMenu(menuItem19);
//
// $('body').append(myLibrary4.render());
//
// var menuItem20 = new Menu('Ensalada Bistec', 'Sautéed tenderloin steak or chicken, grilled onion, tomato, avocado slices, organic mixed greens with House made creamy cilantro dressing', '$');
// var menuItem21 = new Menu('Ensalada Nikei', 'Ahi-Tuna (marinated with citreous Panzu soy & cilantro, japeños, toasted sesame seeds & oil) over spring mix salad with balsamic vinaigrette, cherry tomatoes, plantain chips and avocado slices', '$');
// var menuItem22 = new Menu('Pescado Frito', 'Pan fried blue tilapia filet; served with white rice, fried yuca and salsa criolla', '$');
// var menuItem23 = new Menu('Tacos de Pescado', '3 plantain crusted tilapia tacos, avocado slices, salsa fresca, Huancaina sauce', '$');
// var menuItem24 = new Menu('Pollo a la Brasa', 'Quarter Rocky Free-range chicken, marinated with house blended traditional Peruvian rotisserie spices served with house-cut fries and salad', '$');
// var menuItem25 = new Menu('Ají de Gallina', 'Pulled chicken stew, ají amarillo cream sauce, onion; garnished with Yukon gold potato, hard-boiled egg, walnuts; served with steamed rice', '$');
// var menuItem26 = new Menu('Lomo Saltado', 'Wok fried tenderloin steak or chicken, onion, tomato, cilantro, soy sauce; serve with house-cut fries and rice.', '$');
//
//
// myLibrary5 = new MenuLibrary('Platos Principales');
//
// myLibrary5.addMenu(menuItem21);
// myLibrary5.addMenu(menuItem22);
// myLibrary5.addMenu(menuItem23);
// myLibrary5.addMenu(menuItem24);
// myLibrary5.addMenu(menuItem25);
// myLibrary5.addMenu(menuItem26);
//
// $('body').append(myLibrary5.render());
//
// var menuItem27 = new Menu('Veggie Saltado', 'Pan fried uca, mushroom, bell pepper, onion and tomatoes in soy-balsamic; served with rice and fries', '$');
// var menuItem28 = new Menu('Picante de Verduras', 'Ají amarillo cream sauce, Peruvian potato, Cuzco corn, mushroom, bell pepper onion, peas; served with quinoa.', '$');
//
//
// myLibrary6 = new MenuLibrary('Platos Vegetarianos');
//
// myLibrary6.addMenu(menuItem27);
// myLibrary6.addMenu(menuItem28);
//
// $('body').append(myLibrary6.render());
//
// var menuItem29 = new Menu('Papa a la Huancaina', 'Yukon gold potato with ají amarillo-feta sauce on butter lettuce; with hard-boiled eggs and olive.', '$');
// var menuItem30 = new Menu('Tequeños', 'Wonton puffs filled with wild Dungeness crab, shripm, cream sauce, red bell pepper and chives.', '$');
// var menuItem32 = new Menu('Choritos a la Chalaca', 'Six chilled green mussels with diced onions, tomato, ají amarillo, Cuzco corn, cilantro and lime.', '$');
// var menuItem31 = new Menu('Papa Rellena', 'Panko crusted fried potato croquette, filled with beef picadillo, onions, raisins, egg and botija olives; served with salsa Criolla', '$');
// var menuItem33 = new Menu('Causa Limeña', 'Ají amarillo-lime infused potato, wild Dungeness crab, avocado, egg, botija olive; rocoto aioli', '$');
//
// var myLibrary7 = new MenuLibrary('Cena - Aperitivos');
//
// myLibrary7.addMenu(menuItem29);
// myLibrary7.addMenu(menuItem30);
// myLibrary7.addMenu(menuItem31);
// myLibrary7.addMenu(menuItem32);
// myLibrary7.addMenu(menuItem33);
//
// $('body').append(myLibrary7.render());
//
// var menuItem34 = new Menu('Ceviche Mango', 'Prawns, mango puree, rocoto, cilantro, lime; served with plantain chips', '$');
// var menuItem35 = new Menu('Copitas de Peruvian Blue Tilapia', 'Tilapia, diced ají amarillo, rocoto, ginger, celery, parsley, lime, yuca and plantain chips.', '$');
// var menuItem36 = new Menu('Ceviche de Pescado Clásico', 'Tilapia, rocoto \'Leche de Tigre\', onion, cilantro, lime; served with toasted cancha, Cuzco corn, and sweet potato.', '$');
// var menuItem37 = new Menu('Ceviche Mixto', 'Prawns, scallops, clams, squid, tilapia with rocoto \'Leche de Tigre\' onion, cilantro; served with toasted cancha. Cuzco corn, and sweet potato.', '$');
// var menuItem38 = new Menu('Ahi Ceviche Nikei', 'Ahi tuna, soy, ponzu, onion, jalapeño, cilantro, huancatay, sesame seeds, sesame oil, avocado, and wonton chips', '$');
//
// var myLibrary8 = new MenuLibrary('Ceviches');
//
// myLibrary8.addMenu(menuItem34);
// myLibrary8.addMenu(menuItem35);
// myLibrary8.addMenu(menuItem36);
// myLibrary8.addMenu(menuItem37);
// myLibrary8.addMenu(menuItem38);
//
// $('body').append(myLibrary8.render());
//
// var menuItem39 = new Menu('Ensalada de la Casa', 'Organic lettuce, tomato, mozzarella, olive, plantain chip, hard-boiled egg, balsamic vinaigrette.', '$5.00');
var menuItem40 = new Menu('Arroz Cubano', 'Fried sweet plantains, rice, fried egg.', '$7.00');
// var menuItem41 = new Menu('Plátanos Fritos Maduros', 'Fried sweet plantains, sour cream, salsa Criolla.', '$7.00');
var menuItem42 = new Menu('Camote Frito', 'Fried sweet potato chips with Hucatay sauce.', '$5.00');
var menuItem43 = new Menu('Wonton Frito', 'Fried wonton chips.', '$5.00');

var myLibrary9 = new MenuLibrary('Platos Chicos');

// myLibrary9.addMenu(menuItem39);
myLibrary9.addMenu(menuItem40);
// myLibrary9.addMenu(menuItem41);
myLibrary9.addMenu(menuItem42);
myLibrary9.addMenu(menuItem43);

$('body').append(myLibrary9.render());

// var menuItem44 = new Menu('Vino #11', 'Vino Rojo.', '$48.00');
// var menuItem45 = new Menu('Vino #24', 'Vino Blanco.', '$17.00');
// var menuItem46 = new Menu('Vino #33', 'Vino Dulce.', '$35.00');
//
// var myLibrary10 = new MenuLibrary('Vinos');
//
// myLibrary10.addMenu(menuItem44);
// myLibrary10.addMenu(menuItem45);
// myLibrary10.addMenu(menuItem46);
//
// $('body').append(myLibrary10.render());
