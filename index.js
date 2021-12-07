let screen = document.getElementById('screen'); // taking id screen
buttons = document.querySelectorAll('button'); // taking id button
let screenValue = ''; // string  is a screen value

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerHTML;
        console.log('Button text is ' + buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'AC'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            // evaluates the value function
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}