document.addEventListener('DOMContentLoaded', function() {
    const sortedDishes = [...dishes].sort((a, b) => {
        return a.name.localeCompare(b.name, 'ru');
    });
    
    displayDishesByCategory('soup', '#soups .menu-grid');
    displayDishesByCategory('main', '#main-course .menu-grid');
    displayDishesByCategory('drink', '#drinks .menu-grid');
    
    function displayDishesByCategory(category, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        
  
        container.innerHTML = '';
        
        const categoryDishes = sortedDishes.filter(dish => dish.category === category);
        
        categoryDishes.forEach(dish => {
            const dishElement = createDishElement(dish);
            container.appendChild(dishElement);
        });
    }
    
    function createDishElement(dish) {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.dataset.dish = dish.keyword;
        
        div.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <p class="price">${dish.price} ₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button class="add-to-order">Добавить</button>
        `;
        
        return div;
    }
});
