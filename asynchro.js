//document.getElementById('homme').onclick = function(){
    //alert('you clicked on homme image')
//}
/*document.getElementById('images').addEventListener('click', function(e){
    console.log("images inside the ul tag ")
},true)

document.getElementById('homme').addEventListener('click', function(e){
    console.log("homme image inside")
    e.stopPropagation()// stop the bubbling condition
},true)

document.getElementById('google').addEventListener( 'click', function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("google clicked");
},false)*/

document.querySelector('#images').addEventListener
('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove()
    }
    
    
    //removeIt.parentNode.removeChild(removeIt)
})


// type , timestamp , defaultPrevented

//target , toElement , currentTarget


// clientx , clienty ,  screenx , screeny 


// altkey , ctrlkey , shiftkey , keycode 

// event propogation is generally two types first event bubbling and event capturing