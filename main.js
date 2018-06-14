var bigImg = document.querySelector('#bigImg');
var bigImgUrl = bigImg.getAttribute('src');
var img = document.querySelector('#img');
var circle = document.querySelector('#circle');


window.addEventListener('mousemove',function(e) {
    // la position de la loupe change en fonction des coordonnées du curseur
    circle.style.left= e.x + 'px';
    circle.style.top= e.y + 'px';

    var imgScale = [e.x/img.width, e.y/img.height];

    //grande image en background du cercle
    circle.style.backgroundImage = 'url('+bigImgUrl+')';

    //position du background qui change en fonction du ratio
    circle.style.backgroundPositionX = imgScale[0]*100 + '%';
    circle.style.backgroundPositionY = imgScale[1]*100 + '%';
});
