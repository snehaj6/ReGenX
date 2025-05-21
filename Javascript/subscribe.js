// subscribe.js
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let email = document.getElementById("email").value;
  
    fetch("http://localhost:3001/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}`,
    })
      .then((response) => response.text())
      .then((message) => {
        document.getElementById("message").innerText = message;
      })
      .catch((error) => {
        document.getElementById("message").innerText = "Subscription failed!";
      });
  });
  