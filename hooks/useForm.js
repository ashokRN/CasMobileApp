import { useState } from 'react'

const  useForm = () => {
    const [state, setstate] = useState({});

    const handleChanger = e => {
        
        setstate(state=>({...state,[e.target.name]:e.target.value}));
    }

    return [state,handleChanger]
}

export default useForm;
