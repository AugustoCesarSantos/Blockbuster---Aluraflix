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
  "https://th.bing.com/th?id=ODL.05853b587288b5be9ef9a8bd296f4289&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",
  "https://www.bing.com/th?id=OIP.9L38obx25ClU3oWqPQKy-gHaLH&w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
  "https://th.bing.com/th/id/OIP.wwMIwTuOePPyk2eLn8xUlAHaLH?pid=ImgDet&rs=1",
  "https://th.bing.com/th?id=OSK.dbc424b017cab0d81dd7f29ede13c249&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.48bf5abbff8fdbeb18a4bd83aaf4882d&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.987313738a395d151bf4931ceaa743b8&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.57e6da2d4719962657cbcb192108ac67&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.18a027df7ec9b3a70a7e4d9472f3923f&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.57c7fffc66ee4d46016949eb0a282f34&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.66368aaf2d9f760d043a902898c842e7&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.70634a5938d53236f149e9e09babf75f&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.b26390b2c96074c93fb80ed32e83f7c2&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.bc217b8c90380a42b2cab5646993c6b4&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.3b88bbcbdf7b093d2953ea73a5722be9&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.9080541fbd513bb32952c96e85eed1ee&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.abaf307c8e9cb2489f2ee4852ddf4cb0&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.b8b963914e03238ba722b9f9fe5f29bc&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.b60c2d24b03c4cdb858228fa9eeb8bd0&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.5cddde36d4c72ec8159b0c0be7797794&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.4c62d901c9b575e264d59c028b251e34&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=AMMS_fb5d8c0fe311481f731e55e0f858d688&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.2&pid=16.1",
  "https://th.bing.com/th/id/OIP.ewC0EDgUPeaGNhbmYOkXnQHaLH?pid=ImgDet&rs=1",
  "https://th.bing.com/th?id=OSK.d386d50b7aad3e264d11935ec5fe3044&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://alchetron.com/cdn/The-Others-2001-film-images-c2c21b8c-4b20-457f-b1d7-ec053116d8e.jpg",
  "https://th.bing.com/th/id/OIP.nsKi3SJ39a-SAvhPxL5yjQHaK-?pid=ImgDet&rs=1",
  "https://picfiles.alphacoders.com/152/152423.jpg",
  "https://media.movieassets.com/static/images/items/movies/posters/d9e7dc53d177c127d4cff89520e7e567.jpg",
  "https://www.dvdsreleasedates.com/posters/800/S/Saw-movie-poster.jpg",
  "https://th.bing.com/th?id=OSK.995290217b13f9a1e04a23e1df2592fb&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.63a2083d841a96079b9218fe006dca9b&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.5c8288f1468f9f89c67194bf954367ea&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.e6bbbca0bdacae2b6682058fa767ff36&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.a34ad27eb19018d53bf307a1e6414cde&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.be725d6619efc18997b072f85b0cce2b&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.8b427243e310b3599e130ec45877c3b0&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.6ac972576b12604b599c52930ed160ec&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.551abbe0b262fb043fae53ff766be628&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.e1476cb4aeab6b56d8a12f0ee8fc2b65&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.a651d784b994e7409b5872e654167fe5&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.097cff0fe24acb3cb699d00ee4f53c26&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.c70c04e8c80778b97ce610206bc08642&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.0d607a6c2c28e287e8cf237597bcd086&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.2184d99cd674b766c748257b96e68fa9&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th?id=OSK.ca340a6be23b2ba4ac253365d48ddcae&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
  "https://th.bing.com/th/id/R.50b829fb97d4a4e1d1467f052f4b7db3?rik=Qcjnb%2bZUbBJF4w&pid=ImgRaw&r=0",

]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}