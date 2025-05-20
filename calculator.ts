/*
data:
initial amount,
annual contribution,
expected return
duration
*/

type DataInvesment = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}


type InvesmentResult = {
    years: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

function calculateInvesment(data: DataInvesment): InvesmentResult[] | string { 
    
    const { duration, initialAmount, annualContribution, expectedReturn } = data;

    if (duration < 0) {
        return 'Duretion amount must be at least zero';
    }
    
    if (initialAmount < 1) {
        return 'Initial Amount must be at least zero';
    }

    if (expectedReturn < 0) {
        return 'Total Interest Earned must be at least zero';
    }
    
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResult: InvesmentResult[] = [];

    for (let i = 0; i < duration; i++){
        total *= (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;

        annualResult.push({
            years: `Years: ${i + 1} `,
            totalContributions,
            totalInterestEarned,
            totalAmount=total
        })
    }

    return annualResult;
};

function printResult(result) { };

const result = calculateInvesment(...);

printResult(result);
