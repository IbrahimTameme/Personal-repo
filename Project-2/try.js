

let a = tolocal();

function tolocal()
{
  let correctnaswers =   localStorage.getItem("correctanswers")
    let x = JSON.parse(correctnaswers)
    return x; 
}



let d =  10;
setInterval(() => {


 
     if(d == 0)
     {
         window.location.href = "https://www.google.jo/?hl=ar";
     }
    document.body.innerHTML = d;
    d--
   
    
}, 1000);



// let x = 10;
// let y= 00;

// setInterval(() => {
    
//     document.body.innerHTML = x + ":" + y
//     if(y == 0 )
//     {
//         x--
//         y=60;
//     }
//     y--;

//     if(x=0)
//     {
        
//     }
    
// }, 1000);
let color = 'red';
document.getAnimations.style .back = color;
if ( correct > wrong)
{
  color = 'green'
}