import { useState } from "react";
import { Calendar } from 'lucide-react'

function CalendarButton() {
    return(
        <button><Calendar size={50}/></button>
    );
}

export default CalendarButton