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


function calculateInvesment(data:DataInvesment) { };

function printResult(result) { };

const result = calculateInvesment(...);

printResult(result);
