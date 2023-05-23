/* steps to follow are to:
name function
get values
calculate
output
*/

// formular to calc bmi is weight over height to the power of two

function calculation(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = weight /Math.pow(height/100, 2).toFixed(1);

    document.getElementById('heading').innerHTML = 'Your BMI is :'
    document.getElementById('results').innerHTML = bmi
    

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'You are underweight'
    } else if (bmi >= 18.5 && bmi <= 24.5) {
        document.getElementById('message').innerHTML = 'You are healthy'
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are overweight'
    } else {
        document.getElementById('message').innerHTML = 'You are obese'
    }
}

let remove=document.getElementById("weight")
let nothing=document.getElementById("height")

let ce=()=>{
    remove.value='';
    nothing.value='';
    document.getElementById('results').innerHTML='';
    document.getElementById('message').innerHTML='';

}