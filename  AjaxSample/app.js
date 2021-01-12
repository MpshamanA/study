let imageList = [
    {
        "path":"img/img01.jpg",
        "name":"sansaisan",
        "caption":"こっちは貫禄ありすぎ"
    },
    {
        "path":"img/img02.jpg",
        "name":"yukky_13dream",
        "caption":"年明け富士山"
    },
    {
        "path":"img/img03.jpg",
        "name":"maako",
        "caption":"空と大地の境界線って、どのあたり？"
    }
];

let img;
let caption;
let div;

for (let i = 0; i < imageList.length; i++) {

img = document.createElement('img');
img.setAttribute('src',imageList[i].path);

caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + imageList[i].caption + '<span>' + imageList[i].name + '</span></p>';

div = document.createElement('div');
div.className = 'photo';
div.appendChild(img);
div.appendChild(caption);

document.getElementById('img_unit').appendChild(div);

}