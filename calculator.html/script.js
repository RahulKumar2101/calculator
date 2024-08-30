let string = "";
const buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {

        // eval()function is not good to use its security risks so that i comment the code if you want to run the calculator just uncomment the line no 8.
    //   string = eval(string);
      document.querySelector(".input").value=string;
    } 
    else if(e.target.innerText == "C") {
        string = "";
        document.querySelector(".input").value=string;
    }
    else{
    console.log(e.target);
    string = string + e.target.innerText;
     document.querySelector(".input").value=string;
    
    }
  });
});


