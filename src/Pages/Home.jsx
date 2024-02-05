import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#65ccff]">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl font-semibold text-zinc-50">What's your name?</h1>
                <input
                    className="p-2 border-none border-2 rounded-md"
                    type="text"
                    name='name'
                    onChange={handleInputChange}
                />
                <button 
                    className="px-5 py-3 rounded-md bg-green-500 text-slate-100 hover:bg-green-700 ease-in-out duration-300" 
                    onClick={()=>{navigate('/Question', {replace: true, state:{name}})}}
                >
                    Okay
                </button>
            </div>
        </div>
    );
}

export default Home;
