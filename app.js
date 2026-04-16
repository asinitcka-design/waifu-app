let waifu = localStorage.getItem("waifu") || "Вайфу"
let img = localStorage.getItem("img")

// поставить фон
if (document.getElementById("waifu")) {
    document.getElementById("waifu").style.backgroundImage = `url(${img})`
}

// выбор
function selectGirl(name, image) {
    localStorage.setItem("waifu", name)
    localStorage.setItem("img", image)
    window.location.href = "chat.html"
}

// добавить сообщение
function addMessage(text, cls) {
    let div = document.createElement("div")
    div.className = "msg " + cls
    div.innerText = text
    document.getElementById("chat").appendChild(div)
}

// отправка
function send() {
    let input = document.getElementById("text")
    let text = input.value
    if (!text) return

    addMessage(text, "user")

    setTimeout(() => {
        addMessage(waifu + ": ммм... интересно 😏", "ai")
    }, 600)

    input.value = ""
}
