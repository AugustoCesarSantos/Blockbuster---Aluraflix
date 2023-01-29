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
    "https://th.bing.com/th?id=OSK.3c5abc8054422fce071679c8927b4c01&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.45447841b49b620334006987f563c193&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.8438b25e669001b534a41efd853d3026&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.70ce0109920630be0673362660433f2a&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.b09a4418374300be90c3c49b9c17c6db&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.107f9face4d1319add4d151edb25f8ef&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.852c85640012b65c4eeb1f0968b5bdb7&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.461e3e7f7a03bf4ffa052bb055d9a02a&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.137ad85e4026c978a3dff34a824546da&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.d6111bc74c162b2b039cbcd05b4b3176&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.fbd1c38353bc8edc1f6d79bdd406d7bc&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.8784d2a97227c0d95550878695f7225a&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.d3c490416846369c9bf048aa9ee706a3&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.95471975a4f4bba408fd4faf8210b7da&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.254a062a7d3911e20f613dbc17c200f0&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.cb27791826a834377cfa8cf8f1e920e9&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.63081b012a6a39093741a5bf8de1891b&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.483f5f36f323d6c203cca9ee73e23813&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.5bf7fb4c2e2844c1b176012d148cb74c&w=80&h=118&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.a346e9495e0779d9eeaeeef452ad5d55&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.985306415cb078ea01cd9558e51f1bf6&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.13f952f8572b7cd45cd7604e20866b68&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.993ff03df5a4676ab6188b701ae2148a&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.5c0a51adf8f8a666339ea85b45160fec&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",    
    "https://th.bing.com/th?id=OSK.9a727e99ad15458816a615a9f6a3ca4c&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.df757cb9d0fcc4041cf2f4d3b808e38b&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.4fd5e1f1f66d669a53e0e0de2500b068&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/19/75/19873004.jpg",
    "https://th.bing.com/th?id=OSK.e95b53e478c487710ff3e27ef14d1878&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.01ba3b12b13dbb2a2b8e1fd5fbd10660&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.0e528d9d84cc7cca9174858f9afa3bf7&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/22/38/19873277.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/14/02/06/15/11/493568.jpg",
    "https://th.bing.com/th?id=OSK.f5c25506fd945264c5dc16cda01c58bc&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.84db9d60e80b84d44a1aafc52362c6fd&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.6ee6d62761cb2edab270c9827c924540&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/95/09/19870442.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/43/26/20096298.jpg",
    "https://th.bing.com/th?id=OSK.f100cd1da70992d087de999b4f51132c&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/69/66/20108900.jpg",
    "https://th.bing.com/th?id=OSK.51e03adaa8f7c783aa25bf146be608ad&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.85e7b1e79efe0ec5e3e01a362e8d6ef6&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.a80a6b9e27bbd0229bd2cb255091cd74&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.efe80ce73cf7c9c9f3e5c2bd94551da9&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img2.acsta.net/c_310_420/pictures/bzp/01/29007.jpg",
    "https://th.bing.com/th?id=OSK.8cd8aebdc09d2bc7d76ca39fba572f17&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.f3249457f894d5ff7d2cde577fc93e81&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.027ecafd590033ce84fdc20cf2ac3b3e&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/46/19870801.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/48/24/20122126.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/79/23/02/20073059.jpg",
    "https://th.bing.com/th?id=OSK.f808d46c06e1d6eafe1a28ca69dae495&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=ODL.8082cdfdb6574592c85b4c9292e508ee&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://br.web.img3.acsta.net/c_310_420/pictures/bzp/03/28602.jpg",
    "https://th.bing.com/th?id=OSK.ea8015d838575fce14d06d707353b2a3&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.2d7b26a4031c1448b6d243214e9f30b7&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.719642f8343e8ec793b2360672d580ac&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/08/56/20128632.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/86/70/19962352.jpg",
    "https://th.bing.com/th?id=OSK.d867d4a7ef1f69d5deb133252ac33b31&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.fad92075d8b02c438bfc3cad916eb19e&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/15/41/19872564.jpg",
    "https://www.bing.com/th?id=OIP.KjMMQA9UATva3G9pcQ77HAHaLH&w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/99/08/19870866.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/35/03/20141082.jpg",
]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}