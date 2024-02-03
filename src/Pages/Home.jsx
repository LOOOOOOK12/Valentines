import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={handleSubmit}
            >
                <label>What is your name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                />
                <Link to={`/Question?name=${encodeURIComponent(name)}`}>
                    <button type="submit">Okay</button>
                </Link>
            </form>
        </div>
    );
}

export default Home;
