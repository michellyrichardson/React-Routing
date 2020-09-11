import React from 'react';

const Colors = (props) => {

    return (
        <div>
            <h1 style={
                {value:props.value, backgroundColor:props.backgroundColor, 
                color:props.color}}>The word is: {props.value}</h1>
        </div>
    );
}
export default Colors;