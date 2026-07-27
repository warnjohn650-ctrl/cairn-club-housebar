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
  image?: string;
  items: { name: string; description: string; price: string; tag?: string }[];
};

export const menu: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    blurb: "Served until 11.30am — the proper start to a Scottish morning.",
    image: images.foodBreakfast,
    items: [
      {
        name: "Full Scottish",
        description: "Square sausage, bacon, black pudding, tattie scone, egg, beans, toast.",
        price: "£9.50",
        tag: "Favourite",
      },
      {
        name: "Wee Clubhouse Breakfast",
        description: "Bacon, sausage, egg and toast for a lighter morning.",
        price: "£6.50",
      },
      {
        name: "Roll & Filling",
        description: "Morning roll with your choice of sausage, bacon or egg.",
        price: "£3.20",
      },
      {
        name: "Porridge & Honey",
        description: "Creamy oats, heather honey, toasted seeds.",
        price: "£4.00",
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    blurb: "Hearty plates and toasties, made fresh to order.",
    image: images.foodPie,
    items: [
      { name: "Homemade Soup & Crusty Bread", description: "Changes daily, always warming.", price: "£4.50" },
      { name: "Clubhouse Toastie", description: "Cheese, ham and red onion, served with crisps.", price: "£6.50" },
      { name: "Scampi & Chips", description: "Golden breaded scampi, chips, peas and tartare.", price: "£11.00" },
      { name: "Steak Pie & Mash", description: "Slow-cooked steak in rich gravy, buttered mash.", price: "£12.50", tag: "Gran's recipe" },
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    blurb: "Evening classics done properly, from 5pm.",
    image: images.foodRoast,
    items: [
      { name: "Sunday Roast", description: "Roast beef, Yorkshire pudding, roasties and gravy.", price: "£14.50", tag: "Sundays" },
      { name: "Fish & Chips", description: "Beer-battered haddock, chunky chips, mushy peas.", price: "£13.00" },
      { name: "Gammon, Egg & Pineapple", description: "Proper retro, proper good.", price: "£12.50" },
      { name: "Mac & Cheese Bake", description: "Three-cheese sauce, garlic bread, side salad.", price: "£10.50" },
    ],
  },
  {
    id: "specials",
    title: "Homemade Specials",
    blurb: "Just like your gran's cooking — written on the blackboard each week.",
    image: images.community,
    items: [
      { name: "Mince & Tatties", description: "Scottish beef mince, skirlie and creamy mash.", price: "£11.50" },
      { name: "Cullen Skink", description: "Smoked haddock, potato and leek chowder.", price: "£7.50" },
      { name: "Haggis, Neeps & Tatties", description: "With a whisky cream sauce.", price: "£12.00" },
      { name: "Chicken Balmoral", description: "Haggis-stuffed chicken, peppercorn sauce.", price: "£15.00", tag: "Chef's pick" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Retro puddings with custard, cream or ice cream.",
    image: images.foodDessert,
    items: [
      { name: "Sticky Toffee Pudding", description: "Butterscotch sauce and vanilla custard.", price: "£6.00", tag: "Favourite" },
      { name: "Apple Crumble", description: "Bramley apple, oat crumble, thick cream.", price: "£5.50" },
      { name: "Jam Roly-Poly", description: "Old-school steamed sponge with custard.", price: "£5.50" },
      { name: "Cranachan Sundae", description: "Raspberries, toasted oats, whisky cream.", price: "£6.50" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    blurb: "Soft drinks, teas, coffees and the classics.",
    image: images.drinks,
    items: [
      { name: "Draught Lager", description: "Ice-cold and always well kept.", price: "from £4.20" },
      { name: "Irn-Bru & Soft Drinks", description: "Bottles and draught mixers.", price: "£2.20" },
      { name: "Coffee & Tea", description: "Americano, latte, cappuccino or a proper pot of tea.", price: "from £2.50" },
      { name: "Hot Toddy", description: "Whisky, honey, lemon and cloves.", price: "£5.50", tag: "Winter" },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    blurb: "Shaken behind the bar, weekend nights especially.",
    items: [
      { name: "Highland Old Fashioned", description: "Scotch, heather honey, orange bitters.", price: "£9.00" },
      { name: "Bramble", description: "Gin, lemon, crème de mûre.", price: "£8.50" },
      { name: "Espresso Martini", description: "Vodka, coffee liqueur, fresh espresso.", price: "£9.00" },
      { name: "Thistle Spritz", description: "Elderflower, prosecco, soda and mint.", price: "£8.00" },
    ],
  },
  {
    id: "beer",
    title: "Beer & Cider",
    blurb: "Draught and bottles, rotating Scottish guests.",
    items: [
      { name: "Scottish Guest Ale", description: "Ask at the bar for this week's cask.", price: "£4.60" },
      { name: "Craft IPA", description: "Bottled and canned selection.", price: "£5.20" },
      { name: "Stout", description: "Creamy, slow-poured pint.", price: "£4.80" },
      { name: "Apple Cider", description: "Over ice, pint or half.", price: "£4.60" },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    blurb: "By the glass or the bottle.",
    items: [
      { name: "House Red", description: "Smooth Merlot.", price: "£5.00 / £18.00" },
      { name: "House White", description: "Crisp Sauvignon Blanc.", price: "£5.00 / £18.00" },
      { name: "Rosé", description: "Light and fruity.", price: "£5.20 / £19.00" },
      { name: "Prosecco", description: "Perfect for celebrations.", price: "£6.00 / £24.00" },
    ],
  },
  {
    id: "whisky",
    title: "Whisky",
    blurb: "A wee dram from every corner of Scotland.",
    image: images.barWhisky,
    items: [
      { name: "Speyside Single Malt", description: "Honeyed, gentle and warming.", price: "£5.50" },
      { name: "Islay Single Malt", description: "Peat smoke and sea air.", price: "£6.50" },
      { name: "Highland Malt", description: "Rich fruit and spice.", price: "£6.00" },
      { name: "Blended Scotch", description: "The everyday dram.", price: "£4.00" },
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
