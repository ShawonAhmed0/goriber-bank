
// Login Area 
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const submitArea = document.getElementById("submit-area");
    submitArea.style.display ="none";
    const transArea = document.getElementById("transaction-area")
    transArea.style.display ="block";
})

// Deposit Area 
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value
    const depositNumber = parseFloat(depositAmount)
    const depositDisp = document.getElementById("depositDisp").innerText
    const depositDispNum = parseFloat(depositDisp)
    const totalDisp =document.getElementById("totalDisp").innerText
    const totalDispNum = parseFloat(totalDisp)
    const depFinal = depositNumber + depositDispNum;
    const dispTotal = depositNumber + totalDispNum ;
    document.getElementById("totalDisp").innerText = dispTotal;
    document.getElementById("depositDisp").innerText = depFinal;
    document.getElementById("depositAmount").value = "" ;
})

// withdraw area 
 
const withdrawBtn = document.getElementById("withdrawBtn");
 withdrawBtn.addEventListener('click', function(){

const withdrawDisp = document.getElementById("withdrawDisp").innerText
const withdrawDispNum = parseFloat(withdrawDisp);
const withdrawValue = document.getElementById("withdrawValue").value
const withdrawValueNum = parseFloat(withdrawValue);
const totalDisp =document.getElementById("totalDisp").innerText
const totalDispNum = parseFloat(totalDisp)
const withdrawResult = withdrawDispNum + withdrawValueNum;
const withdrawFinal = totalDispNum - withdrawValueNum;
document.getElementById("withdrawDisp").innerText =withdrawResult ;
document.getElementById("withdrawValue").value = "" ;
document.getElementById("totalDisp").innerText = withdrawFinal; 


 })