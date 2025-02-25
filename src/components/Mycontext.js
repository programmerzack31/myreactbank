import { createContext,useState } from "react";
export const MyBankcontext = createContext(null);
export const ValueProvider = (props)=>{
    const [balance,setbalance] = useState(1000);
return(
<MyBankcontext.Provider value={{balance , setbalance}}>
    {props.children}
    </MyBankcontext.Provider>
);
};