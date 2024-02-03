import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl font-semibold">What is your name?</h1>
                <input
                    className="p-2 border-slate-900 border-2 rounded-md"
                    type="text"
                    name='name'
                    onChange={handleInputChange}
                />
                <button 
                    className="px-5 py-3 rounded-md bg-green-600 text-slate-200" 
                    onClick={()=>{navigate('/Question', {replace: true, state:{name}})}}
                >
                    Okay
                </button>
            </div>
        </div>
    );
}

export default Home;
