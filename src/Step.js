import React from "react";
import './Step.css';

function Step (props) {
    // <input ref={(data) => { this._inputStep = data} } type="number" />
    return (
        <div className="step">
            Krok: <input type="number" min="1" step="5" /> 
        </div>
    );
}
export default Step;