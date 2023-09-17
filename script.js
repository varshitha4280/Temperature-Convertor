const val = document.getElementById("input-value");
const f_degree = document.getElementById("from-temp");
const t_degree = document.getElementById("to-temp");
const sub = document.getElementById("button1");
const result=document.getElementById("result");
result.innerHTML="";

sub.addEventListener("click", () => {
     convert();
})

function convert(){
    let inputValue = val.value;
    const inp = inputValue;
    let res;
    if(f_degree.value === "Fahrenheit" && t_degree.value === "Celsius"){
        const ftoc = (inputValue -32)*(5/9);
        res =`${ftoc.toFixed(3)} &deg; C`;
    }
    else if(f_degree.value === "Kelvin" && t_degree.value === "Celsius"){
        const ktoc = (inputValue -273.15);
        res =`${ktoc.toFixed(3)} &deg; C`;
    }
    else if(f_degree.value === "Celsius" && t_degree.value === "Fahrenheit"){
        const ctof = (inputValue*(9/5))+32;
        res =`${ctof.toFixed(3)} &deg; F`;
    }
    else if(f_degree.value === "Kelvin" && t_degree.value === "Fahrenheit"){
        const ktof = (inputValue -273.15)*(9/5)+32;
        res =`${ktof.toFixed(3)} &deg; F`;
    }
    else if(f_degree.value === "Fahrenheit" && t_degree.value === "Kelvin"){
        const ftok = (inputValue -32)*(5/9)+273.15;
        res =`${ftok.toFixed(3)} &deg; K`;
    }
    else if(f_degree.value === "Celsius" && t_degree.value === "Kelvin"){
        let CtoK = (inputValue -273.15)+546.3;
        res =`${CtoK.toFixed(3)} &deg; K`;
    }
    else{
        res ="";
    }

    result.innerHTML = "RESULT: " + res;

}