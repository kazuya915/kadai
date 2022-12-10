const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
// const result = document.getElementById('result');

// else if (concatText.slice( -1 ) === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" && input === "+" || input === "-" || input === "*" || input === "/"){
//     concatText.slice(0,-1);
//     concatText += input;
// } 

let opera = ["+","-","*","/"];
let concatText = "";
function clickBtn(event) {

    const input = event.target.textContent ;
    
  
       
        if  (input === '='){
            concatText = eval(concatText);
        } else if(input === 'C') {
            concatText = '0';
        } 

        else if(opera.includes(concatText.slice(-1)) && (input === "+" || input === "-" || input === "*" || input === "/")){
            concatText = concatText.substring(0, concatText.length - 1);
        concatText += input;

        }
        
        else if(result.textContent == '0'){
             
                concatText = input;
            } 
            else {
            concatText += input;
            console.log(concatText);
            }

        result.textContent = concatText; 
    

        }




buttons.forEach(button => button.addEventListener('click',clickBtn));