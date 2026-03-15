import {Check} from 'lucide-react'
import React from 'react'
import {Link} from "react-router-dom"

const OurPlan = () => {
    const pricing = [
        {
         imgUrl: "/pricing.jpg",
         title: "QUARTERLY",
         price:18000,
         length:3,
    },
     {
         imgUrl:"/pricing.jpg",
         title:"Half_YEARLY",
         price:34000,
         length:6,
    },

     {
         imgUrl:"/pricing.jpg",
         title:"YEARLY",
         price:670000,
         length:12,
    },
];
  return (
<section className="pricing">
    <h1> </h1>
    <div className="wrapper">

    {pricing.map((element)=>{
            return(
                <div className="card" key={element.title}>
                    <img src={element.imgUrl} alt={element.title}/>
                    <div className="title">
                        <h1>{element.title}</h1>
                        <h1> PACKAGES</h1>
                        <h3>RS{element.price}</h3>
                        <p> FOR {element.length} Months</p>
                    </div>

                    <div className="description">
                        <p>
                            <Check/> Equipment
                        </p>
                        <p>
                            <Check /> ALL DAY Free Training
                        </p>
                        <p>
                            <Check /> Free Restroom
                        </p>
                        <p>
                            <Check /> 24/7 Skilled Support
                        </p>
                        <p>
                            <Check /> 24 Days freezing option
                        </p>
                        <Link to={"/"}>join Now </Link> 

                    </div>
                </div>
          
            
            )
        })
    }
    </div>
</section>
  )
}

export default OurPlan
