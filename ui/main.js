

var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create a request.
    var request=new XMLHttpRequest();
   
    
    //get the response and store it in a varible 
    request.onreadystatechange = function () {
       
        if(request.readyState===XMLHttpRequest.DONE){
              alert("hi asdfasdf");
            if(request.status===200){
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request.
    request.open('GET','http://pmohanraj108.imad.hasura.io/counter',true);
    request.send(null);
};
/*alert("hi ");

var button =document.getElementById('counter');
var counter=0;
button.onclick = function () {
    alert("hi hi hi hih hih hihhihihih ");
    counter = counter + 1 ;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
*/