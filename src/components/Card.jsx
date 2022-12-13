import "../scss/card.scss";
import {data} from "../helper/data" 
import React from 'react'

const Card = () => {
  return (
    <div className="card-container" >
        {data.map((item,id)=>{ 
            const {title,desc,image}=item;
            return(
                <div className="cards" key={id}>
                    <div className="title">
                        <h4>{title}</h4>
                    </div>
                    <img src={image} alt="img" />
                    <div className="desc">
                        <p>{desc}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Card
