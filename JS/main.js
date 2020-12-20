
let list_book = document.getElementsByClassName("book");
document.getElementById("show_books").onclick = function(){
    document.getElementById("show_books").style.display = "none";
    for (let i = 0; i < list_book.length; i++){
        list_book[i].classList.remove('hidden_book');
    }

};

var toggle = document.querySelector('[name="Author"]');

toggle.addEventListener('change', function() { 
    var chosenClass = this[this.selectedIndex].value;
    console.log(chosenClass)
    
	var items = document.querySelectorAll('.book');
    console.log(items)
    Array.prototype.forEach.call(items, function(item) {
        var child = item.children[0];
        var childClasses = child.className.split(' ');
        console.log(childClasses, child)
        if (childClasses.indexOf(chosenClass) === -1) {
            item.style.display='none';
        } else {
            item.style.display='block';
        }
    });
});
var toggle = document.querySelector('[name="subject"]');

toggle.addEventListener('change', function() { 
    var chosenClass = this[this.selectedIndex].value;
    console.log(chosenClass)
    
	var items = document.querySelectorAll('.book');
    console.log(items)
    Array.prototype.forEach.call(items, function(item) {
        var child = item.children[0];
        var childClasses = child.className.split(' ');
        console.log(childClasses, child)
        if (childClasses.indexOf(chosenClass) === -1) {
            item.style.display='none';
        } else {
            item.style.display='block';
        }
        
    });
});


