function amountFor(performance, play) {
  let amount = 0;

  switch (play.type) {
    case "tragedy":
      amount = 40000;
      if (performance.audience > 30) {
        amount += 1000 * (performance.audience - 30);
      }
      break;    
    
    case "comedy":
      amount = 30000;  
      if (performance.audience > 20) {
        amount += 10000 + 500 * (performance.audience - 20)
      }
      amount += 300 * performance.audience;
      break;
      
    default:
      throw new Error(`Unknown type: ${play.type}`);
  }

  return amount;
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playId];

    let thisAmount = amountFor(perf, play);

    // soma créditos por volume
    volumeCredits += Math.max(perf.audience - 30, 0);
    // soma um crédito extra para cada dez espectadores de comédia
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // exibe a linha para esta requisição
    result += `${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${format(totalAmount/100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  
  return result;
}

function main() {
  const plays = require("./data/plays.json");
  const invoices = require("./data/invoices.json");
  
  for (const i of invoices) {
    console.log(statement(i, plays));
  }
}

main();