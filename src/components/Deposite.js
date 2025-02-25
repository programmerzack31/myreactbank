import React, { useState } from 'react'
import { useContext } from 'react'
import { MyBankcontext } from './Mycontext'
import './bank.css'

const DepositShow=()=>{
  const Dbox = document.querySelector(".Dbox");
  Dbox.style.display = "flex";
  document.getElementById('Dbutton').style.display = "none";
  document.querySelector(".Wbox").style.display = 'none';
   document.getElementById('Wshowbtn').style.display = "block"
}
const CancelD =()=>{
  const Dbox = document.querySelector(".Dbox");
  Dbox.style.display = "none";
  document.getElementById('Dbutton').style.display = "block";

}

const Deposite = () => {
  const Ibalance = useContext(MyBankcontext);
  const [Damount,setDamount]=useState(0);
  
  
 
  const handelDeposit=(e)=>{
    e.preventDefault();
    if(Damount>0&& !isNaN(Damount)){
      Ibalance.setbalance(Ibalance.balance+Damount);
        Dspeacker();
    
    } 
    else{
      // alert('enter a valid amount to deposit')
      Mspeacker();
    }
    
  } 
  const Dspeacker =()=>{
   
    const speech =new SpeechSynthesisUtterance();
    speech.text = ` ${Damount} dollar Deposit in your bank account`;
    window.speechSynthesis.speak(speech);
   } 
   
   const Mspeacker = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `enter a valid amount to deposit`;
    window.speechSynthesis.speak(speech);
}
  return (
    <div id='DepositArea'>
      <button onClick={DepositShow} id='Dbutton'>Deposit</button>
    <div className='Dbox'>
      <div className='Btnbox'>
       <p className='Da'>Deposit Area</p> 
       </div>
            <input type="number" placeholder='Enter Amount To Deposite'
             onChange={(e)=>{setDamount( parseInt( e.target.value))}} /> <br></br>
            <div> <button onClick={handelDeposit} className='Dbtn'>  Deposite</button>
            <button onClick={CancelD} className='Cancelbtn'>Cancel</button>
            </div>

             
        
    </div>
    </div>
  )
}

export default Deposite