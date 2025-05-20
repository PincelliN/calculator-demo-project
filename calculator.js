"use strict";
/*
data:
initial amount,
annual contribution,
expected return
duration
*/
function calculateInvesment(data) {
  const { duration, initialAmount, annualContribution, expectedReturn } = data;
  if (duration < 0) {
    return "Duretion amount must be at least zero";
  }
  if (initialAmount < 1) {
    return "Initial Amount must be at least zero";
  }
  if (expectedReturn < 0) {
    return "Total Interest Earned must be at least zero";
  }
  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;
  const annualResult = [];
  for (let i = 0; i < duration; i++) {
    total *= 1 + expectedReturn;
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions += annualContribution;
    total += annualContribution;
    annualResult.push({
      years: `Years: ${i + 1} `,
      totalContributions,
      totalInterestEarned,
      totalAmount: total,
    });
  }
  return annualResult;
}
function printResult(result) {
  if (typeof result === "string") {
    console.log(result);
    return;
  }
  for (const yearEndResult of result) {
    console.log(yearEndResult.years);
    console.log(`TotalAmount: ${yearEndResult.totalAmount.toFixed(2)}`);
    console.log(
      `TotalContributions: ${yearEndResult.totalContributions.toFixed(2)}`
    );
    console.log(
      `TotalInterestEarned: ${yearEndResult.totalInterestEarned.toFixed(2)}`
    );
    console.log("-----------------------");
  }
}
const invesmentData = {
  duration: 10,
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
};
const result = calculateInvesment(invesmentData);
printResult(result);
