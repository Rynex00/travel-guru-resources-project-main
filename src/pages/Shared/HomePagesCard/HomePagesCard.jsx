// import React from 'react'
// import cardImg1 from '../../../assets/Rectangle 4.png'
// import cardImg2 from '../../../assets/Rectangle 6.png'
// import cardImg3 from '../../../assets/Rectangle 8.png'
// import cardImg4 from '../../../assets/Rectangle 9.png'
// import overlayimg from '../../../assets/Rectangle 5.png'


// const HomePagesCard = () => {
//     return (
//         <div className="carousel  gap-20">
//             <div id="slide1" className="carousel-item relative ">
//                 <img
//                     src={cardImg2} />
//                 <div className="absolute  top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <div>
//                         <p className='absolute text-white top-[350px] text-4xl uppercase p-2' >Cox’s  Bazar</p>
//                         <img src={overlayimg} alt="" />
//                     </div>
//                 </div>
//             </div>

//             <div id="slide2" className="carousel-item relative ">
//                 <img
//                     src={cardImg3}
//                 />
//                 <div className="absolute  top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <div>
//                         <p className='absolute text-white top-[350px] text-4xl uppercase p-2' >Sreemangal</p>
//                         <img src={overlayimg} alt="" />
//                     </div>
//                 </div>
//             </div>


//             <div id="slide3" className="carousel-item relative ">
//                 <img
//                     src={cardImg4}
//                 />
//                 <div className="absolute  top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <div>
//                         <p className='absolute text-white top-[350px] text-4xl uppercase p-2' >Sundarbans</p>
//                         <img src={overlayimg} alt="" />
//                     </div>
//                 </div>
//             </div>


//             <div id="slide4" className="carousel-item relative ">
//                 <img
//                     src={cardImg2}
//                 />
//                 <div className="absolute  top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <div>
//                         <p className='absolute text-white top-[350px] text-4xl uppercase p-2' >Senmartin</p>
//                         <img src={overlayimg} alt="" />
//                     </div>
//                 </div>
//             </div>
//                 <div className='left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
//                 <a href="#slide4" className="btn btn-circle text-5xl">❮</a>
//                 <a href="#slide2" className="btn btn-circle text-5xl">❯</a>
//                 </div>
//         </div>
//     )
// }

// export default HomePagesCard




import React, { useState } from 'react';
import cardImg1 from '../../../assets/Rectangle 6.png';
import cardImg2 from '../../../assets/Rectangle 8.png';
import cardImg3 from '../../../assets/Rectangle 9.png';
import cardImg4 from '../../../assets/Rectangle 4.png';
import overlayimg from '../../../assets/Rectangle 5.png';

const HomePagesCard = () => {
    const slides = [
        { img: cardImg1, label: "Cox’s Bazar" },
        { img: cardImg2, label: "Sreemangal" },
        { img: cardImg3, label: "Sundarbans" },
        { img: cardImg4, label: "Saint Martin" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div>
            <div className="carousel relative gap-20">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item relative duration-300 ${index === currentSlide ? "none" : "none"}`}
                    >
                        <img src={slide.img} alt={slide.label} />
                        <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between w-full">
                            <div>
                                <p className='absolute text-white top-[350px] text-4xl uppercase p-2'>
                                    {slide.label}
                                </p>
                                <img src={overlayimg} alt="Overlay" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {/* Previous and Next buttons */}
            <div className=" mt-12 flex justify-between w-32">
                <button onClick={handlePrev} className="btn btn-circle">❮</button>
                <button onClick={handleNext} className="btn btn-circle">❯</button>
            </div>
        </div>
    );
};

export default HomePagesCard;
