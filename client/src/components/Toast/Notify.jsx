import { useState, forwardRef, useImperativeHandle } from 'react';
import './notify.css'

export const Notify = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);
    useImperativeHandle(ref, ()=>({
        //call all the function we need to get access to outside this component
        show(){
           setShow(true);
           setTimeout(()=>{
            setShow(false)
           }, 3000)
        }
    }))
    return <>
    
    <div className={`fixed right-1 bottom-1 rounded-md flex items-center text-center
    -translate-x-1/4 w-80 h-16 -translate-y-1/4 ${props.type === 'success' ? `bg-lightgreen`: `bg-red`}` 
    }
    id={show ? 'show' : 'hide'}>{/* */}
        <div className="basis-1/4">
            {props.type === 'success' ? <div>&#x2714;</div>: <div>&#x2613;</div>}
        </div>
        <div className="basis-1/2 font-bold">{props.message}</div>
    </div>
    
    </>
})