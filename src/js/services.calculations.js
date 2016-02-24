class CalculationService {

    constructor() {

    }

    calculateDirectRevenue(amount) {
        var directRevenue = parseInt(amount, 10) * 5;
        return directRevenue;
    }

    calculatePurchase(amount) {
        var purchases = parseInt(amount, 10) / 1000;
        return purchases;
    }

    calculateCases(budget, purchases) {
        var cases = parseInt(budget, 10) / parseInt(purchases, 10) / 10;
        console.log('cases', cases);
        return cases;
    }
}

export default CalculationService;
