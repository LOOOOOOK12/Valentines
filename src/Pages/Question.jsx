import React, { useState } from "react";
import { useLocation,Link } from "react-router-dom";
import cinnamon from '../assets/cinnamon.gif'
import { page1 } from "../Constants/page1";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

function Question() {

    const location = useLocation()
    const phrases = [
        `Will you be my valentine?? ${location.state.name}`,
        `Are you sure? ${location.state.name}`,
        `I will be Sad :< ${location.state.name}`,
        `Sure talaga ${location.state.name}??`,
        `Hmmmhn~ :< ${location.state.name}`,
        `Weeeeeehh~`,
        `Pweaaaseee~ ${location.state.name}`,
        `bugged yung noo~ :3`,
        `Talagaaa~`
    ];

    const [labelText, setLabelText] = useState(phrases[0]);
    
    const handleNoButtonClick = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setLabelText(phrases[randomIndex]);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#65ccff]">
            <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                effect="fade"
                autoplay = {{
                    disableOnInteraction:false,
                    delay: 2000,
                    
                }}
                loop
                className='h-[20rem] w-[35rem] flex justify-center items-center rounded-lg mb-5'
                >
                {page1.map((g,idx)=>(
                    <SwiperSlide key={idx} className="">
                            <img src={g.gif} alt={g.gif}  className="w-full h-full"/>
                    </SwiperSlide>
                ))} 
            </Swiper>
            <div className="flex flex-col items-center justify-center gap-5">
                <label className="text-4xl font-semibold text-zinc-50">{labelText}</label>
                <div className="flex gap-5">
                    <Link to='/Celebrate'><button className="px-5 py-3 rounded-md bg-green-500 hover:bg-green-700 ease-in-out duration-300 text-slate-100">Yes</button></Link>
                    <button className="px-5 py-3 rounded-md bg-red-600 text-slate-100 hover:bg-red-700 ease-in-out duration-300" onClick={handleNoButtonClick}>No</button>
                </div>
                <Link to='/'><button className="px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-700 ease-in-out duration-300 text-slate-100"> Back</button></Link>
            </div>
        </div>
    );
}

export default Question;
