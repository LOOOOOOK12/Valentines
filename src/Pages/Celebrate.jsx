import { Link } from "react-router-dom"
import cina from "../assets/cina.gif"
import { page1 } from "../Constants/page2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

function Celebrate() {
    return (
        <div className='h-screen flex flex-col items-center justify-center gap-6 bg-[#65ccff]'>
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
                            <img src={g.gif} alt="cinnamon"  className="w-full h-full"/>
                    </SwiperSlide>
                ))} 
            </Swiper>
            {/* <img src={cina} className="h-[20rem] mb-6 rounded-lg" /> */}
            <h1 className="text-4xl font-semibold text-zinc-50">Horaaay Date na Tayooo~</h1>
            <Link to='/'><button className="px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-700 ease-in-out duration-300 text-slate-200">Back</button></Link>
        </div>
    )
}

export default Celebrate