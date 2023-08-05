import React ,{useState} from 'react';
import Button from '../Button/Button';
const Card =({key,
question,correctAnswerMarkUpdate,attempt,options,answer}) => {
    const[state,setState] = useState(false);
    function disableBtn(){
        setState(true);
    }
    return(
        <div>
            <h4>
                {question}
            </h4>
            <button onClick={disableBtn}
            disabled ={state}> {options.option1}
            </button>
            <button onClick={disableBtn}
            disabled={state}>{options.option2}
            </button>
            <button onClick={disableBtn}
            disabled={state}>{options.option3}
            </button>
            <button onClick={disableBtn}
            disab

        </div>
    )
}