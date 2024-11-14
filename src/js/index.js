const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let coffees = [
  {
    id: 1,
    type: 'Espresso',
    name: 'Classic Espresso',
    price: 3.5,
    sizes: { s: 3.5, m: 4.0, l: 4.5 },
    url: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg',
    location: 'Ukraine Lviv',
    rating: 4.5,
    description: 'Rich and intense coffee for espresso lovers.',
  },
  {
    id: 2,
    type: 'Latte',
    name: 'Vanilla Latte',
    price: 4.0,
    sizes: { s: 4.0, m: 4.5, l: 5.0 },
    url: 'https://cdn.shopify.com/s/files/1/0187/0338/files/vanilla_latte_on_a_blue_plate.jpg?v=1616171556',
    location: 'Ukraine Kiew',
    rating: 4.2,
    description: 'Smooth and creamy with a hint of vanilla.',
  },
  {
    id: 3,
    type: 'Americano',
    name: 'Classic Americano',
    price: 3.0,
    sizes: { s: 3.0, m: 3.5, l: 4.0 },
    url: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-54187613/freshly_baked_by_origin_bakery_americano_full02_kd07blpv.jpg',
    location: 'Ukraine Rivne',
    rating: 4.0,
    description: 'Bold and smooth coffee for everyday energy.',
  },
  {
    id: 4,
    type: 'Cappuccino',
    name: 'Caramel Cappuccino',
    price: 4.2,
    sizes: { s: 4.2, m: 4.7, l: 5.2 },
    url: 'https://topsecretrecipes.com/images/product/starbucks-caramel-macchiato-copycat-recipe.jpg',
    location: 'Ukraine Odesa',
    rating: 4.3,
    description: 'Creamy and caramel-flavored for a delightful treat.',
  },
  {
    id: 5,
    type: 'Mocha',
    name: 'Chocolate Mocha',
    price: 4.5,
    sizes: { s: 4.5, m: 5.0, l: 5.5 },
    url: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?quality=90&resize=556,505',
    location: 'Ukraine Lviv',
    rating: 4.7,
    description: 'Chocolate-infused coffee for a rich, sweet experience.',
  },
  {
    id: 6,
    type: 'Espresso',
    name: 'Double Espresso',
    price: 4.0,
    sizes: { s: 4.0, m: 4.5, l: 5.0 },
    url: 'https://143819340.cdn6.editmysite.com/uploads/1/4/3/8/143819340/s381795652390386991_p13_i3_w1400.png',
    location: 'Ukraine Kiew',
    rating: 4.6,
    description: 'Strong, rich double shot for espresso enthusiasts.',
  },
  {
    id: 7,
    type: 'Latte',
    name: 'Hazelnut Latte',
    price: 4.3,
    sizes: { s: 4.3, m: 4.8, l: 5.3 },
    url: 'https://shottbeverages.com/wp-content/uploads/2020/07/hazelnut_latte-633x641.jpg',
    location: 'Ukraine Rivne',
    rating: 4.4,
    description: 'Smooth, creamy latte with a nutty twist.',
  },
  {
    id: 8,
    type: 'Americano',
    name: 'Iced Americano',
    price: 3.2,
    sizes: { s: 3.2, m: 3.7, l: 4.2 },
    url: 'https://mocktail.net/wp-content/uploads/2022/03/homemade-Iced-Americano-recipe_1ig.jpg',
    location: 'Ukraine Odesa',
    rating: 4.1,
    description: 'Cold and refreshing, perfect for a hot day.',
  },
  {
    id: 9,
    type: 'Cappuccino',
    name: 'Spiced Cappuccino',
    price: 4.4,
    sizes: { s: 4.4, m: 4.9, l: 5.4 },
    url: 'https://img.freepik.com/premium-photo/cappuccino-with-touch-spiced-rum_974629-442511.jpg',
    location: 'Ukraine Lviv',
    rating: 4.5,
    description: 'Aromatic cappuccino with a hint of spice.',
  },
  {
    id: 10,
    type: 'Mocha',
    name: 'White Chocolate Mocha',
    price: 4.8,
    sizes: { s: 4.8, m: 5.3, l: 5.8 },
    url: 'https://www.littlesugarsnaps.com/wp-content/uploads/2022/01/white-chocolate-mocha-square-500x500.jpg',
    location: 'Ukraine Kiew',
    rating: 4.8,
    description: 'Decadent coffee with white chocolate flavor.',
  },
  {
    id: 11,
    type: 'Espresso',
    name: 'Ristretto',
    price: 3.7,
    sizes: { s: 3.7, m: 4.2, l: 4.7 },
    url: 'https://gemini.ua/wp-content/uploads/2022/02/kofe-ristretto.jpg',
    location: 'Ukraine Rivne',
    rating: 4.6,
    description: 'Short, concentrated espresso with intense flavor.',
  },
  {
    id: 12,
    type: 'Latte',
    name: 'Pumpkin Spice Latte',
    price: 4.5,
    sizes: { s: 4.5, m: 5.0, l: 5.5 },
    url: 'https://jernejkitchen.com/sites/default/files/pumpkin-spice-latte-04-jernejkitchen.jpg',
    location: 'Ukraine Odesa',
    rating: 4.4,
    description: 'Seasonal favorite with warm pumpkin spices.',
  },
  {
    id: 13,
    type: 'Americano',
    name: 'Honey Americano',
    price: 3.4,
    sizes: { s: 3.4, m: 3.9, l: 4.4 },
    url: 'https://i.pinimg.com/736x/2a/d2/99/2ad299f68c0aecfb75caa28d472d7dc1.jpg',
    location: 'Ukraine Lviv',
    rating: 4.2,
    description: 'Americano with a touch of honey for natural sweetness.',
  },
  {
    id: 14,
    type: 'Cappuccino',
    name: 'Matcha Cappuccino',
    url: 'https://img.freepik.com/premium-photo/hot-matcha-cappuccino-morning_773922-7887.jpg',
    price: 4.6,
    sizes: { s: 4.6, m: 5.1, l: 5.6 },
    location: 'Ukraine Kiew',
    rating: 4.7,
    description: 'Unique cappuccino with green matcha infusion.',
  },
  {
    id: 15,
    type: 'Mocha',
    name: 'Peppermint Mocha',
    price: 4.9,
    sizes: { s: 4.9, m: 5.4, l: 5.9 },
    url: 'https://www.windingcreekranch.org/wp-content/uploads/2022/11/starbucks-peppermint-mocha-hero3-1200-1200-1-of-1.jpg',
    location: 'Ukraine Rivne',
    rating: 4.8,
    description: 'Holiday favorite with peppermint and mocha flavors.',
  },
];

app.get('/api/coffees/all', (req, res) => {
  res.json(coffees);
});

app.get('/api/coffees/:id', (req, res) => {
  const coffee = coffees.find(c => c.id === pardeInt(req.params.id));
  if (!coffee) {
    return res.status(404).send('Coffees not found.');
  }
  res.json(coffee);
});

app.get('/api/coffees/:type', (req, res) => {
  const coffeeType = req.params.type;
  const filterCoffee = coffees.filter(c => c.type === coffeeType);
  if (!filterCoffee.length === 0) {
    return res.status(404).send('Coffees not found.');
  }
  res.json(filterCoffee);
});

app.listen(PORT, () => {
  console.log(`Server port ${PORT}`);
});
