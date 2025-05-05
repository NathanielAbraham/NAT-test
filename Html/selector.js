function generateQuote() {
    const quotes = [
      "Believe you can and you're halfway there. – Theodore Roosevelt",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
      "Do what you can, with what you have, where you are. – Theodore Roosevelt",
      "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
      "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("number").textContent = randomQuote;
  }