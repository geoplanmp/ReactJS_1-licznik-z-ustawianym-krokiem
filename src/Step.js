import React from "react";
import './Step.css';

const Step = (props) => {
    let _inputStep
    return (
        <div className="step">
            Krok: {" "} 
            <input ref={(data) => {
                _inputStep = data}}
                onChange={() => props.stepMethod(_inputStep)} 
                type="number"
                min = "1"
            />                
        </div>
    );
}
export default Step;

