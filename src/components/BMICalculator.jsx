import React,{useState} from 'react';
import {toast} from "react-toastify" ;

const BMICalculator = () => {
  const[height , setHeight]= useState("");
   const[weight , setWeight ]= useState("");
    const[ gender,setGender]= useState("");
     const[bmi , setBmi]= useState("");

     const calculateBMI=(e)=>{
      e.preventDefault();
      if(!height|| !weight|| !gender){
        toast.error("please enter valid height , weight and gender .");
        return;
      }
      const heightInMeters = height/100;
      const bmiValue= (weight/ (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if(bmiValue < 18.5){
      toast.warning(
        "you are underweight. consider seeking avoide from a healthcare provider ."
      );
      }
      
  else if(bmiValue >= 18.5 && bmiValue < 24.9){
      toast.success(
        "you  have normal weight . keep maintain a healthy lifestyle."
      );
      }

       else if(bmiValue >= 18.5 && bmiValue < 29.9){
      toast.warning(
        "you  are over weight . it is recommended to seek advice from a healthcare specialist ."
      );
      } else
        toast.error(
        "you  are in the obessed range . it is recommended to seek advice from a healthcare specialist ."
      );


     }
  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className='container'>
        <div className='wrapper'>
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input 
              
            type="number"
             value={height}
              onChange={(e)=> setHeight(e.target.value)}
               required
              />
            </div>
             <div>
              <label>Weight (kg)</label>
              <input type="number" value={weight} onchange={(e)=> setWeight(e.target.value )}
               required
              />
            </div>
            <div>
              <label>Gender </label>
              <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            
              
            </div>
       <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className='wrapper'>
          <img src="/bmi.jpg" alt="bmi images"/>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator;
