import { useState } from 'react';
import {Timer} from 'lucide-react';

function TimerButton({...props}) {

    return (
        <>
            <button {...props}>
                <Timer size={50}/>
            </button>
        </>
    )
}


export default TimerButton;