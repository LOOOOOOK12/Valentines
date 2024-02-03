import React, { useState } from "react";
import { useLocation,Link } from "react-router-dom";

function Question() {

    const location = useLocation()
    const phrases = [
        `Will you be my valentine?? ${location.state.name}`,
        `Are you sure? ${location.state.name}`,
        `I will be Sad :< ${location.state.name}`,
        `Sure talaga ${location.state.name}??`,
        `Hmmmhn~ :< ${location.state.name}`,
    ];

    const [labelText, setLabelText] = useState(phrases[0]);
    
    const handleNoButtonClick = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setLabelText(phrases[randomIndex]);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img src="" alt="" />
            <div className="flex flex-col items-center justify-center gap-5">
                <label>{labelText}</label>
                <div className="flex gap-5">
                    <Link to='/Celebrate'><button className="px-5 py-3 rounded-md bg-green-600 text-slate-200">Yes</button></Link>
                    <button className="px-5 py-3 rounded-md bg-red-600 text-slate-200" onClick={handleNoButtonClick}>No</button>
                </div>
                <Link to='/'><button className="px-5 py-3 rounded-md bg-blue-700 text-slate-200"> Back</button></Link>
            </div>
        </div>
    );
}

export default Question;
