/*console.log('Loaded!');

//To Change the elemnt as "My New Page"
var element=document.getElementById('mainpage');
element.innerHTML="My New Page";

//To Move the Image
var img=document.getElementById('madi');

var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+1;
img.style.marginLeft=marginLeft + 'px';

}

img.onclick = function(){
    var interval=setInterval(moveright,50);
};*/

var button = document.getElementById('counter');
var counter = 1;
button.onClick = function(){
    //request to counter endpoint
    
    //get the response and store it in a varible 
    
    //render the varible with span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};