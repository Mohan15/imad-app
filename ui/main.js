console.log('Loaded!');

//To Change the elemnt as "My New Page"


//To Move the Image
var img=document.getElementById('madi');

var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+1;
img.style.marginLeft=marginLeft + 'px';

}

img.onclick = function(){
    var interval=setInterval(moveright,50);
};

/*var button = document.getElementById('counter');

button.onClick = function () {
    //request to counter endpoint
    var request=new XMLHttpRequest();
    
    
    //get the response and store it in a varible 
    request.onreadystatechange =function(){
        if(request.readystate===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://pmohanraj108.imad.hasura.io/counter',true);
    request.send(null);
};*/