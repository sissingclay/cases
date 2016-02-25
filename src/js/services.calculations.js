class CalculationService {

    constructor() {

    }

    calculateDirectRevenue(amount, cases) {
        let amountInt               = parseInt(amount, 10),
            directRevenue           = amountInt,
            calculatePercentage     = (100/cases),
            profit;

        profit        = Math.ceil((directRevenue/calculatePercentage)*2.3);
        directRevenue = amountInt + profit;

        return directRevenue;
    }

    calculatePurchasesToMake(amount) {
        let purchases               = parseInt(amount, 10),
            calculatePercentage     = (100/0.045);

        purchases = Math.ceil(purchases/calculatePercentage);

        return purchases;
    }

    calculateCasesToWin(budget, purchases) {
        let cases                   = parseInt(budget, 10) + parseInt(purchases, 10),
            calculatePercentage     = (100/.0003);

        cases = Math.ceil(cases/calculatePercentage);

        return cases;
    }

    calculateIndirectRevenue(data) {
        let amount = parseInt(Math.ceil(data + (data/0.126)), 10);
        return amount;
    }

    calculatePurchaseCost() {

    }

    multiply(value, multiple) {
        let amount = parseInt((value * multiple), 10);
        return amount;
    }
}

export default CalculationService;
