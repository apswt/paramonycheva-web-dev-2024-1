let selectedDishes = {
    soup: null,
    main: null,
    drink: null,
    salad: null,
    dessert: null
};

const categoryNames = {
    soup: "Суп",
    main: "Основное блюдо",
    drink: "Напиток",
    salad: "Салат или стартер",
    dessert: "Десерт"
};

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-order')) {
            const menuItem = e.target.closest('.menu-item');
            const dishKeyword = menuItem.dataset.dish;
            
            const dish = dishes.find(d => d.keyword === dishKeyword);
            if (dish) {
                selectDish(dish);
                updateOrderForm();
            }
        }
    });
    
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            selectedDishes = {
                soup: null,
                main: null,
                drink: null,
                salad: null,
                dessert: null
            };
            
            document.querySelectorAll('.menu-item').forEach(item => {
                item.style.border = '2px solid transparent';
            });
            
            updateOrderForm();
            
            const form = document.querySelector('form');
            if (form) {
                form.reset();
            }
        });
    }
    
    updateOrderForm();
});

function selectDish(dish) {
    const categoryItems = document.querySelectorAll(`.menu-item[data-dish*="${dish.category}"]`);
    categoryItems.forEach(item => {
        item.style.border = '2px solid transparent';
    });
    
    const selectedItem = document.querySelector(`[data-dish="${dish.keyword}"]`);
    if (selectedItem) {
        selectedItem.style.border = '2px solid tomato';
    }
    
    selectedDishes[dish.category] = dish;
}

function updateOrderForm() {
    const orderDisplay = document.getElementById('order-display');
    if (!orderDisplay) return;
    
    const hasSelectedDishes = Object.values(selectedDishes).some(dish => dish !== null);
    
    if (!hasSelectedDishes) {
        orderDisplay.innerHTML = '<p class="no-selection">Ничего не выбрано</p>';
        updateHiddenFields();
    } else {
        let orderHTML = '<h3>Ваш заказ</h3>';
        let totalCost = 0;
        
        Object.entries(selectedDishes).forEach(([category, dish]) => {
            orderHTML += `<div class="order-category">`;
            orderHTML += `<strong>${categoryNames[category]}:</strong><br>`;
            
            if (dish) {
                orderHTML += `${dish.name} ${dish.price}₽`;
                totalCost += dish.price;
            } else {
                orderHTML += 'не выбран';
            }
            
            orderHTML += `</div>`;
        });
        
        orderHTML += `<hr style="margin: 20px 0; border: 1px solid #ddd;">`;
        orderHTML += `
            <div class="order-total">
                <strong>Стоимость заказа</strong><br>
                ${totalCost}₽
            </div>
        `;
        
        orderDisplay.innerHTML = orderHTML;
        updateHiddenFields(totalCost);
    }
}

function updateHiddenFields(totalCost = 0) {
    const soupHidden = document.getElementById('soup-hidden');
    const mainHidden = document.getElementById('main-hidden');
    const drinkHidden = document.getElementById('drink-hidden');
    const saladHidden = document.getElementById('salad-hidden');
    const dessertHidden = document.getElementById('dessert-hidden');
    const totalCostHidden = document.getElementById('total-cost-hidden');
    
    if (soupHidden) soupHidden.value = selectedDishes.soup ? selectedDishes.soup.name : '';
    if (mainHidden) mainHidden.value = selectedDishes.main ? selectedDishes.main.name : '';
    if (drinkHidden) drinkHidden.value = selectedDishes.drink ? selectedDishes.drink.name : '';
    if (saladHidden) saladHidden.value = selectedDishes.salad ? selectedDishes.salad.name : '';
    if (dessertHidden) dessertHidden.value = selectedDishes.dessert ? selectedDishes.dessert.name : '';
    if (totalCostHidden) totalCostHidden.value = totalCost;
}
