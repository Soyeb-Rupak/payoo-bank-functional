document.getElementById('depositBtn').addEventListener('click', ()=>{
    const depositAmount= inputGetValue('inputDepositAmount');
    const depositPin= inputGetValue('inputDepositPin');
    const balance= textGetValue('balance')
 
if(depositPin===1234){
    const calculateBalance= depositAmount + balance;
    document.getElementById ('balance').innerText= calculateBalance;
}
fieldClear('inputDepositAmount')
fieldClear('inputDepositPin')
 
})