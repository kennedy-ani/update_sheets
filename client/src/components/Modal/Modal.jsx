import { useState } from 'react'
import googleID2 from '../../assets/googleID2.jpg'

export const Modal = () => {

    const [openModal, setOpenModal] = useState(false);


    const revealModal = () => {
        setOpenModal(true)
    }

    const terminate = () => {
        setOpenModal(false);
    }

    return <>
    {
        openModal && (
            <div id='myModal' className="fixed inset-0 flex items-center justify-center z-50 mx-24">
                
                <div class="bg-white p-6 rounded-lg shadow-xl">
                    <button id="closeModal" onClick={terminate} class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">X</button>
                    <h2 class="text-2xl uppercase underline font-bold mb-4  text-center">
                        Guidelines on how to use this app
                    </h2>
                    <p class="mb-4 px-10">
                        <div className='my-5 font-bold text-center text-xl'>
                            Note: This app can only be used to update google sheets only related to TRKF Organisation
                        </div>
                        <div className="font-bold text-center text-xl">How to use it.</div>
                        <div className='my-5'>
                            <span className='font-bold'>Step 1:</span> Fill the google id input field with the Google ID 
                            of the spreadsheet you want to update.
                            You can get the google id here ⬇
                            
                            <div className='max-w-full'>
                                <img className='w-full' src={googleID2} alt="Picture of the google ID" />
                            </div>
                        </div>
                        <div className='my-5'>
                            <span className='font-bold'>Step 2:</span>  Fill the range input field. The information you are to provide here is number of cells you want to update.
                            There's a shortcut code to do this. I will list some of them below
                            E.g: Sheet1!A1, Sheet2!B3, Sheet1!A1:C3, e.t.c.
                        </div>

                        <div className='my-5'>
                            <span className='font-bold'>Step 3:</span> Fill the last box with the values you wish to insert in the cell or cells.
                        </div>
                    </p>
                </div>
            </div>
        )
    }

    {/* link to open the modal */}
        <div className="text-center my-5">
            <button id="openModal" onClick={revealModal}
             class="px-4 py-2 bg-blue-500 text-white rounded-lg">How to use this application</button>
        </div>
    </>
}