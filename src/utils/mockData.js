export const restaurantList = [
  {
    id: "1",
    name: "KFC",
    cuisines: ["Burgers", "Fast Food", "American"],
    rating: 4.1,
    promoted: true,
    costForTwo: "₹400 FOR TWO",
    deliveryTime: "35 mins",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "1-1", name: "Zinger Burger", price: 199 },
          { id: "1-2", name: "Chicken Bucket", price: 499 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "1-3", name: "Peri Peri Strips", price: 149 }
        ]
      },
      {
        title: "Beverages",
        items: [
          { id: "1-4", name: "Pepsi Black", price: 60 }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Meghana Foods",
    cuisines: ["Biryani", "South Indian"],
    rating: 4.4,
    promoted: true,
    costForTwo: "₹500 FOR TWO",
    deliveryTime: "29 mins",
    image: "https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "2-1", name: "Chicken Boneless Biryani", price: 299 },
          { id: "2-2", name: "Paneer Biryani", price: 250 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "2-3", name: "Sweet Lassi", price: 80 },
          { id: "2-4", name: "Mango Smoothie", price: 120 }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Kannur Food Point",
    cuisines: ["Kerala", "Chinese"],
    rating: 3.8,
    promoted: false,
    costForTwo: "₹300 FOR TWO",
    deliveryTime: "31 mins",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "3-1", name: "Kerala Parotta", price: 40 },
          { id: "3-2", name: "Chicken Roast", price: 220 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "3-3", name: "2 Parotta + Veg Kurma", price: 150 },
          { id: "3-4", name: "3 Parotta + Chicken Curry", price: 280 }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Call Me Chow",
    cuisines: ["Chinese", "Pan Asian"],
    rating: 3.9,
    promoted: true,
    costForTwo: "₹400 FOR TWO",
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "4-1", name: "Veg Hakka Noodles", price: 180 },
          { id: "4-2", name: "Chilli Chicken Dry", price: 240 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "4-3", name: "Dragon Chicken", price: 260 }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Roti Wala",
    cuisines: ["North Indian", "Thali"],
    rating: 4.2,
    costForTwo: "₹250 FOR TWO",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "5-1", name: "Special Veg Thali", price: 199 },
          { id: "5-2", name: "Dal Makhani", price: 140 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "5-3", name: "Aloo Paratha with Curd", price: 110 },
          { id: "5-4", name: "Paneer Paratha with Pickle", price: 130 }
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Burger King",
    cuisines: ["Burgers", "Fast Food"],
    rating: 4.0,
    costForTwo: "₹350 FOR TWO",
    deliveryTime: "30 mins",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "6-1", name: "Veg Whopper", price: 149 },
          { id: "6-2", name: "Crispy Chicken Burger", price: 129 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "6-3", name: "Chocolate Thick Shake", price: 149 },
          { id: "6-4", name: "Berry Smoothie", price: 159 }
        ]
      }
    ]
  },
  {
    id: "7",
    name: "Pizza Hut",
    cuisines: ["Pizza", "Italian"],
    rating: 4.3,
    costForTwo: "₹600 FOR TWO",
    deliveryTime: "32 mins",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "7-1", name: "Margherita Pizza", price: 299 },
          { id: "7-2", name: "Veggie Supreme Pizza", price: 499 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "7-3", name: "Melts - Cheesy Chicken", price: 199 }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "Domino's Pizza",
    cuisines: ["Pizza", "Italian"],
    rating: 4.1,
    costForTwo: "₹550 FOR TWO",
    deliveryTime: "27 mins",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "8-1", name: "Peppy Paneer Pizza", price: 399 },
          { id: "8-2", name: "Choco Lava Cake", price: 109 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "8-3", name: "Volcano Pizza", price: 450 }
        ]
      }
    ]
  },
  {
    id: "9",
    name: "Biryani Blues",
    cuisines: ["Biryani", "Mughlai"],
    rating: 3.8,
    costForTwo: "₹500 FOR TWO",
    deliveryTime: "26 mins",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "9-1", name: "Chicken Dum Biryani", price: 350 },
          { id: "9-2", name: "Paneer Tikka Biryani", price: 300 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "9-3", name: "Rose Lassi", price: 90 }
        ]
      }
    ]
  },
  {
    id: "10",
    name: "Subway",
    cuisines: ["Healthy Food", "Sandwich"],
    rating: 4.2,
    costForTwo: "₹400 FOR TWO",
    deliveryTime: "24 mins",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "10-1", name: "Paneer Tikka Sub", price: 220 },
          { id: "10-2", name: "Roasted Chicken Sub", price: 250 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "10-3", name: "B.M.T. Salad Bowl", price: 280 }
        ]
      }
    ]
  },
  {
    id: "11",
    name: "Haldiram's",
    cuisines: ["North Indian", "Snacks"],
    rating: 4.4,
    costForTwo: "₹350 FOR TWO",
    deliveryTime: "22 mins",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "11-1", name: "Chole Bhature", price: 150 },
          { id: "11-2", name: "Raj Kachori", price: 120 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "11-3", name: "Kesar Badam Milk", price: 80 }
        ]
      }
    ]
  },
  {
    id: "12",
    name: "Wow! Momo",
    cuisines: ["Momos", "Chinese"],
    rating: 4.1,
    costForTwo: "₹300 FOR TWO",
    deliveryTime: "20 mins",
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "12-1", name: "Chicken Pan Fried Momos", price: 180 },
          { id: "12-2", name: "Veg Darjeeling Momos", price: 140 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "12-3", name: "Momo Burgers (Moburg)", price: 99 }
        ]
      }
    ]
  },
  {
    id: "13",
    name: "Behrouz Biryani",
    cuisines: ["Biryani", "Mughlai"],
    rating: 4.6,
    costForTwo: "₹700 FOR TWO",
    deliveryTime: "34 mins",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "13-1", name: "Lazeez Bhuna Murgh Biryani", price: 450 },
          { id: "13-2", name: "Subz-E-Falafel Biryani", price: 380 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "13-3", name: "Murgh Tikka Kebab", price: 299 }
        ]
      }
    ]
  },
  {
    id: "14",
    name: "The Good Bowl",
    cuisines: ["Indian", "Healthy"],
    rating: 4.3,
    costForTwo: "₹450 FOR TWO",
    deliveryTime: "23 mins",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "14-1", name: "Paneer Tikka Rice Bowl", price: 250 },
          { id: "14-2", name: "Chicken Keema Bowl", price: 280 }
        ]
      }
    ]
  },
  {
    id: "15",
    name: "Faasos",
    cuisines: ["Wraps", "Fast Food"],
    rating: 4.0,
    costForTwo: "₹350 FOR TWO",
    deliveryTime: "21 mins",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "15-1", name: "Masala Paneer Tikka Wrap", price: 180 },
          { id: "15-2", name: "Chicken Bhuna Wrap", price: 210 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "15-3", name: "Hazelnut Cold Coffee", price: 120 }
        ]
      }
    ]
  },
  {
    id: "16",
    name: "McDonald's",
    cuisines: ["Burgers", "Beverages"],
    rating: 4.4,
    costForTwo: "₹450 FOR TWO",
    deliveryTime: "19 mins",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "16-1", name: "McAloo Tikki Burger", price: 59 },
          { id: "16-2", name: "Chicken Maharaja Mac", price: 219 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "16-3", name: "Strawberry Shake", price: 149 },
          { id: "16-4", name: "Mixed Berry Smoothie", price: 179 }
        ]
      }
    ]
  },
  {
    id: "17",
    name: "Sagar Ratna",
    cuisines: ["South Indian"],
    rating: 4.2,
    costForTwo: "₹400 FOR TWO",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "17-1", name: "Mysore Masala Dosa", price: 180 },
          { id: "17-2", name: "Idli Sambar", price: 120 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "17-3", name: "Filter Coffee", price: 70 },
          { id: "17-4", name: "Salted Buttermilk", price: 60 }
        ]
      }
    ]
  },
  {
    id: "18",
    name: "Barbeque Nation",
    cuisines: ["BBQ", "North Indian"],
    rating: 4.5,
    costForTwo: "₹1200 FOR TWO",
    deliveryTime: "40 mins",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "18-1", name: "Cajun Spiced Potatoes", price: 250 },
          { id: "18-2", name: "Grilled Prawns", price: 450 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "18-3", name: "Lachha Paratha with Dal Makhani", price: 299 }
        ]
      }
    ]
  },
  {
    id: "19",
    name: "Taco Bell",
    cuisines: ["Mexican", "Fast Food"],
    rating: 4.1,
    costForTwo: "₹500 FOR TWO",
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "19-1", name: "Crunchy Veg Taco", price: 99 },
          { id: "19-2", name: "Chicken Quesadilla", price: 199 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "19-3", name: "Naked Chicken Taco", price: 189 }
        ]
      }
    ]
  },
  {
    id: "20",
    name: "Punjab Grill",
    cuisines: ["North Indian", "Punjabi"],
    rating: 4.6,
    costForTwo: "₹900 FOR TWO",
    deliveryTime: "36 mins",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "20-1", name: "Butter Chicken", price: 450 },
          { id: "20-2", name: "Dal Makhani", price: 350 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "20-3", name: "Amritsari Kulcha with Chole", price: 250 }
        ]
      }
    ]
  },
  {
    id: "21",
    name: "Bikanervala",
    cuisines: ["North Indian", "Sweets"],
    rating: 4.3,
    costForTwo: "₹450 FOR TWO",
    deliveryTime: "24 mins",
    image: "https://bikanervala.com/cdn/shop/files/Khoya_Burfi.jpg?v=1764935374&width=1600",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "21-1", name: "Kaju Katli (250g)", price: 250 },
          { id: "21-2", name: "Punjabi Samosa", price: 30 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "21-3", name: "Malai Lassi", price: 90 }
        ]
      }
    ]
  },
  {
    id: "22",
    name: "Chinese Wok",
    cuisines: ["Chinese", "Asian"],
    rating: 4.2,
    costForTwo: "₹350 FOR TWO",
    deliveryTime: "26 mins",
    image: "https://picsum.photos/300/200?random=22",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "22-1", name: "Schezwan Fried Rice", price: 190 },
          { id: "22-2", name: "Kung Pao Chicken", price: 260 }
        ]
      }
    ]
  },
  {
    id: "23",
    name: "La Pino'z Pizza",
    cuisines: ["Pizza", "Italian"],
    rating: 4.1,
    costForTwo: "₹550 FOR TWO",
    deliveryTime: "29 mins",
    image: "https://picsum.photos/300/200?random=23",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "23-1", name: "7 Cheese Pizza", price: 399 },
          { id: "23-2", name: "Mac & Cheese Pizza", price: 349 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "23-3", name: "Stuffed Garlic Bread", price: 189 }
        ]
      }
    ]
  },
  {
    id: "24",
    name: "Oven Story Pizza",
    cuisines: ["Pizza", "Fast Food"],
    rating: 4.4,
    costForTwo: "₹600 FOR TWO",
    deliveryTime: "31 mins",
    image: "https://picsum.photos/300/200?random=24",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "24-1", name: "Cheese Burst Margherita", price: 320 },
          { id: "24-2", name: "Chicken Tikka Pizza", price: 450 }
        ]
      }
    ]
  },
  {
    id: "25",
    name: "Natural Ice Cream",
    cuisines: ["Desserts", "Ice Cream"],
    rating: 4.7,
    costForTwo: "₹250 FOR TWO",
    deliveryTime: "18 mins",
    image: "https://picsum.photos/300/200?random=25",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "25-1", name: "Tender Coconut Ice Cream", price: 75 },
          { id: "25-2", name: "Sitaphal Ice Cream", price: 75 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "25-3", name: "Mango Milkshake", price: 150 }
        ]
      }
    ]
  },
  {
    id: "26",
    name: "Baskin Robbins",
    cuisines: ["Desserts", "Ice Cream"],
    rating: 4.5,
    costForTwo: "₹300 FOR TWO",
    deliveryTime: "20 mins",
    image: "https://picsum.photos/300/200?random=26",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "26-1", name: "Bavarian Chocolate Scoop", price: 99 },
          { id: "26-2", name: "Cotton Candy Scoop", price: 99 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "26-3", name: "Mississippi Mud Shake", price: 199 }
        ]
      }
    ]
  },
  {
    id: "27",
    name: "CakeZone",
    cuisines: ["Bakery", "Desserts"],
    rating: 4.4,
    costForTwo: "₹400 FOR TWO",
    deliveryTime: "22 mins",
    image: "https://picsum.photos/300/200?random=27",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "27-1", name: "Black Forest Cake (500g)", price: 450 },
          { id: "27-2", name: "Red Velvet Pastry", price: 120 }
        ]
      }
    ]
  },
  {
    id: "28",
    name: "Sweet Truth",
    cuisines: ["Bakery", "Cakes"],
    rating: 4.3,
    costForTwo: "₹350 FOR TWO",
    deliveryTime: "19 mins",
    image: "https://picsum.photos/300/200?random=28",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "28-1", name: "Chocolate Mud Cake", price: 399 },
          { id: "28-2", name: "Hazelnut Brownie", price: 119 }
        ]
      }
    ]
  },
  {
    id: "29",
    name: "Firangi Bake",
    cuisines: ["Italian", "Continental"],
    rating: 4.2,
    costForTwo: "₹500 FOR TWO",
    deliveryTime: "30 mins",
    image: "https://picsum.photos/300/200?random=29",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "29-1", name: "Corn & Cheese Macaroni", price: 220 },
          { id: "29-2", name: "Minced Chicken Lasagna", price: 299 }
        ]
      }
    ]
  },
  {
    id: "30",
    name: "LunchBox",
    cuisines: ["North Indian", "Meals"],
    rating: 4.4,
    costForTwo: "₹450 FOR TWO",
    deliveryTime: "27 mins",
    image: "https://picsum.photos/300/200?random=30",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "30-1", name: "Rajma Chawal Combo", price: 199 },
          { id: "30-2", name: "Chicken Curry Meal", price: 249 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "30-3", name: "Gobhi Paratha with Curd", price: 140 }
        ]
      }
    ]
  },
  {
    id: "31",
    name: "The Belgian Waffle Co.",
    cuisines: ["Desserts", "Waffles"],
    rating: 4.6,
    costForTwo: "₹300 FOR TWO",
    deliveryTime: "21 mins",
    image: "https://picsum.photos/300/200?random=31",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "31-1", name: "Nutella Waffle", price: 160 },
          { id: "31-2", name: "Honey Butter Waffle", price: 120 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "31-3", name: "Cold Coffee", price: 110 }
        ]
      }
    ]
  },
  {
    id: "32",
    name: "Burger Singh",
    cuisines: ["Burgers", "Fast Food"],
    rating: 4.1,
    costForTwo: "₹400 FOR TWO",
    deliveryTime: "23 mins",
    image: "https://picsum.photos/300/200?random=32",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "32-1", name: "Udta Punjab Burger", price: 189 },
          { id: "32-2", name: "Chicken Snacker", price: 99 }
        ]
      }
    ]
  },
  {
    id: "33",
    name: "Chaayos",
    cuisines: ["Tea", "Snacks"],
    rating: 4.5,
    costForTwo: "₹250 FOR TWO",
    deliveryTime: "17 mins",
    image: "https://picsum.photos/300/200?random=33",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "33-1", name: "Desi Chai", price: 120 },
          { id: "33-2", name: "Bun Maska", price: 80 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "33-3", name: "Matar Paneer Paratha & Chai", price: 199 }
        ]
      }
    ]
  },
  {
    id: "34",
    name: "Tea Post",
    cuisines: ["Tea", "Beverages"],
    rating: 4.0,
    costForTwo: "₹200 FOR TWO",
    deliveryTime: "15 mins",
    image: "https://picsum.photos/300/200?random=34",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "34-1", name: "Pudina Masala Tea", price: 80 },
          { id: "34-2", name: "Methi Thepla", price: 60 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "34-3", name: "Thick Cold Coffee", price: 110 }
        ]
      }
    ]
  },
  {
    id: "35",
    name: "Starbucks",
    cuisines: ["Coffee", "Beverages"],
    rating: 4.6,
    costForTwo: "₹700 FOR TWO",
    deliveryTime: "25 mins",
    image: "https://picsum.photos/300/200?random=35",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "35-1", name: "Tall Cappuccino", price: 230 },
          { id: "35-2", name: "Java Chip Frappuccino", price: 280 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "35-3", name: "Iced Matcha Latte", price: 320 }
        ]
      }
    ]
  },
  {
    id: "36",
    name: "Cafe Coffee Day",
    cuisines: ["Coffee", "Snacks"],
    rating: 4.2,
    costForTwo: "₹500 FOR TWO",
    deliveryTime: "24 mins",
    image: "https://picsum.photos/300/200?random=36",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "36-1", name: "Cafe Frappe", price: 199 },
          { id: "36-2", name: "Chilli Cheese Toast", price: 149 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "36-3", name: "Tropical Fruit Smoothie", price: 189 }
        ]
      }
    ]
  },
  {
    id: "37",
    name: "Pind Balluchi",
    cuisines: ["Punjabi", "North Indian"],
    rating: 4.3,
    costForTwo: "₹800 FOR TWO",
    deliveryTime: "35 mins",
    image: "https://picsum.photos/300/200?random=37",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "37-1", name: "Murgh Makhani", price: 420 },
          { id: "37-2", name: "Paneer Tikka Masala", price: 360 }
        ]
      },
      {
        title: "Paratha Combo",
        items: [
          { id: "37-3", name: "Pudina Paratha Meal", price: 220 }
        ]
      }
    ]
  },
  {
    id: "38",
    name: "Moti Mahal",
    cuisines: ["Mughlai", "North Indian"],
    rating: 4.4,
    costForTwo: "₹900 FOR TWO",
    deliveryTime: "34 mins",
    image: "https://picsum.photos/300/200?random=38",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "38-1", name: "Tandoori Chicken (Half)", price: 350 },
          { id: "38-2", name: "Dal Makhani", price: 290 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "38-3", name: "Mutton Rogan Josh", price: 450 }
        ]
      }
    ]
  },
  {
    id: "39",
    name: "The Biryani Life",
    cuisines: ["Biryani", "Hyderabadi"],
    rating: 4.5,
    costForTwo: "₹550 FOR TWO",
    deliveryTime: "28 mins",
    image: "https://picsum.photos/300/200?random=39",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "39-1", name: "Hyderabadi Chicken Biryani", price: 320 },
          { id: "39-2", name: "Paneer Nawabi Biryani", price: 280 }
        ]
      },
      {
        title: "Lassi Shakes Smoothie",
        items: [
          { id: "39-3", name: "Mint Chaas", price: 60 }
        ]
      }
    ]
  },
  {
    id: "40",
    name: "Andhra Gunpowder",
    cuisines: ["South Indian", "Andhra"],
    rating: 4.4,
    costForTwo: "₹600 FOR TWO",
    deliveryTime: "30 mins",
    image: "https://picsum.photos/300/200?random=40",
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "40-1", name: "Gunpowder Idli", price: 140 },
          { id: "40-2", name: "Chicken Fry Piece Biryani", price: 340 }
        ]
      },
      {
        title: "Newly Added",
        items: [
          { id: "40-3", name: "Prawns Ghee Roast", price: 390 }
        ]
      }
    ]
  }
];