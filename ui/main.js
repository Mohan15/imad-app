console.log('Loaded!');

//To Change the elemnt as "My New Page"
var element=document.getElementById('mainpage');
element.innerHTML="My New Page";

//To Move the Image
var img=document.getElementById('madi');

var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+5;
img.style.marginLeft=marginLeft+'px';

}

img.onclick = function(){
    var interval=setInterval(moveright,50);
};