document.getElementById('cashOutBtn').addEventListener('click', ()=>{
    const cashOutAmount= inputGetValue('inputCashOutAmount')
    const cashOutPin= inputGetValue('inputCashOutPin')
    const balance= textGetValue('balance');

    if(cashOutPin===1234){
        const newBalance= balance-cashOutAmount;
        // document.getElementById('balance').innerText=newBalance
        //-------------------- or------------------
        const newBalanceSet= document.getElementById('balance');
        newBalanceSet.innerText= newBalance
    }
    fieldClear('inputCashOutAmount')
    fieldClear('inputCashOutPin')
})