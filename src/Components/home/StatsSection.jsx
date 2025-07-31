import React, { useState, useEffect } from 'react';
import gridImg from '../../assets/sectionBg/gridImage.jpg';

function StatsSection() {
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const [hours, setHours] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const startTime = Date.now();

        const animateCount = (endValue, setter) => {
            const increment = endValue / (duration / 16);
            
            const updateCounter = () => {
                const elapsed = Date.now() - startTime;
                if (elapsed < duration) {
                    setter(Math.min(Math.floor(increment * (elapsed / 16)), endValue));
                    requestAnimationFrame(updateCounter);
                } else {
                    setter(endValue);
                }
            };
            updateCounter();
        };

        animateCount(157, setProjects);
        animateCount(86, setClients);
        animateCount(924, setHours);
        animateCount(13, setExperience);
    }, []);

    return (
        <section className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 bg-white py-8 md:py-12'>
            {/* Left Stats Section */}
            <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] p-4 md:p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[500px] lg:max-w-[600px]">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                            backgroundImage: `url(${gridImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    
                    {/* Grid with White Cells */}
                    <div className="absolute inset-0 m-auto w-[95%] h-[95%] grid grid-cols-2 grid-rows-2 p-1 md:p-2">
                        {[
                            { value: projects, label: 'PROJECTS DONE' },
                            { value: clients, label: 'HAPPY CLIENTS' },
                            { value: hours, label: 'WORKING HOURS' },
                            { value: experience, label: 'YEARS OF EXPERIENCE' },
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white flex flex-col items-center justify-center space-y-2 md:space-y-4"
                            >
                                <p 
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-cover bg-center"
                                    style={{ 
                                        backgroundImage: `url(${gridImg})`,
                                        backgroundPosition: `${index % 2 ? 'right' : 'left'} ${index < 2 ? 'top' : 'bottom'}`
                                    }}
                                >
                                    {item.value}
                                </p>
                                <p 
                                    className="text-[10px] md:text-xs lg:text-sm font-light tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-cover bg-center"
                                    style={{ 
                                        backgroundImage: `url(${gridImg})`,
                                        backgroundPosition: `${index % 2 ? 'right' : 'left'} ${index < 2 ? 'top' : 'bottom'}`
                                    }}
                                >
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-1/2 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-md lg:max-w-lg">
                    <h5 className="text-sm md:text-base lg:text-lg font-light mb-3 md:mb-6 text-left tracking-wider">
                        NUMBERS
                    </h5>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 text-left leading-tight">
                        Make with love all what we do.
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-3 md:mb-6 leading-relaxed text-left">
                        Our team takes over everything, from an idea and concept development to realization. 
                        We believe in traditions and incorporate them within our innovations. All our projects 
                        incorporate a unique artistic image and functional solutions.
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base italic leading-relaxed text-left">
                        Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default StatsSection;