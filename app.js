function send() {
    let text = document.getElementById("text").value;
    let messages = document.getElementById("messages");

    if (!text) return;

    // user
    let userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.innerText = text;
    messages.appendChild(userMsg);

    // fake AI ответ
    let aiMsg = document.createElement("div");
    aiMsg.className = "msg ai";

    let replies = [
        "Я скучала...",
        "Обними меня 🥺",
        "Ты мой любимый 💕",
        "Давай поговорим..."
    ];

    aiMsg.innerText = replies[Math.floor(Math.random()*replies.length)];
    messages.appendChild(aiMsg);

    document.getElementById("text").value = "";
}
