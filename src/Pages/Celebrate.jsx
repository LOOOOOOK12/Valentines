import { Link } from "react-router-dom"
import cina from "../assets/cina.gif"

function Celebrate() {
    return (
        <div className='h-screen flex flex-col items-center justify-center gap-6 bg-[#65ccff]'>
            <img src={cina} className="h-[20rem] mb-6 rounded-lg" />
            <h1 className="text-4xl font-semibold text-zinc-50">Horaaay Date na Tayooo~</h1>
            <Link to='/'><button className="px-5 py-3 rounded-md bg-blue-700 text-slate-200">Back</button></Link>
        </div>
    )
}

export default Celebrate