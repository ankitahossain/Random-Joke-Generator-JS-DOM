const random_joke = document.querySelector(".random_joke")
const randomjoke_btn = document.querySelector(".randomjoke_btn")

// joke API
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getjoke = () => {
    random_joke.classList.remove("fade");
    fetch(url).then(data => data.json()).then(item => {
        random_joke.textContent = `${item.joke}`
        random_joke.classList.add("fade");
    })


}

randomjoke_btn.addEventListener("click", getjoke);
getjoke();