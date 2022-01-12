const { Given, When, Then, After } = require('@cucumber/cucumber');
const CalculatorPage = require('./../../pageobjects/calculator.page');

Given('I am on the calculator page', async function () {
  await CalculatorPage.open();
});

When('I enter all the values into the calculator', async function () {
  //Setup Test Data
  const customerDetails = {applicationType: 'single', noOfDependents: 0, propertyCustomerLikeToBuy:'home'};
  const customerEarnings = {annualIncome: 80000, annualOtherIncome: 10000};
  const customerExpenses = {monthlyLivingExpenses: 500, currentlyHomeLoanMonthlyExpenses: 0, otherLoanMonthlyExpenses: 100, otherMonthlyCommitments: 0, totalCreditCardLimits: 10000};

  //Enter Customer data
  await CalculatorPage.calculateBorrowLimit(customerDetails, customerEarnings, customerExpenses);
});

Then('The borrow limit is calculated as {string}', async function (calculatedValue) {
  await expect(await CalculatorPage.lblBorrowAmount).toHaveText(calculatedValue);
});

Given('I press start over', async function () {
  await CalculatorPage.startOver();
});

Then('All the fields in the calculator are set to default values', async function () {
  await expect(await CalculatorPage.txtAnnualIncome).toHaveValue("0");
  await expect(await CalculatorPage.txtAnnualOtherIncome).toHaveValue("0");
  await expect(await CalculatorPage.txtMonthlyLivingExpenses).toHaveValue("0");
  await expect(await CalculatorPage.txtCurrentlyHomeLoanMonthlyExpenses).toHaveValue("0");
  await expect(await CalculatorPage.txtOtherLoanMonthlyExpenses).toHaveValue("0");
  await expect(await CalculatorPage.txtOtherMonthlyCommitments).toHaveValue("0");
  await expect(await CalculatorPage.txtTotalCreditCardLimits).toHaveValue("0");
  await expect(await CalculatorPage.ddnNumberOfDependents).toHaveValue("0");
});