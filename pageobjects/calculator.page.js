const Page = require('./page');

/**
 * sub page containing specific selectors and methods for the calculator page
 */
class CalculatorPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnApplicationTypeSingle(){
        return $('#application_type_single');
    }

    get ddnNumberOfDependents(){
        return $('select[title="Number of dependants"]');
    }

    get btnBuyHome(){
        return $('#borrow_type_home');
    }

    get txtAnnualIncome(){
        return $('input[aria-labelledby="q2q1"]');
    }

    get txtAnnualOtherIncome(){
        return $('input[aria-labelledby="q2q2"]');
    }

    get txtMonthlyLivingExpenses(){
        return $('#expenses');
    }

    get txtCurrentlyHomeLoanMonthlyExpenses(){
        return $('#homeloans');
    }

    get txtOtherLoanMonthlyExpenses(){
        return $('input[id="otherloans"][aria-labelledby="q3q3"]');
    }

    get txtOtherMonthlyCommitments(){
        return $('input[id="otherloans"][aria-labelledby="q3q4"]');
    }

    get txtTotalCreditCardLimits(){
        return $('#credit');
    }

    get btnWorkOutBorrowAmount(){
        return $('#btnBorrowCalculater');
    }

    get btnStartOver(){
        return $('.start-over');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get lblBorrowAmount(){
        return $('#borrowResultTextAmount');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (customerDetails, customerEarnings, customerExpenses) {


        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async calculateBorrowLimit (customerDetails, customerEarnings, customerExpenses) {
        await this.enterCustomerDetails(customerDetails);
        await this.enterCustomerEarnings(customerEarnings);
        await this.enterCustomerExpenses(customerExpenses);
        this.btnWorkOutBorrowAmount.click();
    }

    async startOver(){
        this.btnStartOver.click();
    }

    async enterCustomerDetails(customerDetails){
        if(customerDetails.applicationType=="single"){
            await this.btnApplicationTypeSingle.click();
        }

        await this.ddnNumberOfDependents.selectByVisibleText(customerDetails.noOfDependents);

        if(customerDetails.propertyCustomerLikeToBuy=="home"){
            await this.btnBuyHome.click();
        }
    }

    async enterCustomerEarnings(customerEarnings){
        await this.txtAnnualIncome.setValue(customerEarnings.annualIncome);
        await this.txtAnnualOtherIncome.setValue(customerEarnings.annualOtherIncome);
    }

    async enterCustomerExpenses(customerExpenses){
        await this.txtMonthlyLivingExpenses.clearValue();
        await this.txtMonthlyLivingExpenses.setValue(customerExpenses.monthlyLivingExpenses);
        await this.txtCurrentlyHomeLoanMonthlyExpenses.setValue(customerExpenses.currentlyHomeLoanMonthlyExpenses);
        await this.txtOtherLoanMonthlyExpenses.setValue(customerExpenses.otherLoanMonthlyExpenses);
        await this.txtOtherMonthlyCommitments.setValue(customerExpenses.otherMonthlyCommitments)
        await this.txtTotalCreditCardLimits.setValue(customerExpenses.totalCreditCardLimits);
    }
}

module.exports = new CalculatorPage();