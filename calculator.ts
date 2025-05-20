/*
data:
initial amount,
annual contribution,
expected return
duration
*/

type dataInvesment = {
    initialAmount: string;
    annualContribution: string;
    expectedReturn: string;
    duration: string;
}


function calculateInvesment(data:dataInvesment) { };

function printResult(result) { };

const result = calculateInvesment(...);

printResult(result);
