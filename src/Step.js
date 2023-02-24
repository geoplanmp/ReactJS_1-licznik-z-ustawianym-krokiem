import React from "react";
import './Step.css';

<input ref={(data) => {this._inputStep = data} } type="number" />
function Step (props) {
    
    return (
        <div className="step">
            Krok: <input type="number" ref={props.inputRef} min="1" step="5" /> 
        </div>
    );
}
export default Step;