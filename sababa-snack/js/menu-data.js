const MENU_DATA = [
  {
    id: "burger",
    title: "سندويشات برغر لحم",
    subtitle: "Beef Burgers",
    image: "assets/images/burger.jpg",
    items: [
      { name: "كلاسيك", detail: "100gm", sandwich: "1.50", meal: "3.00" },
      { name: "ونش", detail: "150gm", sandwich: "2.00", meal: "3.50" },
      { name: "بيج بيبي", detail: "200gm", sandwich: "2.50", meal: "4.00" },
      { name: "مونستر", detail: "300gm", sandwich: "3.75", meal: "5.25" }
    ]
  },
  {
    id: "burger-cream",
    title: "سندويشات برغر ماشروم بالكريمة",
    subtitle: "Mushroom & Cream Burgers",
    image: "assets/images/hero-burger.jpg",
    note: "إضافة صوص صبابا المدخن: 0.50 JD",
    items: [
      { name: "كلاسيك", detail: "100gm", sandwich: "2.00", meal: "3.50" },
      { name: "ونش", detail: "150gm", sandwich: "2.50", meal: "4.00" },
      { name: "بيج بيبي", detail: "200gm", sandwich: "3.00", meal: "4.50" },
      { name: "مونستر", detail: "300gm", sandwich: "4.25", meal: "5.75" }
    ]
  },
  {
    id: "steak",
    title: "ستيك",
    subtitle: "Steak Sandwiches",
    image: "assets/images/shawarma-beef.jpg",
    items: [
      { name: "فيلادلفيا ستيك", detail: "150gm", sandwich: "2.75", meal: "4.25" },
      { name: "إيطالي ستيك", detail: "150gm", sandwich: "3.75", meal: "5.25" },
      { name: "باربكيو ستيك", detail: "150gm", sandwich: "2.75", meal: "4.25" },
      { name: "ستيك بالجبنة", detail: "150gm", sandwich: "3.00", meal: "4.50" }
    ]
  },
  {
    id: "shawarma",
    title: "شاورما صاج",
    subtitle: "Shawarma Saj",
    image: "assets/images/shawarma-chicken.jpg",
    note: "وجبات الشاورما بدون مشروب غازي",
    items: [
      { name: "شاورما عادي", detail: "150gm", sandwich: "1.50", meal: "3.00" },
      { name: "شاورما صبابا مدخن", detail: "200gm", sandwich: "2.50", meal: "4.00" },
      { name: "شاورما دبل عادي", detail: "300gm • 2 ساندويش", meal: "4.50" },
      { name: "شاورما صبابا دبل مدخن", detail: "400gm • 2 ساندويش", meal: "5.50" }
    ]
  },
  {
    id: "mighty",
    title: "مايتي دجاج",
    subtitle: "Mighty Chicken",
    image: "assets/images/zinger.jpg",
    items: [
      { name: "مايتي كرسبي", detail: "200gm", sandwich: "2.25", meal: "3.75" },
      { name: "مايتي قرلد دجاج", detail: "150gm", sandwich: "2.00", meal: "3.50" },
      { name: "مايتي قرلد دجاج", detail: "300gm", sandwich: "3.75", meal: "5.25" },
      { name: "سكالوب دجاج", detail: "110gm", sandwich: "1.50", meal: "3.00" },
      { name: "سكالوب دجاج", detail: "220gm", sandwich: "2.75", meal: "4.25" },
      { name: "مايتي رويال", detail: "110gm", sandwich: "1.25", meal: "2.75" }
    ]
  },
  {
    id: "sababa-snacks",
    title: "سناكات صبابا",
    subtitle: "Sababa Snacks",
    image: "assets/images/shish.jpg",
    items: [
      { name: "فاهيتا", detail: "150gm", sandwich: "2.00", meal: "3.50" },
      { name: "باربكيو دجاج", detail: "150gm", sandwich: "2.00", meal: "3.50" },
      { name: "مكسيكي", detail: "150gm", sandwich: "2.25", meal: "3.75" },
      { name: "إيطالي ألفريدو", detail: "150gm", sandwich: "2.50", meal: "4.00" },
      { name: "زنجر بالكريمة", detail: "150gm", sandwich: "2.50", meal: "4.00" },
      { name: "زنجر سوبر", detail: "150gm", sandwich: "2.50", meal: "4.00" },
      { name: "زنجر", detail: "150gm", sandwich: "2.00", meal: "3.50" },
      { name: "شيش طاووق", detail: "150gm", sandwich: "2.25", meal: "3.75" },
      { name: "هوت دوق  جامبو", detail: "150gm", sandwich: "2.00", meal: "3.50" }
    ]
  },
  {
    id: "breakfast",
    title: "قلعة الإفطار",
    subtitle: "Breakfast",
    image: "assets/images/fries.jpg",
    note: "جميع الساندويشات فرنسي أو صاج",
    items: [
      { name: "ساندويش كبدة", detail: "150gm", price: "1.25" },
      { name: "مفركة بطاطا", detail: "100gm", price: "1.25" },
      { name: "فعفوط", price: "1.50" },
      { name: "ساندويش بطاطا", price: "1.00" },
      { name: "بيض مع جبنة", price: "1.50" },
      { name: "تيركي بلجبنة", price: "1.50" },
      { name: "مايتي رويال", price: "1.25" }
    ]
  },
  {
    id: "salads",
    title: "السلطات",
    subtitle: "Fresh Salads",
    image: "assets/images/salad.jpg",
    items: [
      { name: "سلطة مايتي قرلد", price: "4.50" },
      { name: "سلطة زنجر", price: "4.50" },
      { name: "سلطة حجم صغير", price: "2.50" }
    ]
  },
  {
    id: "drinks-extras",
    title: "المشروبات والإضافات",
    subtitle: "Drinks & Extras",
    image: "assets/images/drinks.jpg",
    items: [
      { name: "مياه", detail: "500ml", price: "0.35" },
      { name: "مشروبات غازية", price: "0.40" },
      { name: "صوص صبابا مدخن", price: "0.50" },
      { name: "جبنة", price: "1.25" },
      { name: "علبة بطاطا", price: "1.00" },
      { name: "علبة بطاطا كبير", price: "2.00" },
      { name: "علبة بطاطا عائلي", price: "3.00" }
    ]
  }
];

const BRANCHES = [
  {
    name: "فرع الجاردنز",
    area: "عمّان — الجاردنز",
    phone: "06-5666906",
    maps: "https://www.google.com/maps/search/?api=1&query=%D8%B5%D8%A8%D8%A7%D8%A8%D8%A7+%D8%B3%D9%86%D8%A7%D9%83+%D8%A7%D9%84%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%D8%B2+%D8%B9%D9%85%D8%A7%D9%86"
  },
  {
    name: "فرع الجندويل",
    area: "عمّان — الجندويل",
    phone: "06-5811313",
    maps: "https://www.google.com/maps/search/?api=1&query=%D8%B5%D8%A8%D8%A7%D8%A8%D8%A7+%D8%B3%D9%86%D8%A7%D9%83+%D8%A7%D9%84%D8%AC%D9%86%D8%AF%D9%88%D9%8A%D9%84+%D8%B9%D9%85%D8%A7%D9%86"
  },
  {
    name: "فرع صناعة البيادر",
    area: "عمّان — صناعة البيادر",
    phone: "06-5818800",
    maps: "https://www.google.com/maps/search/?api=1&query=%D8%B5%D8%A8%D8%A7%D8%A8%D8%A7+%D8%B3%D9%86%D8%A7%D9%83+%D8%B5%D9%86%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%AF%D8%B1+%D8%B9%D9%85%D8%A7%D9%86"
  },
  {
    name: "فرع مادبا الغربي",
    area: "مادبا — مادبا الغربي",
    phone: "0797236769",
    maps: "https://www.google.com/maps/search/?api=1&query=%D8%B5%D8%A8%D8%A7%D8%A8%D8%A7+%D8%B3%D9%86%D8%A7%D9%83+%D9%85%D8%A7%D8%AF%D8%A8%D8%A7+%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A"
  }
];
