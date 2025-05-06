document.getElementById('loginBtn').addEventListener('click', ()=>{
    const homePage= getValue('inputAccount');
    const homePagePin= getValue('inputPin');
   if(homePage===01999995852 && homePagePin===1234 ){
    window.location.href='../home.html'
   }
})