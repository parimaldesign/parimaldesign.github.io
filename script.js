// Logo Rotation
// window.onscroll = function () {
//     scrollRotate();
// };

// function scrollRotate() {
//     let image = document.getElementById("ring");
//     image.style.transform = "rotate(" + window.pageYOffset/50 + "deg)";
// }

document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
      setTimeout(function(){
        document.getElementById('interactive');
        document.getElementById('loader').style.display="none";
      },700);
    }
}