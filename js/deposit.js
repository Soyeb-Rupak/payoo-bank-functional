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

const newDiv=document.createElement('div');
newDiv.classList.add('bg-red-400')
newDiv.innerHTML=`
<h1 class="text-3xl text-gray-50">Cash Deposit</h1>
<p>Cash Deposited Tk.${depositAmount} total Balance ${balance}
`
 document.getElementById('transaction-sec').appendChild(newDiv)
})