document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            const filterBtn = e.target;
            const category = filterBtn.dataset.category;
            const kind = filterBtn.dataset.kind;
            const categoryFilters = document.querySelectorAll(`.filters button[data-category="${category}"]`);
        
            categoryFilters.forEach(btn => {
                btn.classList.remove('active');
            });
            
            filterBtn.classList.add('active');
            
            filterDishesByCategory(category, kind);
        }
    });
});

function filterDishesByCategory(category, kind) 
{
    let containerSelector;
    switch(category) {
        case 'soup':
            containerSelector = '#soups .menu-grid';
            break;
        case 'main':
            containerSelector = '#main-course .menu-grid';
            break;
        case 'drink':
            containerSelector = '#drinks .menu-grid';
            break;
        case 'salad':
            containerSelector = '#salads .menu-grid';
            break;
        case 'dessert':
            containerSelector = '#desserts .menu-grid';
            break;
        default:
            return;
    }
    
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const dishCards = container.querySelectorAll('.menu-item');
    
    if (kind === 'all') {
        dishCards.forEach(card => {
            card.style.display = 'flex';
        });
    } else {
        dishCards.forEach(card => {
            const dishKeyword = card.dataset.dish;
            const dish = dishes.find(d => d.keyword === dishKeyword);
            
            if (dish && dish.kind === kind) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}
