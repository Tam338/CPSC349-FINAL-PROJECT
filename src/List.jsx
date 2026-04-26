import { useState } from "react";
import { ClipboardList } from 'lucide-react'

function ListButton() {
    return(
        <button><ClipboardList size={50}/></button>
    );
}

export default ListButton