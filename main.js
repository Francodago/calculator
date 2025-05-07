const buttonValues =["AC", "+/-", "%","÷",
    "7", "8", "9", "x",
    "4", "5", "6","-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols =["÷", "x", "-", "+", "="];
const topSymbols =["AC", "+/-", "%"];

const display=document.querySelector("#display");

//A+B, A*B, A-B, A/B
let a=0;
let operator=null;
let b=null;

let clearAll=()=>{
     a=0;
     operator=null;
     b=null;
};

for(let i=0; i<buttonValues.length;i++){
    //create the button tag for each symbol
    let value =buttonValues[i];
    let button = document.createElement('button');
    button.innerText=value;
    //styling button colors
    if(value==="0"){
        button.style.width="200px";
        button.style.gridColumn="span 2";
    }
    if(rightSymbols.includes(value)){
        button.style.backgroundColor="#FF9500";
    }else if(topSymbols.includes(value)){
button.style.backgroundColor="#D4D4D2";
button.style.color="#1c1c1c";
    }

button.addEventListener("click",()=>{
if(rightSymbols.includes(value)){
if(value==="="){
if(a!==null){
    b=display.value;
    let numA =Number(a);
    let numB=Number(b);
    if(operator==="÷"){
        display.value=numA/numB;
    }else if(operator==="x"){
display.value=numA*numB;
    }else if(operator==="-"){
        display.value=numA-numB; 
    }else if(operator==="+"){
        display.value=numA+numB;
    }
    clearAll();

}
}else{
    operator=value;
    a=display.value;
    display.value="";
}
}else if(topSymbols.includes(value)){
if(value==="AC"){
    clearAll();
    display.value="";
}else if(value==="+/-"){
if(display.value!==""&& display.value!=="0"){
if(display.value[0]==="-"){//remove -
display.value=display.value.slice(1);
}else{
    display.value="-"+display.value;
}
}
}else if(value==="%"){
display.value=Number(display.value)/100;
}
}else{//numbers or .
if(value==="."){
if(display.value!==""&&!display.value.includes(value)){
display.value+=value;
}
}else if(display.value==="0"){
display.value=value;
}else{
    display.value+=value;
}
}

});

    //add buttons to the buttons div
    document.querySelector("#buttons").appendChild(button);

}