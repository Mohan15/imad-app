

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
alert("hi ");

var button =document.getElementById('counter');
button.onClick = function () {
    
    counter = counter + 1 ;
    var span = document.getElementById();
    span.innerHTML = counter.toString();
};
alert("hi hi hi hih hih hihhihihih ");