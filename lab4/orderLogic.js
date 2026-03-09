document.addEventListener('DOMContentLoaded', function() {
    let selectedDishes = {
        soup: null,
        main: null,
        drink: null
    };
    
    
    const categoryNames = {
        soup: "Суп",
        main: "Основное блюдо",
        drink: "Напиток"
    };
    

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
    
    function selectDish(dish) {
   
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.border = '2px solid transparent';
        });
        

        const selectedItem = document.querySelector(`[data-dish="${dish.keyword}"]`);
        if (selectedItem) {
            selectedItem.style.border = '2px solid tomato';
        }
        
  
        selectedDishes[dish.category] = dish;
    }
    
    function updateOrderForm() {
        const orderContainer = document.querySelector('.your-order');
        if (!orderContainer) return;
      
        const oldOrderDisplay = document.getElementById('order-display');
        if (oldOrderDisplay) {
            oldOrderDisplay.remove();
        }
        
     
        const orderDisplay = document.createElement('div');
        orderDisplay.id = 'order-display';
        

        const hasSelectedDishes = Object.values(selectedDishes).some(dish => dish !== null);
        
        if (!hasSelectedDishes) {
            orderDisplay.innerHTML = '<p class="no-selection">Ничего не выбрано</p>';
            hideCostBlock();
        } else {
            let orderHTML = '';
            let totalCost = 0;
            
     
            Object.entries(selectedDishes).forEach(([category, dish]) => {
                orderHTML += `<div class="order-category">`;
                orderHTML += `<strong>${categoryNames[category]}:</strong> `;
                
                if (dish) {
                    orderHTML += `${dish.name} - ${dish.price} ₽`;
                    totalCost += dish.price;
                } else {
                    orderHTML += 'Не выбрано';
                }
                
                orderHTML += `</div>`;
            });
            
        
            orderHTML += `
                <div class="order-total" id="cost-block">
                    <strong>Стоимость заказа:</strong> ${totalCost} ₽
                </div>
            `;
            
            orderDisplay.innerHTML = orderHTML;
            showCostBlock();
        }

        const formElements = orderContainer.querySelector('label, select, textarea').closest('.order-form-elements');
        if (formElements) {
            orderContainer.insertBefore(orderDisplay, formElements);
        } else {
            
            orderContainer.prepend(orderDisplay);
        }
        
        updateSelectElements();
    }
    
    function updateSelectElements() {
        const soupSelect = document.getElementById('soup-select');
        const mainSelect = document.getElementById('main-select');
        const drinkSelect = document.getElementById('drink-select');
        
        if (soupSelect) soupSelect.value = selectedDishes.soup ? selectedDishes.soup.keyword : '';
        if (mainSelect) mainSelect.value = selectedDishes.main ? selectedDishes.main.keyword : '';
        if (drinkSelect) drinkSelect.value = selectedDishes.drink ? selectedDishes.drink.keyword : '';
    }
    
    function showCostBlock() {
        const costBlock = document.getElementById('cost-block');
        if (costBlock) costBlock.style.display = 'block';
    }
    
    function hideCostBlock() {
        const costBlock = document.getElementById('cost-block');
        if (costBlock) costBlock.style.display = 'none';
    }
    updateOrderForm();
    
    document.getElementById('soup-select')?.addEventListener('change', function() {
        const dish = dishes.find(d => d.keyword === this.value && d.category === 'soup');
        if (dish) {
            selectDish(dish);
            updateOrderForm();
        }
    });
    
    document.getElementById('main-select')?.addEventListener('change', function() {
        const dish = dishes.find(d => d.keyword === this.value && d.category === 'main');
        if (dish) {
            selectDish(dish);
            updateOrderForm();
        }
    });
    
    document.getElementById('drink-select')?.addEventListener('change', function() {
        const dish = dishes.find(d => d.keyword === this.value && d.category === 'drink');
        if (dish) {
            selectDish(dish);
            updateOrderForm();
        }
    });
});
