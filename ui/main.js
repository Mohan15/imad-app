console.log('Loaded!');

//To Change the elemnt as "My New Page"
var element=document.getElementById('mainpage');
element.innerHTML="My New Page";

//To Move the Image
var img=document.getElementById('madi');
img.onclick = function(){
    img.style.marginRight='100px';
};