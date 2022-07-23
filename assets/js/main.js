var elemment = document.querySelector(".order__btnquick");
console.log(elemment);

var btnElement = document.querySelectorAll(".btnMenu");
console.log(btnElement);

for(var i = 0; i < btnElement.length; ++i){
    btnElement[i].onclick = function(e){
        if(e.target.innerHTML === "Coffee"){
            var elemment = document.querySelectorAll(".box");
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'none';
            }
            document.querySelector(".order__coffee").style.display = 'block';
        }
        else if(e.target.innerHTML === "Rau má"){
            var elemment = document.querySelectorAll(".box");
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'none';
            }
            document.querySelector(".order__rauma").style.display = 'block';
        }
        else if(e.target.innerHTML === "Tea"){
            var elemment = document.querySelectorAll(".box");
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'none';
            }
            document.querySelector(".order__Tea").style.display = 'block';
        }
        else if(e.target.innerHTML === "More"){
            var elemment = document.querySelectorAll(".box");
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'none';
            }
            document.querySelector(".order__more").style.display = 'block';
        }
        else if(e.target.innerHTML === "Food"){
            var elemment = document.querySelectorAll(".box");
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'none';
            }
            document.querySelector(".order__mor").style.display = 'block';
        }
        console.log(document.querySelector(".order__Fd"));
    }
}