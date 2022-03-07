let p_url=location.search.substring(1).split("&");

if(p_url[0]=='1'){
    document.body.style.background = "black";
    document.getElementById("joke").style.color = "white";
}
else{
    document.body.style.background = "white";
    document.getElementById("joke").style.color = "black";
}

let gif = document.getElementById("gif");
let joke = document.getElementById("joke");

if(p_url[1]=='1'){
    gif.hidden = false;
}
else{
    gif.hidden = true;
}

if(p_url[2]=='1'){
    joke.hidden = false;
}
else{
    joke.hidden = true;
}