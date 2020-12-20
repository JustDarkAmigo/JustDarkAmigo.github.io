let Flag_menu = false;

document.getElementById("abc").onclick = function(){
    if (Flag_menu){
        document.getElementById("books_SB").style.display = "none";
    Flag_menu = false;
    document.getElementById("header").style.background = "green";
    }
    else{
        document.getElementById("books_SB").style.display = "block";
        Flag_menu = true;
        document.getElementById("header").style.background = "tomato";
    }
};
