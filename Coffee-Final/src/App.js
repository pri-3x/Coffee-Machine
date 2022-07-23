import React, {useState} from 'react';
//import logo from './Coffee.jfif';
import './App.css';
import {ethers} from 'ethers';
import Coffee from './myfolder/Coffee.json'

const CoffeeAddress='0x5FbDB2315678afecb367f032d93F642f64180aa3';

function App() {
 

  const [message, setMessage] = useState("");
  const[message1 , setmessage1] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState("");

  
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  async function requestAccount2() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchGreeting() {
    
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        CoffeeAddress,
        Coffee.abi,
        provider
      );
      try {
        
        //const data = await contract.greet();
        //console.log("data: ", data);
        //setCurrentGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function fetchGreeting1(){
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        CoffeeAddress,
        Coffee.abi,
        provider
      );
      try {
        
        //const data = await contract.greet();
        //console.log("data: ", data);
        //setCurrentGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }
  
    
  async function setGreeting() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //console.log("h2")
      const signer = provider.getSigner(//process.env.PRIVATE_KEY,
       // provider.getDefaultProvider()
      );
//console.log("h1")
      
      const contract = new ethers.Contract(CoffeeAddress, Coffee.abi, signer);
      //console.log(ethers.utils.isAddress( CoffeeAddress ))
      const transaction = await contract.Purchase_Coffee(message);
      console.log("Coffee Purchased")

      setMessage("");
      await transaction.wait();
      fetchGreeting();
    }
  }


    
    

    


  async function setGreeting1(){
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //console.log("h2")
      const signer = provider.getSigner(//process.env.PRIVATE_KEY,
       // provider.getDefaultProvider()
      );
//console.log("h1")
      
      const contract = new ethers.Contract(CoffeeAddress, Coffee.abi, signer);
      //console.log(ethers.utils.isAddress( CoffeeAddress ))
      const transaction = await contract.Restock_Coffee(message);
      console.log("Coffee Restocked")

      setMessage("");
      await transaction.wait();
      fetchGreeting1();
    }
   
}
 


async function getGreeting2(){
  if(typeof window.ethereum!='undefined'){
  //   import Contract from './artifacts/contracts/Contract.sol/Contract.json'
  // const contractDeployedAddress = "0xblah";

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const myToken = new ethers.Contract(CoffeeAddress,Coffee.abi, signer)

  const data = await myToken.Coffee_Balance();
  // await contract.someMethodThatRequiresSigning();
    // const provider = new ethers.providers.JsonRpcBatchProvider()
    // 
    // const data = await myToken.
    console.log(data);
    // const provider=new ethers.providers.Web3Provider(window.ethereum)
  //   const contract=new ethers.Contract(CoffeeAddress,Coffee.abi,provider)
  //   try{
  //     const data=await contract.Purchase_Coffee()
  //     setGreetingValue(data)
  //     console.log("Coffee purchased");
  //         }
  //         catch(err){
  //           console.log('Error', err)
  //         }

  // }
}
// async function requestAccount(){
//   await window.ethereum.request({method: 'eth_requestAccounts'})
// }
}


  return(
    <div>
      
      <h1 style={{color:"pink"}}> Coffee Machine</h1>
      <div className='container'>
       BUY COFFEE
        <br/>
        </div>

        <div className='container3'>
      
        <input
        //id = "amount"
        type="number"
          className="input-text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          
          //ref = {(input) => {this.amount = input}}
          placeholder='Coffee to buy'  />
          <button className='add-btn' onClick={setGreeting}> BUY

          </button>
          


          
          
          


      </div>
      <br/>

      
          <br/>
    
    </div>
  );

  }



 export default App;