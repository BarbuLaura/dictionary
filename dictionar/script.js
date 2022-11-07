var myStringArray = ['dictionary'];
let i = 1;
let word = 0;


function addWords(){
    myStringArray.push(document.getElementById("myDictionary").value);
    ++i;
}

function verify(){
    let exists = 0;
    var x = document.getElementById("theOne").value;
    for(let j = 1; j <= i; ++j){
        if(myStringArray[j] === x){
            document.getElementById("checkTheWord").innerHTML = "found";
            exists = 1;
        }
    }
    if(exists === 0){
        document.getElementById("checkTheWord").innerHTML = "not found"; 
    }
    
}