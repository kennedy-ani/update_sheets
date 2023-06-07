import axios from "axios"
import { useRef, useState } from "react"
import { Notify } from "./Toast/Notify";
import { Modal } from "./Modal/Modal";


export const UpdateSheets = ()=>{
    // toast notification
    const notifyRef = useRef(null); //to be a reference to the component notify
    const SnackbarType = {
        success: "success",
        fail: "fail"
    }

    const [sheetsId, setSheetsId] = useState("");
    const [range, setRange] = useState("");
    const [value, setValue] = useState("")

    const handleSheetsChange = (e) => {
        setSheetsId(e.target.value)
    }

    const handleRange = (e) =>{
        setRange(e.target.value)
    } 

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const putData = async (event) => {
        event.preventDefault()

        axios.put('http://localhost:5000', {
            sheetId: sheetsId,
            sheetRange: range,
            sheetValue: value
        }).then((response)=>{
            console.log(response.data)
            notifyRef.current.show()//show toast notify
        }).catch((error)=>{
            console.log(error);
        })
    }

    

    return <>
        <div className="">
            <div className="pt-10 max-w-md mx-auto">
                <h2 className="text-5xl my-10 font-bold text-lightgreen">Update Your Sheets </h2>
                <Modal/>
                {/* <button onClick={fetchData}>Fetch Me Data</button> */}
                <form onSubmit={putData}>
                    <label for="sheetId" className="text-white my-2">Google Sheets ID</label>{" "}
                    <input type="text" className="bg-columbiaBlue rounded-md p-2 w-full"
                    value={sheetsId} onChange={handleSheetsChange} 
                    id="sheetId" /><br /><br />

                    <label for="range" className="text-white">Range</label>{" "}
                    <input type="text" value={range} className="bg-columbiaBlue rounded-md p-2 w-full" onChange={handleRange} id="range" name="range"/><br /><br />

                    <label for="valueInput" className="text-white">Value</label>{" "}
                    <textarea id="valueInput" className="bg-columbiaBlue rounded-md p-2 w-full" value={value} onChange={handleValue} name="valueInput" cols="30" rows="10"></textarea><br /><br />

                    <button type="submit" className="bg-orange px-5 rounded-md font-bold text-white block mx-auto
                     py-3">Update</button>
                
                </form>
                
                <Notify ref={notifyRef} message="Action Completed!" type={SnackbarType.success}/>
                
                {/* <button onClick={()=>{
                    notifyRef.current.show()

                }}   className="bg-orange px-5 rounded-md font-bold
                 text-white block mx-auto py-3">
                    Notify Me
                </button> */}

                
            </div>
        </div>
    </>
}