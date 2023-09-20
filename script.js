
const chocolateList = document.querySelector('.chocolate-list');
const selectedChocolates = document.querySelector('.selected-chocolates');

const chocolates = [
    { name: 'DairyMilk', price: 20 },
    { name: 'KitKat', price: 40 },
    { name: 'DairyMilk Silk', price: 80 },
    { name: 'DairyMilk Bubly', price: 160 },
    { name: 'Amul Dark Chocolate', price: 90 },
    { name: 'Tempatation', price: 100 },
    { name: 'Ferrero Rocher', price: 134 },
    { name: 'Lindt Excellence Dark Chocolate', price: 280 },
    { name: 'DairyMilk', price: 50 },
    { name: 'Celebration', price: 200 },
    
];

// Create checkboxes for each chocolate
chocolates.forEach(chocolate => {
    const chocolateItem = document.createElement('div');
    chocolateItem.classList.add('chocolate-item');
    chocolateItem.innerHTML = `
        <label>
            <input type="checkbox" class="chocolate-checkbox" value="${chocolate.name}" data-price="${chocolate.price}">
            ${chocolate.name} -  ₹${chocolate.price.toFixed(2)}
        </label>
    `;
    chocolateList.appendChild(chocolateItem);
});

const checkboxes = document.querySelectorAll('.chocolate-checkbox');

// Event listener for checkbox changes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedChocolates);
});

function updateSelectedChocolates() {
    const selected = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    let totalPrice = 0;

    if (selected.length > 8) {
        alert('You can select up to 8 chocolates.');
        this.checked = false;
        return;
    }

    selectedChocolates.innerHTML = '<h2>Selected Chocolates:</h2>';

    selected.forEach(chocolate => {
        const price = parseFloat(chocolate.getAttribute('data-price'));
        totalPrice += price;

        const selectedChocolateItem = document.createElement('div');
        selectedChocolateItem.textContent = `${chocolate.value} - ₹${price.toFixed(2)}`;
        selectedChocolates.appendChild(selectedChocolateItem);
    });

    selectedChocolates.innerHTML += `<p>Total Price: ₹${totalPrice.toFixed(2)}</p>`;
}

