// Junaid Khan Developer 
function add(value){
    document.getElementById("result").value+=value;
}
function calculateResult(){
    let result= eval(document.getElementById("result").value);
    document.getElementById("result").value= result;
}

function clearResult(){
    document.getElementById("result").value="";
}

// Junaid Khan Developer 