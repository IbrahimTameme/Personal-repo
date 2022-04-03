let email = document.getElementById('email');
let passsword = document.getElementById("password")

function getinfofromlocal(){
    let x =localStorage.getItem(email.value);
    localStorage.setItem('topic',x)
    console.log(x);
    if(x)
    {
    let y = JSON.parse(x)
    console.log(y);
    console.log(y[0].password);
    console.log(passsword.value);
    if(y[0].password == passsword.value)
    {
        window.location.href = "../Project-2/Questionpage.html"
        
    }
    }
    else
    {
        console.log("incorrect email");
    }
}