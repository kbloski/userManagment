import { useState } from "react";

export function useRefresh(){
    const [switchValue, setSwitchValue] = useState(false);

    function toogleRefresh(){
        setSwitchValue( prev => {
            return !prev
        })
    }

    return { switchValue, refresh: toogleRefresh}
}