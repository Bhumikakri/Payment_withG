let checkboxx = [...document.querySelectorAll('input')];
let btnn = document.querySelector('button');
let ordersID = document.querySelector('span');
let foods = document.querySelector(".foodImg");
let audio = document.querySelector("audio");

btnn.addEventListener('click', (e) =>{
    // console.log(e);
    audio.play();
    e.preventDefault();
    let AllFood = [];
    checkboxx.forEach((checkbox) => {
        if(checkbox.checked){
            AllFood.push(checkbox.value);
        }
    });
    if(AllFood.length == 0){
        alert("Please select atleast one food item to order");
        return;
    }


    btnn.disabled = true;
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve();
        }, Math.floor(Math.random() * 6000) + 100);
    });
    myPromise.then(() => {
        ordersID.innerText = Math.floor(Math.random() * 1000);
        AllFood.forEach((orderedItem) => {
            if(orderedItem == "burger"){
                foods.src = "https://th.bing.com/th/id/R.021f0b1eb00791d7c3d7d53eaf7eba6c?rik=tXyhA5UuKkPdzw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_HPXWOvg7RcM%2fTSAlV0uVAnI%2fAAAAAAAAACo%2fkdGktUbFux8%2fs1600%2fburger.jpg&ehk=ijL%2bbELtrSC%2fB9P4qS8H8sezgLmFQQLWEx0%2fJB803x4%3d&risl=&pid=ImgRaw&r=0";
            }
            else if(orderedItem == "fries"){
                foods.src = "https://th.bing.com/th/id/OIP.XeT3Q7d34b2Ltdax5wK9_wHaHl?pid=ImgDet&rs=1";
            }
            else if(orderedItem == "drinks"){
                foods.src = "https://th.bing.com/th/id/OIP.VGOo7UyTCRr7UvSzPC5KSwHaFi?pid=ImgDet&rs=1"
            }
            foods.style.display = "inline-block";
            btnn.disabled = false;
        });
    });
});