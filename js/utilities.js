// input field Value--------------------

const inputGetValue=(id)=>{
    const inputValue=document.getElementById(id).value; 
    const getValue= parseFloat(inputValue);
    return getValue;
}

// Text value-----------------------------------

const textGetValue= (id)=>{
    const textValue= document.getElementById(id).innerText; 
    const convertNumber= parseFloat(textValue);
    return convertNumber;
}

// field clear------------------
const fieldClear=(id)=>{
    const formClear= document.getElementById(id)
    formClear.value= ''

    // or-------
    document.getElementById(id).value=''
}

// --hide section--------------------
const hideSection= (id)=>{
    document.getElementById('deposit-sec').classList.add('hidden')
    document.getElementById('Cash-out-section').classList.add('hidden')
    document.getElementById('transaction-sec').classList.add('hidden')
document.getElementById(id).classList.remove('hidden')

}