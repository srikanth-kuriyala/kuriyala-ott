import React from 'react';
import "./Button.css";

const Button = (props) => {
   return (
      <button className={`btn btn--${props.kind} CTA`}
        data-id={props.id}
        disabled={props.disabled}
        onClick={props.handleClick}> 
           <h4>{props.label}</h4>
      </button>
   )
}

export default Button;