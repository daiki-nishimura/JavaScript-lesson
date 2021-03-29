var header = document.getElementById('header');
var degree = 0;
function rotateHeader() {
    degree = degree + 6;
    degree = degree % 360;
    //角度が、0 以上かつ 90 より小さい、 または、 270 以上かつ 360 より小さい
    if ((0 <= degree && degree <90) || (270 <= degree && degree < 360)) {
        header.className = 'face';
    } else {
        header.className = 'back';
    }
    header.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHeader, 20);

