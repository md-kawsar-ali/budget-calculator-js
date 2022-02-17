// Get Html Input and Button by the Function
function getItem(id) {
    const element = document.getElementById(id);
    return element;
}

// All the Input Element
const incomeInput = getItem('income');
const foodInput = getItem('food');
const rentInput = getItem('rent');
const clothInput = getItem('clothes');
const saveInput = getItem('save');

// All the Output Element
const totalExpenses = getItem('total-expenses');
const balance = getItem('balance');
const savingAmount = getItem('saving-amount');
const remainBalance = getItem('remain-balance');

//Error Output Element
const incomeErr = getItem('income-err');
const foodErr = getItem('food-err');
const rentErr = getItem('rent-err');
const clothErr = getItem('cloth-err');
const savingErr = getItem('saving-err');

// All the Button Element
const calculateExpense = getItem('calculate');
const calculateSaving = getItem('save-calculate');

// Handle Expenses Calculation
calculateExpense.addEventListener('click', function () {
    const incomeAmount = parseFloat(incomeInput.value);
    const foodAmount = parseFloat(foodInput.value);
    const rentAmount = parseFloat(rentInput.value);
    const clothAmount = parseFloat(clothInput.value);

    // Invalid Input Error Handling
    if (incomeAmount <= 0 || isNaN(incomeAmount)) {
        incomeErr.style.display = 'block';
        return;
    } else {
        incomeErr.style.display = 'none';
    }

    if (foodAmount <= 0 || isNaN(foodAmount)) {
        foodErr.style.display = 'block';
        return;
    } else {
        foodErr.style.display = 'none';
    }

    if (rentAmount <= 0 || isNaN(rentAmount)) {
        rentErr.style.display = 'block';
        return;
    } else {
        rentErr.style.display = 'none';
    }

    if (clothAmount <= 0 || isNaN(clothAmount)) {
        clothErr.style.display = 'block';
        return;
    } else {
        clothErr.style.display = 'none';
    }

    // Total Expense Calculation and Result Output
    const expensesResult = foodAmount + rentAmount + clothAmount;
    totalExpenses.innerText = expensesResult;

    // Rest Balance and Output
    if (expensesResult <= incomeAmount) {
        const restBalance = incomeAmount - expensesResult;
        balance.innerText = restBalance;
        balance.style.color = '#232323';
    } else {
        balance.innerText = 'Less than Expenses!';
        balance.style.color = 'red';
    }
});

// Handle Saving Calculation
calculateSaving.addEventListener('click', function () {
    const currentBalance = balance.innerText;
    const incomeAmount = parseFloat(incomeInput.value);
    const savingRate = parseFloat(saveInput.value);
    let savingResult = 0;

    // Saving Amount Calculation
    if (incomeAmount <= 0 || isNaN(incomeAmount)) {
        savingErr.style.display = 'block';
        return;
    } else {
        savingResult += (incomeAmount / 100) * savingRate;
        savingErr.style.display = 'none';
    }

    // Show Saving Amount Output
    if (currentBalance >= savingResult && savingResult >= 0) {
        savingAmount.innerText = savingResult;
        savingErr.style.display = 'none';
    } else {
        savingAmount.innerText = 00;
        remainBalance.innerText = 00;
        savingErr.style.display = 'block';
        return;
    }

    // Remaining Balance Calculation
    if (currentBalance >= 0 || !isNaN(currentBalance) && savingResult >= 0) {
        const remainBalanceResult = currentBalance - savingResult;
        remainBalance.innerText = remainBalanceResult;
        savingErr.style.display = 'none';
    } else {
        remainBalance.innerText = 00;
        savingErr.style.display = 'block';
    }
});