
const form =document.querySelector('form');
// this use case will give you empty value 
//const height=parseInt(document.querySelector('#height').value)
 form.addEventListener('submit',function(e){
    e.preventDefault()// default submit ko roko
        const height=parseInt(document.querySelector('#height').value)
        const weight=parseInt(document.querySelector('#weight').value)
        const result=document.querySelector('.result')
        
        if(height==='' || height<0 || isNaN(height)){
            result.innerHTML=`Please give a valid height ${height}`
        }
        if(weight==='' || weight<0 || isNaN(weight)){
            result.innerHTML=`Please give a valid weight ${weight}`
        }
        else {
           const bmi=( weight/((height*height)/10000)).toFixed(2)
           // show result
           result.innerHTML=`<span>${bmi} </span>`
           if(bmi<18.6){
             result.innerHTML += "<br>You are Underweight";
           }
           if(bmi>18.6 && bmi<24.9){
             result.innerHTML += "<br>You are Normalweight";
           }
           else{
                result.innerHTML += "<br>You are overrweight"
           }
        }
    })