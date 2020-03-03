const menu = [
  {
    title: 'Menu 1',
    soup: 'Minestrone',
    soupPrice: '2.95',
    salad: 'Greek',
    saladPrice: '4.75',
    lighterFare: 'Vegetable Biryani',
    lighterFarePrice: '4.95',
    entree: 'Breaded Chicken on a Bun',
    entreePrice: '5.95'
  },
  {
    title: 'Menu 2',
    soup: 'Red Lentil Dal',
    soupPrice: '2.95',
    salad: 'Julienne',
    saladPrice: '4.75',
    lighterFare: 'Madras Chicken Salad Wrap',
    lighterFarePrice: '4.95',
    entree: 'Fish & Chips',
    entreePrice: '5.95'
  },
  {
    title: 'Menu 3',
    soup: 'Spicy Squash & Pumpkin',
    soupPrice: '2.95',
    salad: 'Mediterranean',
    saladPrice: '4.75',
    lighterFare: 'Ham & Cheese Panini',
    lighterFarePrice: '4.95',
    entree: 'Butter Chicken with Rice Pilaf',
    entreePrice: '5.95'
  },
  {
    title: 'Menu 4',
    soup: 'Clam Chowder',
    soupPrice: '2.95',
    salad: 'Israeli Couscous & Feta',
    saladPrice: '4.75',
    lighterFare: 'Pulled Pork on a Bun',
    lighterFarePrice: '4.95',
    entree: 'Matar Paneer & Basmati Rice',
    entreePrice: '5.95'
  },
  {
    title: 'Menu 5',
    soup: 'Tomato',
    soupPrice: '2.95',
    salad: 'Caesar',
    saladPrice: '4.75',
    lighterFare: 'Burger & Fries',
    lighterFarePrice: '4.95',
    entree: 'Beef & Broccoli with Fried Rice',
    entreePrice: '5.95'
  }
]



const app = {
  data: newmenu,
  currentIndex: 0,
  init: () => {
    // Get Menu nav and set title to 1st item in data array
    
    // Display rest of menu items and prices
  },
  next: () => {
    // If user clicks on nav arrow right, then increment currentIndex
    
    // Display menu nav title
    // Display rest of menu items and prices
  },
  prev: () => {
    // If user clicks on nav arrow right, then decrement currentIndex
    
    // Display menu nav title
    // Display rest of menu items and prices
  }
}