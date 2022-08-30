import { useState } from "react";

export const useToggle = (initState: boolean = true): [boolean, () => void] => {
    const [state, setState] = useState(initState);
    const toggle = () => {
       return setState(!state);
    }

    return [state, toggle];
}