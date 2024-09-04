document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expensesList = document.getElementById('expenses-list');
    const remainingBalanceElem = document.getElementById('remaining-balance');

    let expenses = [];
    let initialBalance = 1000;  // Set your initial balance here
    let totalExpenses = 0;

    function updateBalance() {
        const remainingBalance = initialBalance - totalExpenses;
        remainingBalanceElem.textContent = `$${remainingBalance.toFixed(2)}`;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (description && !isNaN(amount) && amount > 0) {
            expenses.push({ description, amount });
            totalExpenses += amount;

            const listItem = document.createElement('li');
            listItem.textContent = `${description}: $${amount.toFixed(2)}`;
            expensesList.appendChild(listItem);

            updateBalance();

            form.reset();
        }
    });

    // Initialize the balance display
    updateBalance();
});
