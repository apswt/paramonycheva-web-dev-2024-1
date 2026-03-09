const dishes = [
    {
        keyword: "borsch",
        name: "Борщ",
        price: 180,
        category: "soup",
        count: "300 грамм",
        image: "борщ.jpg",
        kind: "meat" 
    },
    {
        keyword: "mushroom-soup",
        name: "Грибной крем-суп",
        price: 180,
        category: "soup",
        count: "300 грамм",
        image: "грибной.jpg",
        kind: "veg" 
    },
    {
        keyword: "chicken-soup",
        name: "Куриный суп",
        price: 150,
        category: "soup",
        count: "300 грамм",
        image: "куриный.jpg",
        kind: "meat" 
    },
    {
        keyword: "fish-soup",
        name: "Уха по-фински",
        price: 220,
        category: "soup",
        count: "300 грамм",
        image: "уха.jpg",
        kind: "fish" 
    },
    {
        keyword: "tomato-soup",
        name: "Томатный суп",
        price: 160,
        category: "soup",
        count: "300 грамм",
        image: "томатный.jpg",
        kind: "veg" 
    },
    {
        keyword: "salmon-soup",
        name: "Суп с лососем",
        price: 240,
        category: "soup",
        count: "300 грамм",
        image: "лосось.jpg",
        kind: "fish" 
    },
    
  
    {
        keyword: "beef-stroganoff",
        name: "Бефстроганов с гречкой",
        price: 250,
        category: "main",
        count: "250 грамм",
        image: "бестро.jpg",
        kind: "meat" 
    },
    {
        keyword: "carbonara",
        name: "Карбонара",
        price: 230,
        category: "main",
        count: "250 грамм",
        image: "карбонара.jpg",
        kind: "meat" 
    },
    {
        keyword: "chicken-cutlets",
        name: "Куриные котлеты с пюре",
        price: 185,
        category: "main",
        count: "300 грамм",
        image: "контент.jpg",
        kind: "meat" 
    },
    {
        keyword: "salmon-steak",
        name: "Стейк из лосося",
        price: 350,
        category: "main",
        count: "200 грамм",
        image: "стейк-лосось.jpg",
        kind: "fish" 
    },
    {
        keyword: "veg-ratatouille",
        name: "Рататуй",
        price: 190,
        category: "main",
        count: "300 грамм",
        image: "рататуй.jpg",
        kind: "veg" 
    },
    {
        keyword: "fish-cutlets",
        name: "Рыбные котлеты",
        price: 210,
        category: "main",
        count: "250 грамм",
        image: "рыбные-котлеты.jpg",
        kind: "fish" 
    },
    

    {
        keyword: "tea",
        name: "Чай в ассортименте",
        price: 50,
        category: "drink",
        count: "200 мл",
        image: "чай.jpg",
        kind: "hot" 
    },
    {
        keyword: "milkshake",
        name: "Молочный коктейль в ассортименте",
        price: 200,
        category: "drink",
        count: "300 мл",
        image: "мол кокте.jpg",
        kind: "cold" 
    },
    {
        keyword: "lemonade",
        name: "Лимонад в ассортименте",
        price: 100,
        category: "drink",
        count: "300 мл",
        image: "лимонады.jpg",
        kind: "cold" 
    },
    {
        keyword: "coffee",
        name: "Кофе",
        price: 120,
        category: "drink",
        count: "200 мл",
        image: "кофе.jpg",
        kind: "hot" 
    },
    {
        keyword: "juice",
        name: "Сок апельсиновый",
        price: 90,
        category: "drink",
        count: "250 мл",
        image: "сок.jpg",
        kind: "cold" 
    },
    {
        keyword: "cocoa",
        name: "Горячий шоколад",
        price: 150,
        category: "drink",
        count: "250 мл",
        image: "шоколад.jpg",
        kind: "hot" 
    },
    
    {
        keyword: "caesar",
        name: "Цезарь с курицей",
        price: 280,
        category: "salad",
        count: "250 грамм",
        image: "цезарь.jpg",
        kind: "meat" 
    },
    {
        keyword: "greek-salad",
        name: "Греческий салат",
        price: 220,
        category: "salad",
        count: "230 грамм",
        image: "греческий.jpg",
        kind: "veg" 
    },
    {
        keyword: "shrimp-salad",
        name: "Салат с креветками",
        price: 320,
        category: "salad",
        count: "200 грамм",
        image: "креветки.jpg",
        kind: "fish" 
    },
    {
        keyword: "veggie-salad",
        name: "Овощной салат",
        price: 180,
        category: "salad",
        count: "250 грамм",
        image: "овощной.jpg",
        kind: "veg" 
    },
    {
        keyword: "caprese",
        name: "Капрезе",
        price: 240,
        category: "salad",
        count: "200 грамм",
        image: "капрезе.jpg",
        kind: "veg" 
    },
    {
        keyword: "tomato-mozzarella",
        name: "Томаты с моцареллой",
        price: 210,
        category: "salad",
        count: "220 грамм",
        image: "томаты-моцарелла.jpg",
        kind: "veg" 
    },
   
    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 180,
        category: "dessert",
        count: "120 грамм",
        image: "чизкейк.jpg",
        kind: "small" 
    },
    {
        keyword: "tiramisu",
        name: "Тирамису",
        price: 200,
        category: "dessert",
        count: "150 грамм",
        image: "тирамису.jpg",
        kind: "medium" 
    },
    {
        keyword: "chocolate-cake",
        name: "Шоколадный торт",
        price: 160,
        category: "dessert",
        count: "130 грамм",
        image: "шоколадный-торт.jpg",
        kind: "small" 
    },
    {
        keyword: "ice-cream",
        name: "Мороженое",
        price: 120,
        category: "dessert",
        count: "100 грамм",
        image: "мороженое.jpg",
        kind: "small" 
    },
    {
        keyword: "apple-pie",
        name: "Яблочный пирог",
        price: 220,
        category: "dessert",
        count: "180 грамм",
        image: "яблочный-пирог.jpg",
        kind: "medium" 
    },
    {
        keyword: "napoleon",
        name: "Наполеон",
        price: 280,
        category: "dessert",
        count: "250 грамм",
        image: "наполеон.jpg",
        kind: "large" 
    }
];
