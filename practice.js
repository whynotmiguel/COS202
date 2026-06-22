class PaymentProcessor {
  process(amount) {
    return `Processing a generic payment of $${amount}.`;
  }
}

// Subclass 1 overrides process()
class CreditCardPayment extends PaymentProcessor {
  process(amount) {
    return `Processing Credit Card payment of $${amount} (applying a 2% gateway fee).`;
  }
}

// Subclass 2 overrides process()
class CryptoPayment extends PaymentProcessor {
  process(amount) {
    return `Processing Bitcoin payment of $${amount} (waiting for blockchain confirmation).`;
  }
}

// A function can interact with any processor polymorphically
function executePayment(processorInstance, amount) {
  console.log(processorInstance.process(amount));
}

executePayment(new CreditCardPayment(), 100); // Outputs Credit Card logic
executePayment(new CryptoPayment(), 100);     // Outputs Crypto logic