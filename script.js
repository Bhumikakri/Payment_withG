let mainIcon = document.querySelector("#gpay");
let startBtn = document.querySelector(".startbtn");
let mainDiv = document.querySelector(".main");
mainDiv.style.display = "none";
let input =document.querySelector("#name_num");
let amount=document.querySelector("#amount");
let paybtn = document.querySelector(".Pay_btn");





startBtn.addEventListener("click", ()=>{
    mainDiv.style.display = "block";
    startBtn.style.display = "none";
    mainIcon.style.display = "none";

})

paybtn.addEventListener("click",()=>{
    if(input.value==""){
        alert("Enter your name or number");
    }
    else if(amount.value == ""){
        alert("Enter Amount");
    }
    else if(input.value.length!=10){
        alert("Enter your correct name or number");
    }

    let mypromise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(input.value.length==10){
                resolve("payment successfull");
            }            
            else{
                 if(amount.value.length!=2){
                    reject("Payement failed");
                }
            }
        }, 5000);

    });

    let procces = document.querySelector(".lower_main");

    mypromise
    .then((data)=>{
    procces.innerHTML=`<img src="./OIP" alt="" id="g_icon2">
    <h1 class="Paidamount">₹${amount.value}</h1>
    <h3 class="status">${data}</h3>
    <p class = transaction_id>Transaction ID: <span class="id">${
      Math.floor(Math.random() * 90000000) + "@ybpl"
    }</span></p>
    <h2>Paid to: <span class="name_person">${input.value}</span></h2>`
    // <button class = "Pay_btnn">Re Payment</button>
    
   })
   .catch((mssg)=>{
    procces.innerHTML=`<h3 class="status">${mssg}</h3>
    <button class = "Pay_btnn">Re try</button>`
   })

//    let last = document.getElementsByClassName("Pay_btnn");
})

// function lastbt(last){
//     last.addEventListener("click", ()=>{
//         startBtn.style.display = "block";
//         mainIcon.style.display = "block";
//     })
// }
// lastbt();



