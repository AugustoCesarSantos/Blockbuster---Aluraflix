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
 "https://th.bing.com/th?id=OSK.e60fd2afdf032037b251dcbd35782379&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.3283e4be12d15c8315d74dd880a3b0c8&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.fbc28dbf4d75d91f9454645362b246fc&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.2001951b182a7ac62e977bf87e7e8d09&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.55f0ed16445e0af4c1fe446efb5d016f&w=180&h=270&c=7&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.42661d463491534ca642aaa053b03f55&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.7c50b5a026103bd355cca4c68c83a379&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.f97d296db4bc3bb05f609f630663afe0&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.6aa2dcab3a3ef34ba806b1b642bbdc00&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.a4fa192f33af5d3e25cc313c1b66db5f&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.52d39b06b2584a575118b6e6a19d5c28&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.4137729816ae62ed52418665830af4b5&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.02c8e7111bd9b0d74ec75022a158f6fb&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.d3a9ffbf7bf0e036f18557580ba59aee&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.9d4d1d0073ce6629066b205d9449d4e1&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.bc24a899185ab082fdd2cc1ee11f7b9d&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.74667b81b689464825061c8b22985f02&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.2e6138637f6fbc71785b8d8fa9856ddf&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.92f3e45bb39994f847781b6d03a4d808&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.a71b92870520c37fd3a8d612ba5c9f82&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.0007cba940d959d6c5d5cdae8d18b8c6&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.2561bb8e5fbd048092600f1e546db638&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.6b39fc414136939d7f46287cd8419647&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.a3f01cb581e57d4dc1fad13afe89a061&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.a797fa9cbc2088816f3ceb944d097dc9&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.75bc86c5a247a953036b245d8a3a1abc&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.5622ccfae48e7aba9ca92b8a208728dc&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.a1ed1c8833893e3a18596c56b5f5a1a2&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.8faa2cac7a40304ed633caa33b67bdcd&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.4726975a349fb1d8a9b14c3857375177&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th/id/R.4b10e77ade9fced97748d76f306e1cea?rik=EBZvvGFTOwLXGQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-o1P1wBaucC4%2fUGURDxZ45WI%2fAAAAAAAAAkg%2f3OkEH29WmPE%2fs1600%2f01.jpg&ehk=310%2bPbZbRGCx%2fOkBVOFMBEopdaq85pm3NYGONEt3EKw%3d&risl=&pid=ImgRaw&r=0",
 "https://th.bing.com/th?id=OSK.5272c73c311d6f982df8aa35bfb48061&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.bf88299add44f5bc18bea0c0b529c65b&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.40da3483d796bcca78f7dbfef3e1345a&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.c9fd10095c94da4dff8e659d10a528e1&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.b3a64077192f1e0e577e07d7c9a22ed6&w=124&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.5d106167015d54b4f272b97d7e4fbd58&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.3bc200d2d82b080cc30c376e31606598&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=OSK.b12c3f03ee49e7205a406040d6bbb968&w=116&h=168&c=7&o=6&dpr=1.2&pid=SANGAM",
 "https://th.bing.com/th?id=ODL.24851d0486154ee81e1dfa17e2c48295&w=135&h=200&c=10&rs=1&qlt=90&o=6&dpr=1.2&pid=13.1",


]

for (var i=0; i<listaGenero.length;i++){
    document.write("<img src=" + listaGenero [i] + ">")
}