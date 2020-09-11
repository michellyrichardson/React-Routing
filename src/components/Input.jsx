import React from 'react';

const Input=(props)=>{
    if(isNaN(parseInt(props.value)))
    {
        return(
            <div>
                <h1>The word is: {props.value}</h1>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h1>The number is: {props.value}</h1>
            </div>
        )
};
}
export default Input;