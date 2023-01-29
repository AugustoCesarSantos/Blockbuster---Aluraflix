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
   
    "https://th.bing.com/th?id=OSK.be8492f7db38da953fcd800d34dd7a95&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.6be72d1ac4d63f6e2c86b3c1cc80a2d7&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.5234539fd6e4e259c92a986649ff1238&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.3e559de620b4ae467b0f3c37ed6916f9&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.ac68e539ff55fb299e682b797b3c63e4&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.8a062ad4dce8d73ac5957e2d1acd8a4f&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.c9ba2b61b1ddad6918f3a5f3b6989a48&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.bfcdfee6790089340cb99e6f672084b0&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.41ba6a80887104bcb6740335d7964c9a&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.57dfd598c0a924bf71325227fe704eac&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.82cb1229aab1b220e750f9acadc4c833&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.a96324ec789479f9aedd2e268d4e590e&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.e1f8f5f9357003ec1f1d82a21f66bdf8&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=ODL.a494384eae8c1c9ac1ec481a89a7c9c0&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://th.bing.com/th/id/R.6a99b4bf19111c938892d4cf9daae9bf?rik=1qlVL3fAfdAFZw&riu=http%3a%2f%2fcontent6.flixster.com%2fmovie%2f11%2f17%2f19%2f11171948_800.jpg&ehk=vFUsddIDftko98eO0imtlXr4P%2fNPB35hTlbRdbnbqIM%3d&risl=&pid=ImgRaw&r=0",
    "https://m.media-amazon.com/images/M/MV5BMTcwODlmZDktNWRkOC00NTFlLTkyMjQtYWUxMzZkNDE4MGVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    "https://th.bing.com/th/id/R.8fbb482821f407c2053953772af48f68?rik=bQQ%2fCUtJe2tUsg&riu=http%3a%2f%2fkearsleyeclipse.com%2fwp-content%2fuploads%2f2014%2f12%2fhow-the-grinch-stole-christmas.jpg&ehk=3DmO8eMkF3EtSil97jAhN0qQ5Yy53FElADxnJw19XdQ%3d&risl=&pid=ImgRaw&r=0",
    "https://upload.wikimedia.org/wikipedia/en/8/84/Ace_ventura_pet_detective.jpg",
    "https://th.bing.com/th/id/OIP.FvccfVC8hAn2t7vha0fO9QHaK9?w=184&h=273&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    "https://th.bing.com/th/id/OIP.lXUfLoeV7xA_irliVpbVvAHaLH?pid=ImgDet&w=500&h=750&rs=1",
    "https://th.bing.com/th/id/R.b893fa63e7c77614aa2b83c6fff72944?rik=lAEN7KggV%2bB3rg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.c315e8c01f7551ad04bbc19db90054c5?rik=YQpXT8jB1Oi1KA&riu=http%3a%2f%2fi0.sinaimg.cn%2fent%2fm%2ff%2f2013-05-30%2fU8385P28T3D3932603F329DT20130530141415.jpg&ehk=MKABDmlqoSiJUF5W1FTMewaAByxP9Z79R8kgGpbcIEw%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.8dce19e013c7e42e15f9220d843a08f8?rik=vAnWZ0zzmeQiQA&pid=ImgRaw&r=0",
    "https://th.bing.com/th?id=OSK.59abc3b806587e5b3c4100f60e4c946d&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.a007d05e341ce1208b87c78ceb311458&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://www.bing.com/th?id=OIP.fVFasESHtfLEbzgrt70xLgAAAA&w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OSK.86a95ceeffa18bc1283170699a77261c&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.e444372457e0bf6cf5608f49989cfa21&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.311ece79f6d0a8c0eaf4753df42c87b7&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.330c8ec06e9672d1a9ef674c3a63aeba&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.87db005ad71e107f929887c92d672c5a&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.4fff91f4ee35022e97092205692db041&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.bf6b8d01ff9792bb66d94c9f40d2d9a9&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://www.bing.com/th?id=OIP.85Qy8hTd52BSKrNTcKEb1gAAAA&w=141&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"



]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}