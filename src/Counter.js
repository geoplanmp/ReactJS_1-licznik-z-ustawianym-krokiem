import React, {Component} from "react";
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from "./Step";
// import Clock from './Clock';
// import ClockFunctional from './ClockFunctional';


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            value: "",            
        };
    }

   
    changeValue = (action) => {   //ES6 method
              
        this.setState((prevState, prevProps) => {
            
            let currentCounterValue = prevState.counterValue;
                        
            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });                       
        });
    }
    
    updateStep = (action) => {

        this.setState((prevState) => {
            let step = this._inputStep.value;
            let currentCounterValue = prevState.counterValue;
            return({                
                value: step
            });
        });

     
    }
        // Przekazanie obiektu do metody SetState
        // this.setState({
        //     counterValue: this.state.counterValue + 1
        // });
            
        // console.log(`changeValue clicked!`);
    

    // toggleClock = () => {
    //     this.setState((prevState) => {
    //         return ({
    //             showClock: !prevState.showClock
    //         });
    //     })
    // }

    render () {
        // let randomNumber = Math.floor(Math.random() * (108 - 1 +1) +1);
        
        // let clockElement = '';
        // if (this.state.showClock) {
        //     // clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
        //     clockElement = <ClockFunctional toggleClockMethod={this.toggleClock}/>;
        // } else {
        //     clockElement= <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        // }
        

        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step inputRef={(data) => {this._inputStep = data} } onChange={this.updateStep} type="number" />
                {/* {clockElement} */}
            </div>
        );
    }
}

export default Counter;

// function Counter(props) {
    
//     let randomNumber = Math.floor(Math.random() * (108 - 1 +1) +1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>

//     );
// }

// export default Counter;