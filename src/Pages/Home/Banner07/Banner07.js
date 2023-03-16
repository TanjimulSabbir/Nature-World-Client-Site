import React from 'react';
import Customer from './Customer';


const Banner07 = () => {
    return (
        <div className="bg-cover bg-no-repeat w-full min-h-screen bg-fixed py-24" style={{ backgroundImage: "url('https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/review-bg-img.png')" }}>
            <div>
                <div className='mt-10'>
                    <div className='flex justify-center items-center flex-col relative' >
                        <img className='w-28 h-28 absolute bottom-4' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/leaf-vector.svg" alt="" />
                        <h1 className='UniversalHeadingText'>What Our <span className='Text-Primary'>Customer Say</span></h1>
                    </div>
                    <div className='mt-10'>
                        <Customer></Customer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner07;