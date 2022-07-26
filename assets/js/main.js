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
            document.querySelector(".order__Food").style.display = 'block';
        }
        else if(e.target.innerHTML === "All"){
            var elemment = document.querySelectorAll(".box");
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'none';
            }
            for(var j = 0; j < elemment.length; ++j){
                elemment[j].style.display = 'block';
            }
        }
        console.log(document.querySelector(".order__Food").style.display);
    }
}

function getNumberInString(str){
    var temp = "";
    for(var i = str.indexOf("-") + 1; i < str.length; ++i){
        temp += str[i];
    }
    return Number(temp);
}

var plusElement = document.querySelectorAll(".fa-square-plus");
var minusElement = document.querySelectorAll(".fa-square-minus");
var numElement = document.querySelectorAll(".count")
var payElement = document.querySelector(".pay");
var moneyElement = document.querySelectorAll(".money-item");
var payMoney = document.querySelector(".pay-money");
var sumMoney = 0;

function NoneDisplay(Count,index){
    if(Count <= 0){
        minusElement[index].style.display = "none";
        numElement[index].style.display = "none";
    }
}

function getMoney(str){
    var temp = "";
    for(var i = 0; i < str.length - 1; ++i){
        temp += str[i];
    }
    return temp;
}

for(var i = 0; i < minusElement.length; ++i){
    minusElement[i].style.display = "none";
    numElement[i].style.display = "none";
}

function convertVND(number){
    number *= 1000;
    return number.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

for(var i = 0; i < plusElement.length; ++i){
    plusElement[i].onclick = function(e){
        var temp = e.target.id;
        var index = getNumberInString(temp);
        var num = Number(numElement[index-1].textContent);
        numElement[index-1].textContent = String(++num);
        minusElement[index-1].style.display = "block";
        numElement[index-1].style.display = "block";
        var money = parseFloat(getMoney(moneyElement[index-1].textContent));
        console.log(sumMoney);
        sumMoney += money;
        payMoney.textContent = convertVND(sumMoney);
        payElement.style.display = "flex";
        // console.log(index);
        // console.log(Number(numElement[index-1].textContent));
    }
    minusElement[i].onclick = function(e){
        var temp = e.target.id;
        var index = getNumberInString(temp);
        var num = Number(numElement[index-1].textContent);
        var money = parseFloat(getMoney(moneyElement[index-1].textContent));
        console.log(sumMoney);
        sumMoney -= money;
        payMoney.textContent = convertVND(sumMoney);
        --num;
        if(sumMoney <= 0){
            payElement.style.display = "none";
            num = 0;
            sumMoney = 0;
        }
        numElement[index-1].textContent = String(num);
        NoneDisplay(num,index-1);
        // console.log(index);
        // console.log(Number(numElement[index-1].textContent));
    }
}

class TableUser{
    constructor(id,NameTable){
        this.id = id;
        this.NameTable = NameTable;
    }
    getNameTable(){
        return this.NameTable;
    }
};

const listTableUser = new Array();
var UseTable;
for(var i = 0; i < 18; ++i){
    UseTable = new TableUser(i,"Bàn " + (i+1));
    listTableUser.push(UseTable);
}

console.log(listTableUser);

var managerElement = document.querySelector(".manager__contents");
var htmls  = listTableUser.map(function(UseTable){
    return`
        <div class="table-item">
            <i class="fa-solid fa-users"></i>
            <div>
                <span>${UseTable.getNameTable()}</span>
            </div>
        </div>
    `
});

managerElement.innerHTML = htmls.join('');

var tableItems = document.querySelectorAll(".table-item");
var btnChoose = document.querySelector(".background-choose");

btnChoose.onmouseup = function(){
    btnChoose.style.display = "none";
}

for(var i = 0; i < tableItems.length; ++i){
    tableItems[i].onclick = function(e){
        btnChoose.style.display = "block";
        console.log("true");
    }
}



// for(var i = 0; i < plusElement.length; ++i){
//     plusElement[i].onclick = function(e){
//         numElement[i]. = function(e){
//            e.target.innerHTML = "1";
//         }
//     }
// }

// var Products = [
//     {
        // id: 1,
        // name: 'coffee',
        // category: 'cf',
        // cost: 20000,
//     },
//     {
//         id: 2,
//         name: 'coffee',
//         category: 'cf',
//         cost: 20000,
//     }
// ];

// class Product{
//     constructor(id,name,category,cost){
//         this.id = id;
//         this.name = name;
//         this.category = category;
//         this.cost = cost;
//     }
//     getID(){
//         return this.id;
//     }
// };

// var P = new Product("1","hi","d","2000");

// const Products = new Array();
// Products.push(P);

// console.log(Products[0].getID());

// console.log(Products[0]);
// var listProductBlock = document.querySelector('.order__box');
// var htmls = Products.map(function(){
//     return `
//         <div class="box__item">
//             <img src="assets/img/Business-Coffee-opened-1.png" alt="">
//             <div class="box__contents">
//                 <span class = "id-Product" style = "display:none;">${Products[0].getID()}</span>
//                 <span class = "name-Product">${Products[0].getID()}</span>
//                 <div class="content__container">
//                     <div class="order__cost">
//                         <span class="money-item">20,000đ</span>
//                         <div class="groupButton">
//                             <i class="fa-solid fa-square-minus btn-hint"></i>
//                             <span class="count btn-hint">0</span>
//                             <i class="fa-solid fa-square-plus"></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// });

// listProductBlock.innerHTML = htmls.join('');

// var plus = document.querySelector('.id-Product');
// console.log(plus.innerHTML)

