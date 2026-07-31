import heroInterior from "@/assets/hero-interior.jpg";
import barWhisky from "@/assets/bar-whisky.jpg";
import foodPie from "@/assets/food-pie.jpg";
import foodBreakfast from "@/assets/food-breakfast.jpg";
import foodRoast from "@/assets/food-roast.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import liveMusic from "@/assets/live-music.jpg";
import exterior from "@/assets/exterior.jpg";
import fireside from "@/assets/fireside.jpg";
import drinks from "@/assets/drinks.jpg";
import community from "@/assets/community.jpg";
import partyNight from "@/assets/party-night.jpg";
import logoAsset from "@/assets/cairn-logo.png.asset.json";

export const logo = logoAsset.url;

export const images = {
  heroInterior,
  barWhisky,
  foodPie,
  foodBreakfast,
  foodRoast,
  foodDessert,
  liveMusic,
  exterior,
  fireside,
  drinks,
  community,
  partyNight,
};

export const business = {
  name: "Cairn Clubhouse Bar",
  town: "Muirkirk",
  fullName: "Cairn Clubhouse Bar Muirkirk",
  phone: "+44 7514 523928",
  phoneHref: "tel:+447514523928",
  facebook: "https://www.facebook.com/profile.php?id=61574380633109",
  address: {
    line1: "Muirkirk Caravan Park",
    city: "Cumnock",
    postcode: "KA18 3RE",
    country: "United Kingdom",
  },
  addressOneLine: "Muirkirk Caravan Park, Cumnock, KA18 3RE, United Kingdom",
  mapsQuery: "Muirkirk+Caravan+Park,+Cumnock+KA18+3RE",
  bio: "The place to be on weekends. Come and enjoy the great happy vibe and of course our delicious homemade retro food just like your gran's cooking.",
};

export const openingHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "4pm – 11pm" },
  { day: "Wednesday", hours: "4pm – 11pm" },
  { day: "Thursday", hours: "12pm – 11pm" },
  { day: "Friday", hours: "12pm – 1am" },
  { day: "Saturday", hours: "12pm – 1am" },
  { day: "Sunday", hours: "12pm – 11pm" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/food-and-drinks", label: "Food & Drinks" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export type MenuSection = {
  id: string;
  title: string;
  blurb: string;
  note?: string;
  image?: string;
  items: { name: string; description?: string; price?: string; tag?: string }[];
};

export const menu: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    blurb: "Homemade openers to start the night right.",
    image: images.foodBreakfast,
    items: [
      { name: "Soup of the Day", description: "Fresh and warming, changes daily.", price: "£3.50" },
      { name: "Prawn Cocktail", description: "A proper retro classic.", price: "£4.50" },
      { name: "Veg Pakora", description: "Crisp, spiced and served with dip.", price: "£3.50" },
      { name: "Chicken Pakora", description: "Golden fried and full of flavour.", price: "£4.00" },
    ],
  },
  {
    id: "mains",
    title: "Main Meals",
    blurb: "Big plates, honest cooking, one simple price.",
    note: "All Main Meals £10.00 • Add Naan Bread +£1.00",
    image: images.foodPie,
    items: [
      { name: "Fish & Chips & Peas", description: "Golden battered fish with chips and peas.", price: "£10.00" },
      { name: "Stovies", description: "Scottish comfort food done properly.", price: "£10.00" },
      {
        name: "Steak Pie",
        description: "Served with chips or potatoes & vegetables.",
        price: "£10.00",
        tag: "Favourite",
      },
      { name: "Chicken Tikka Masala", description: "Served with chips or rice.", price: "£10.00" },
      { name: "Chinese-Style Chicken Curry", description: "Served with chips or rice.", price: "£10.00" },
      { name: "Mac & Cheese and Chips", description: "Creamy, cheesy and filling.", price: "£10.00" },
    ],
  },
  {
    id: "sunday",
    title: "Sunday Dinner",
    blurb: "All homemade • Great portions • Friendly service.",
    note: "2 Courses £12.00 • 3 Courses £15.00",
    image: images.foodRoast,
    items: [
      {
        name: "Our Signature Steak Pie",
        description: "Served with all the trimmings.",
        tag: "Signature",
      },
      { name: "Roast Chicken", description: "Served with all the trimmings." },
      { name: "Gammon Steak", description: "With pineapple or egg, potatoes & vegetables." },
      { name: "Chicken in a White Wine & Garlic Sauce", description: "Rich, creamy and comforting." },
      { name: "Chicken in Gravy", description: "With vegetables & potatoes." },
      { name: "Homemade Soup", description: "Fresh & warming soup of the day." },
      { name: "Italian Tomato & Basil Soup", description: "Sunday soup of the day." },
    ],
  },
  {
    id: "breakfast",
    title: "Weekend Breakfast",
    blurb: "The full platter to set you up for the day.",
    note: "Full Breakfast Platter £7.00 • Serving from 10:00 AM • Saturday & Sunday only",
    image: images.foodBreakfast,
    items: [
      { name: "Stornoway Black Pudding", description: "Included in the platter." },
      { name: "Steak Slice", description: "Included in the platter." },
      { name: "Square Sausage", description: "Included in the platter." },
      { name: "Tattie Scone", description: "Included in the platter." },
      { name: "Bacon", description: "Included in the platter." },
      { name: "Egg & Beans", description: "Included in the platter." },
      { name: "Tea or Coffee", description: "Included in the platter." },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Sweet & delicious — try our tasty puddings.",
    image: images.foodDessert,
    items: [
      { name: "Strawberry Cheesecake", description: "Sweet, creamy and always popular.", tag: "Favourite" },
      { name: "Meringue with Fresh Cream & Strawberries", description: "Light and classic." },
      { name: "Apple Crumble & Italian Ice Cream", description: "Warm crumble with a scoop on the side." },
      { name: "Selection of Desserts", description: "Ask our staff for today's choices." },
    ],
  },
  {
    id: "lunch",
    title: "Lunch Menu",
    blurb: "Today's specials — freshly made • served all day • family friendly.",
    image: images.community,
    items: [
      { name: "Spaghetti Bolognaise", description: "Rich homemade sauce." },
      { name: "Creamy Carbonara", description: "Classic and comforting." },
      { name: "Fresh Fish & Chips", description: "Cooked to order." },
      { name: "All-Day Breakfast with Chips", description: "Served any time of day." },
      { name: "Hotdogs", description: "Simple and satisfying." },
      { name: "Cheeseburgers", description: "Freshly made to order." },
      {
        name: "Homemade Pizza",
        description: "Pepperoni • Spicy Chicken • Chicken Tikka • Cheese & Tomato.",
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    blurb: "Something wee to go with your pint.",
    items: [
      { name: "Onion Rings", price: "£3.00" },
      { name: "Salt & Chilli Chips", price: "£3.50" },
      { name: "Chips & Cheese", price: "£5.00" },
      { name: "Bacon Cheese Burger", price: "£7.00" },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    blurb: "Homemade stonebaked pizzas.",
    items: [
      { name: "Margherita", price: "£7.00" },
      { name: "Pepperoni", price: "£8.00" },
      { name: "Chicken Tikka", price: "£9.00" },
      { name: "Kebab Pizza", price: "£8.00" },
    ],
  },
  {
    id: "kids",
    title: "Kids Meals",
    blurb: "Little plates for the wee ones.",
    note: "£5.00 each",
    items: [
      { name: "Chicken Nuggets & Chips", price: "£5.00" },
      { name: "Kids Burger & Chips", price: "£5.00" },
      { name: "Cheese & Ham Toastie", price: "£5.00" },
      { name: "Mini Mac & Cheese", price: "£5.00" },
      { name: "Fish Fingers & Chips", price: "£5.00" },
    ],
  },
  {
    id: "kebabs",
    title: "Kebabs & Potatoes",
    blurb: "Late-night favourites and loaded tatties.",
    items: [
      { name: "Doner Kebab" },
      { name: "Chicken Tikka Kebab", price: "£8.00" },
      { name: "Baked Potatoes", price: "from £5.00" },
    ],
  },
  {
    id: "sunday-sides",
    title: "Sunday Side Specials",
    blurb: "Extra choices on our Sunday blackboard.",
    items: [
      { name: "Stovies" },
      { name: "Spaghetti Bolognaise" },
      { name: "Carbonara" },
      { name: "Fish & Chips" },
    ],
  },
];


export type PubEvent = {
  title: string;
  when: string;
  time: string;
  description: string;
  image?: string;
  recurring: string;
  featured?: boolean;
};

export const events: PubEvent[] = [
  {
    title: "Live Music Saturdays",
    when: "Every Saturday",
    time: "9pm till late",
    description:
      "Local singers and acoustic acts take the corner stage. Free entry, packed room, brilliant atmosphere.",
    image: images.liveMusic,
    recurring: "weekly-saturday",
    featured: true,
  },
  {
    title: "Karaoke & Disco Night",
    when: "Every Friday",
    time: "9pm till 1am",
    description: "Grab the mic, gather the crowd and dance until the lights come up.",
    image: images.partyNight,
    recurring: "weekly-friday",
  },
  {
    title: "Sunday Roast & Quiz",
    when: "Every Sunday",
    time: "Roast from 12pm, quiz 7pm",
    description: "Family roast through the day, then a friendly quiz with cash prizes and a raffle.",
    image: images.foodRoast,
    recurring: "weekly-sunday",
  },
  {
    title: "Community Bingo",
    when: "Every Thursday",
    time: "8pm",
    description: "Eyes down for a proper Muirkirk night out — everybody welcome.",
    image: images.community,
    recurring: "weekly-thursday",
  },
];

export const testimonials = [
  {
    quote:
      "Best wee bar around. The homemade food is exactly like my gran used to make and the welcome is second to none.",
    author: "Fiona M.",
    origin: "Muirkirk",
  },
  {
    quote:
      "Stayed at the caravan park and ended up in here every night. Great music, great craic, brilliant staff.",
    author: "Derek H.",
    origin: "Visitor from Glasgow",
  },
  {
    quote: "Saturday night live music is a belter. Feels like the whole village turns up.",
    author: "Lorraine T.",
    origin: "Cumnock",
  },
  {
    quote: "Family friendly through the day, buzzing at night. Steak pie is unbeatable.",
    author: "Stuart R.",
    origin: "Ayrshire",
  },
];

export const gallery = [
  { src: images.heroInterior, alt: "Warm fireside seating inside Cairn Clubhouse Bar", span: "wide" },
  { src: images.fireside, alt: "Tartan armchairs beside the log fire", span: "tall" },
  { src: images.foodPie, alt: "Homemade steak pie served at the bar", span: "normal" },
  { src: images.liveMusic, alt: "Live acoustic music night at the clubhouse", span: "normal" },
  { src: images.drinks, alt: "Pints and a dram on the bar top", span: "normal" },
  { src: images.community, alt: "Friends enjoying a weekend night together", span: "wide" },
  { src: images.foodBreakfast, alt: "Full Scottish breakfast served in the bar", span: "normal" },
  { src: images.partyNight, alt: "Karaoke and disco night on the dance floor", span: "normal" },
  { src: images.foodRoast, alt: "Sunday roast dinner with all the trimmings", span: "tall" },
  { src: images.barWhisky, alt: "Whisky shelf lit in amber behind the bar", span: "normal" },
  { src: images.foodDessert, alt: "Sticky toffee pudding with custard", span: "normal" },
  { src: images.exterior, alt: "The clubhouse at dusk in the Ayrshire countryside", span: "wide" },
];
