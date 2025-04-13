import type { Product, Review } from "@/types"

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment, and your water bottle in the side pocket. The back system is ventilated for maximum comfort.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Women's Short Sleeve V-Neck T-Shirt",
    price: 39.99,
    description:
      "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.5,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Women's Gold Dragon Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave Diamond Ring",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess Cut Ring",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Rose Gold Plated Stainless Steel Earrings",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB External Hard Drive",
    price: 64.99,
    description:
      "USB 3.0 and USB 2.0 Compatibility. Fast data transfers. Improve PC Performance. High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD 1TB Internal Hard Drive",
    price: 109.99,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD",
    price: 109.99,
    description:
      "3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "4TB Gaming Drive External Hard Drive",
    price: 114.99,
    description:
      "Expand your PS4 gaming experience, Play anywhere. Fast and easy setup, Sleek design with high capacity, 3-year manufacturer's limited warranty.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer 21.5 Inches Full HD IPS Monitor",
    price: 599.99,
    description:
      "21.5 inches Full HD (1920 x 1080) widescreen IPS display. AMD Radeon free sync technology. Refresh rate: 75Hz - Using HDMI port.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title: "Samsung 49-Inch Curved Gaming Monitor",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side. QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's Snowboard Jacket",
    price: 56.99,
    description:
      "Note: The Jackets is US standard size, Please choose size as your usual wear. Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title: "Lock and Love Women's Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear. Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes lined and The Raincoat has 2 side pockets.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck, Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring, Summer, Autumn, Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
]

export const mockProduct: Product = mockProducts[0]

// Mock reviews data
export const mockReviews: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      productId: 1,
      username: "JohnDoe",
      rating: 5,
      comment:
        "This backpack is amazing! It's durable, spacious, and looks great. I use it every day for work and hiking on weekends.",
      date: "2023-01-15",
    },
    {
      id: 2,
      productId: 1,
      username: "HikerGirl",
      rating: 4,
      comment: "Great backpack for day hikes. Comfortable to wear and has plenty of pockets for organization.",
      date: "2023-02-20",
    },
    {
      id: 3,
      productId: 1,
      username: "TravelExplorer",
      rating: 3,
      comment: "Decent backpack, but I wish it had more padding on the shoulder straps for long trips.",
      date: "2023-03-10",
    },
  ],
  2: [
    {
      id: 4,
      productId: 2,
      username: "FashionFan",
      rating: 5,
      comment: "Perfect fit and very comfortable. The material is high quality and it washes well.",
      date: "2023-01-05",
    },
    {
      id: 5,
      productId: 2,
      username: "CasualDresser",
      rating: 4,
      comment: "Nice t-shirt for everyday wear. Fits as expected and the color is exactly as shown.",
      date: "2023-02-12",
    },
  ],
  3: [
    {
      id: 6,
      productId: 3,
      username: "OutdoorEnthusiast",
      rating: 5,
      comment: "This jacket is perfect for fall weather. Not too heavy but provides good warmth.",
      date: "2023-01-18",
    },
    {
      id: 7,
      productId: 3,
      username: "MountainClimber",
      rating: 5,
      comment: "Excellent quality jacket. Has held up well during several hiking trips.",
      date: "2023-02-25",
    },
    {
      id: 8,
      productId: 3,
      username: "WeekendAdventurer",
      rating: 4,
      comment: "Good jacket overall. Wish it had more pockets but the quality is great.",
      date: "2023-03-15",
    },
  ],
  4: [
    {
      id: 9,
      productId: 4,
      username: "StyleQueen",
      rating: 5,
      comment: "Love this t-shirt! The fit is perfect and the material is so soft.",
      date: "2023-01-22",
    },
    {
      id: 10,
      productId: 4,
      username: "FashionForward",
      rating: 4,
      comment: "Great basic tee for layering or wearing alone. Very versatile.",
      date: "2023-02-28",
    },
  ],
}

// Generate some reviews for all products
for (let i = 5; i <= 20; i++) {
  if (!mockReviews[i]) {
    mockReviews[i] = [
      {
        id: 100 + i,
        productId: i,
        username: `User${i}A`,
        rating: Math.floor(Math.random() * 3) + 3, // Random rating between 3-5
        comment: "Great product, would recommend to others!",
        date: "2023-04-15",
      },
      {
        id: 200 + i,
        productId: i,
        username: `User${i}B`,
        rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1-5
        comment: "Decent quality for the price. Shipping was fast.",
        date: "2023-05-20",
      },
    ]
  }
}
