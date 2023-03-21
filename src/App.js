// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import './App.css';

function App() {

   const [isConnected, setIsConnected] = useState(false)
   const [amount, setAmount] = useState("")

  const detectCurrentProvider = ()=>{
    
    let provider;

    if(window.ethereum){
      provider = window.ethereum
     
    }else if(window.web3){
      provider = window.web3.currentProvider

    }else {
      console.log("Non ethereum browser detected, You should install metamask")
    }

    return provider
  }

  const connectWallet = async()=>{

    try {

      const currentProvider = detectCurrentProvider();
      if(currentProvider){
            await currentProvider.request({
              method : 'eth_requestAccounts'
      })

       const web3 = new Web3(currentProvider)

       const accounts = await web3.eth.getAccounts();

       const account = accounts[0]

       console.log(account)

       const amounts = await web3.eth.getBalance(account);

        // console.log(amounts)
        setAmount(amounts)

        setIsConnected(true)

      }else {
        alert("Install Metamask")
      }

    }catch (err) {
          console.log(err)
    }

  }

  const handleLogout = ()=>{
    setIsConnected(false)
  }


  return (
    <div className='App'>

      <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>

      <div></div>


{ isConnected ?
     ( <div> 
           
           <button className="myButton" onClick={handleLogout}>Log-Out</button>    
    
          </div>)
      :

     ( <div>
      <button className="myButton" onClick={connectWallet}>Login</button>
     </div> )

    }

    </div>



    <h3>React dapp authentication using web3 js and metamask</h3>

      <br />
 
      {/* {!isConnected && (
      <div>
         <button className="myButton" onClick={connectWallet}>Login</button>
        </div> )
     }
     */}
  

      {
        isConnected && (
          <div className='container'>
        <div>
              <h3 style={{color:"green"}}>Metamask is connected</h3>

              <h5>Amount: <span>{amount}</span></h5>

            

        </div>
      
    
   
     
    </div>
    ) }
</div>
    
  );
}

export default App;






