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
    "https://th.bing.com/th?id=ODL.9771a80a47cb98380407628b26b4f10a&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://th.bing.com/th?id=OSK.c6be9636774449e0a7689b378436470b&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.a8c2f8643f494e6e74f69217699292f1&w=80&h=118&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.829462e8afb69789bfc48bede8851294&w=80&h=118&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.afbe550f1de48aa299441d9e24ddb6ff&w=80&h=118&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/00/25/20240355.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/71/71/20109801.jpg",
    "https://th.bing.com/th?id=OSK.5d85b1464f53d83a6a5b46ebda36310c&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/99/98/19870962.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/32/45/20091581.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/88/11/19962495.jpg",
    "https://th.bing.com/th?id=OSK.75d208b893ca63526ec8f71664bba1a8&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.8459f31cec005f332231fc98ae5dcad8&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.ff18b65912bc3c2cfd85b433e75de5a9&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.5230a9eb860c63b340ae8d268683ee38&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.97067a940963597a137c9defa6e869da&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.9202c848708036a794df71c8e6d2e997&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.ec9a35af82dddeae2e6461375ed31d22&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM0",
    "https://th.bing.com/th?id=OSK.cab2b0cbc7a71ba883381d5350055f1a&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=ODL.420307bbe1faa70bc96680aabdf1c693&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/26/66/19873718.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/31/66/19874242.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/25/67/19873613.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/23/97/19873441.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/31/05/20139182.jpg",
    "https://th.bing.com/th?id=OSK.aebbd04b066c65770ec3bf15918d5df6&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img2.acsta.net/c_310_420/pictures/210/106/21010605_20130606000334824.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/79/23/02/20073059.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/40/36/20143627.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/86/99/50/19870912.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/63/51/33/18693370.jpg",   
    "https://th.bing.com/th?id=ODL.f125e2dc4eda6dc89d2dfde557667749&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/21/20/19873157.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/22/71/19873310.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/29/99/19874070.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/58/12/20207108.jpg",
    "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/86/72/19962354.jpg",
    "https://th.bing.com/th?id=OSK.31a8e2d83cb80d99ae0d227bbe549882&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/71/74/20109813.jpg",
    "https://th.bing.com/th?id=OSK.c38fa3434d7da72fee4d51f41f934b86&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=ODL.18038beb53d3de6cdfc3ad6c1a109fc2&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/03/20224680.jpg",
    "https://th.bing.com/th?id=OSK.62bad64f240914edf6dfb4f14d1a0212&w=116&h=168&c=7&o=6&oif=webp&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.190a85006ae22fab1921dbdc170ac1cd&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
    "https://th.bing.com/th?id=OSK.639677adc1db014679459e0bdf5b9fc3&w=94&h=140&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=18.2",
    "https://th.bing.com/th?id=OSK.8e0668d38417cde36f464d95439d3632&w=94&h=140&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=18.2",
    "https://br.web.img3.acsta.net/c_310_420/pictures/14/05/23/21/44/398276.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/74/88/20111373.jpg",
    "https://th.bing.com/th?id=ODL.2acba0315799da6605444cbc52db18a8&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://th.bing.com/th?id=AMMS_c01bb75832f15b5e533b4446f9851912&w=75&h=110&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=16.1",
    "https://th.bing.com/th?id=ODL.59f6d63c10c6c1249ca217fbda9bd110&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
    "https://br.web.img2.acsta.net/c_310_420/pictures/210/583/21058393_20131118001224471.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/17/08/25/11/58/463146.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/14/06/20/23/27/478475.jpg",
    "https://th.bing.com/th?id=ODL.a292353098bf054a9ff313361bdc020a&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1"   

]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}