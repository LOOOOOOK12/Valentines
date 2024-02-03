import React, { useState, useEffect } from "react";

function Question({ location }) {
    const phrases = [
        "Will you be my valentine??",
        "Are you sure?",
        "I will be Sad :<",
        "Sure talaga??",
        "Hmmmhn~ :<",
    ];

    const [labelText, setLabelText] = useState(phrases[0]);
    const [name, setName] = useState("");

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const nameFromQuery = searchParams.get("name");
        setName(nameFromQuery || "");
    }, [location.search]);

    const handleNoButtonClick = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setLabelText(phrases[randomIndex]);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img src="" alt="" />
            <div className="flex flex-col items-center justify-center">
                <label>{`Hello ${name}`}</label>
                <label>{labelText}</label>
                <div className="flex gap-5">
                    <button className="px-5 py-3 rounded-md bg-green-600">
                        Yes
                    </button>
                    <button
                        className="px-5 py-3 rounded-md bg-red-600"
                        onClick={handleNoButtonClick}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Question;
