import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { MyBankcontext } from './Mycontext'
import './bank.css'


const Wshow=()=>{
    document.querySelector(".Wbox").style.display = 'flex'; 
    document.getElementById('Wshowbtn').style.display = "none";
    document.querySelector(".Dbox").style.display = "none";
     document.getElementById('Dbutton').style.display = "block";
}
const Wcancel=()=>{
    document.querySelector(".Wbox").style.display = 'none';    
    document.getElementById('Wshowbtn').style.display = "block";
}
const Widthrawl = () => {
    const Ibalance = useContext(MyBankcontext);
    const [Wamount, setWamount] = useState();

    const handelW = (e) => {
        e.preventDefault();
        if (Wamount < Ibalance.balance && !isNaN(Wamount)) {
            Ibalance.setbalance(parseInt(Ibalance.balance - Wamount));
            speacker();
            // localStorage.setItem('savedbalance',)

        }
        else {
            Mspeacker();
            // alert("Insufficient balance");
        }
    }

    const speacker = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = ` ${Wamount} dollar Widthrawl from your bank account`;
        window.speechSynthesis.speak(speech);
    }

    const Mspeacker = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = `enter a valid amount to Widthrawl`;
        window.speechSynthesis.speak(speech);
    }

    return ( 
        <div id='Warea'>
            <button onClick={Wshow} id='Wshowbtn'>Widthrawl</button>
        <div className='Wbox'>
           
            <p >Widthrawl Area</p>
                <input type="number" placeholder='Enter Amount To Widthrawl'
                    onChange={(e) => { setWamount(parseInt(e.target.value)) }} /> <br></br>
               <div> <button onClick={handelW} className='Wbtn'>Widthrawl</button>
               <button onClick={Wcancel} className='CancelWbtn'>Cancel</button>
               </div>

        </div>
        </div>
    )
}

export default Widthrawl