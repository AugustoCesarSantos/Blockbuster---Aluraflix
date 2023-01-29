var ul = document.querySelector ('nav ul');
var menuBtn = document.querySelector('menu-btn i');

function menuShow () {
    if (ul.classList.contains ('open')){
        ul.classList.remove ('open');
    }else{
        ul.classList.add ('open');
    }
}

/*
var listaGenero = [
    "https://cdn-icons-png.flaticon.com/128/8326/8326264.png",
    "https://cdn-icons-png.flaticon.com/128/8326/8326256.png",
    "https://cdn-icons-png.flaticon.com/128/4114/4114752.png",
    "https://cdn-icons-png.flaticon.com/128/8326/8326245.png",
    "https://cdn-icons-png.flaticon.com/128/4171/4171216.png",
    "https://cdn-icons-png.flaticon.com/128/2184/2184586.png"    

]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}*/