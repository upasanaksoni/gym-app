import  { useState } from 'react'
import {ClipLoader} from "react-spinners"
import axios from "axios";
import {  toast } from "react-toastify";

const Contact = () => {
  const [name, setName]=useState("");
   const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
     const [loading, setLoading]=useState(false);
     const sendMail=async(e)=>{
      e.preventDefault();
      setLoading(true);
      try{
        const{date}= await axios.post(" http://localhost:4000/send/mail" ,{
          name,email,message
        },{withCredentials:true ,headers :{"Content-Type":"application/json"},
      }
        )
        setName(" "),
        setMessage(""),
        setMessage("");
        toast.success(data.message);
        setLoading(false);
      } catch(error){
       setLoading(false);
      toast.error(error.resonse.data.message);

      }
     }

     const handleSubmit = async (e) => {
       e.preventDefault();
       setLoading(true);
       
       try {
         const response = await fetch("http://localhost:4000/send/mail", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ name, email, message }),
         });
         
         const data = await response.json();
         if (data.success) {
           alert("Message sent successfully!");
           setName("");
           setEmail("");
           setMessage("");
         } else {
           alert("Failed to send message");
         }
       } catch (error) {
         console.error("Error:", error);
         alert("Error sending message");
       } finally {
         setLoading(false);
       }
     };

  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input 
          type="text"
           value={name} 
           onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email"
          value={email} 
           onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
           type="text"
            value={message} 
           onChange={(e)=> setMessage(e.target.value)}
           />
        </div>
        <button 
        type='submit' 
        disabled={loading} 
        style={ {
          display:"flex" ,
        justifyContent:"center",
         alignItems:"center",
          gap:"15px",
        }}
        >
        {loading && <ClipLoader size={20} color="white"/>}
         send Messages
        </button>
      </form>
    </section>
  )
}

export default Contact
