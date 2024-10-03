 const form = document.querySelector('form')

 form.addEventListener('submit' , function(e){
    e.preventDefault();

const height = parseInt(document.querySelector('#weight').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;

}
else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid height ${weight}`;

}
else{
    (weight / ((height*height)/10000)).toFixed(2)
};
 });
