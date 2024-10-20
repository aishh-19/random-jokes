let mainJoke = document.getElementById("main-joke");
let btn = document.getElementById("btn");
let Url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke =()=>{
    fetch(Url)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
mainJoke.innerText = data.joke;
    })

}
btn.addEventListener("click", getJoke);
