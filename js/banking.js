//deposit button click function area
document.getElementById('Deposit-button').addEventListener('click',function(){
    //deposit input tag call here
  const newDiposit = document.getElementById('Deposit-input');
  const newDipositMoney=parseFloat(newDiposit.value);
    
  //previus deposit call here
   const previusDiposit = document.getElementById('previus-deposit');
    // console.log(previusDiposit);
    const previusDipositMoney = parseFloat(previusDiposit.innerText);
    //diposit money sum and update in diposit  areea 
   const totalDipositMoney=previusDipositMoney + newDipositMoney;
   previusDiposit.innerText = totalDipositMoney;

   //total balance id call here

   let totalBalance = document.getElementById('previus-balance');
   let totalBalanceMoney=parseFloat(totalBalance.innerText);

   //add deposit amount add in total balance area 

   totalBalance.innerText= totalBalanceMoney + newDipositMoney;

    
   newDiposit.value='';


})

// withdraw button call function

document.getElementById('withdraw-button').addEventListener('click',function () {
    //new withdraw item call and strint to convert number here
    const newWithdraw = document.getElementById('withdraw-input');
    const newWithdrawMoney =parseFloat(newWithdraw.value);

    //previus withdraw id call area 

    const previusWithdraw = document.getElementById('previus-withdraw');
    const previusWithdrawMoney = parseFloat(previusWithdraw.innerText);
    const totalWithdraw = previusWithdrawMoney + newWithdrawMoney;

    previusWithdraw.innerText = totalWithdraw;

    //// total balance id call here  ////
    let totalBalance = document.getElementById('previus-balance');
    totalBalanceMoney=parseFloat(totalBalance.innerText);
    // calculation total money and withdraw money
    totalBalance.innerText= totalBalanceMoney - newWithdrawMoney;

    //clear the enter withdraw value

    newWithdraw.value ='';





})