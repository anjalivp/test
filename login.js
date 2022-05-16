function validate(callback)//validate inputs
{
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    if(username.value=="admin" && password.value=="12345")
    {
        callback();
    }
    else
    {
        alert("invalid login");
        return false;

    }
}

function redirect()//redirect to main page
{
    window.location.href="todo.html";

}

