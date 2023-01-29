var ul = document.querySelector ('nav ul');
var menuBtn = document.querySelector('menu-btn i');

function menuShow () {
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

var listaGenero = [
    "https://th.bing.com/th?id=OSK.946436b40b5a9f1ccfb550ff7a5f08c0&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.23ef584f319f07f52054dab6d1d27898&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.33a54cb0124f393fc7c6b672bbf3b199&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.4ed555fa54635deb71bcf00e3ce50a97&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.c803e30d6c5592c7e586963ffd1b0bed&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.c99b57809bc3264fea0440b196cfbbff&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.a19b6ce9db6ee5097cfd9ef33c2eb865&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",    
    "https://th.bing.com/th?id=OSK.9e13a88a337528fc668fbf5408ce50b2&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.728973998062135540b9ec569ab9e1e5&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.b4ff6c25b901a610965a8a9aff96687d&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.d3a9ffbf7bf0e036f18557580ba59aee&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.9f8315a0bfc85ca475c311a8074877c6&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.15b05b13177aad537ae1c8217dd42def&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th/id/OIP.K08elsesfA4o-kfm18jAiAHaK-?w=125&h=186&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2016/06/Poster-Vanilla-Sky-Melhores-romances-dos-anos-2000-202x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2016/06/filmes-de-romance-dos-anos-2000-como-perder-um-homem-em-dez-dias-206x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/blogger/_uZ_Ri-dmPT0/TA8L-pC81DI/AAAAAAAACN0/4YQ7IMe3FNg/s1600/1244852172_amorpararecordarposter01.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2016/05/Lisbela-e-o-Prisioneiro.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2016/06/Poster-Vicky-Cristina-Barcelona-Melhores-filmes-de-romance-dos-anos-2000-212x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2014/01/POSTER-500-DIAS--194x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2014/03/70-Moulin-Rouge-%E2%80%93-Amor-em-Vermelho-212x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2016/06/melhores-filmes-de-romance-dos-anos-2000-simplesmente-amor-203x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2016/06/Poster-O-Segredo-de-Brokeback-Mountain-Filmes-de-roman-ce-dos-anos-2000-201x300.jpg",
    "https://www.cinemadebuteco.com.br/wp-content/uploads/2014/03/24-Closer-%E2%80%93-Perto-Demais.jpg",
    "https://th.bing.com/th/id/OIP._JN7xYH8mw7ElSBDr2ba6QHaKk?w=127&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    "https://th.bing.com/th?id=OSK.2ab034a0590fcb677e4d5c0955b839d6&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.c04adefcdc6a92aa514eaa058f8990bf&w=94&h=140&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=18.2",
    "https://th.bing.com/th?id=OSK.9ec4141bceb01bf5f1d515d18bb81e18&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.2001951b182a7ac62e977bf87e7e8d09&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.01ac50f251f6d02de94f4ef77e644e18&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th/id/OIP.r1VPlaOebOVDvBV0rFQtEgHaKj?w=115&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    "https://th.bing.com/th?id=OSK.223dc71fbab81e8ce3b09f89af0d7d53&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.3cd6970c5001abd37448e709ee7ea07e&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.12717cde25873a9e600a565202603835&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.30bdcd1ef9e48d4a7d3ece4c87927595&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.264a9221e9b7f0cb5b35ebef1998f7eb&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.7f02ed52458f2f48018dd961227db98b&w=94&h=140&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=18.2",
    "https://th.bing.com/th?id=OSK.b467a285d9ac82aa179dae260373502e&w=94&h=140&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=18.2",
    "https://th.bing.com/th?id=OSK.2ce13cc106c6acc906e3a72c90a55aa5&w=94&h=140&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=18.2",
    "https://th.bing.com/th?id=AMMS_643930d1cb0fbb8561ad5f8dc00d2494&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=16.1",
    "https://th.bing.com/th?id=OSK.0e0337136d5cf9c548746124668e84ec&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.4070090e982ce674e6143d746745baa8&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.c858c6788134e98e3c10816bc364a6ab&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.2abd7f0ae4aa884e82c5994a4987083b&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.b1a77868a1410a9d406edffaea499d66&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.6d709b3ea779b203ebd8aa38b6ddf0f6&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.f6143b0de3a065dafc56dadd29b1414d&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM"    
]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}