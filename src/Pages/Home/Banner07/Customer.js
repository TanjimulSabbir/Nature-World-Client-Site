import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const Customer = () => {
    const dot = <>
        <GoPrimitiveDot className='text-white' /></>
    return (
        <div>
            <div className="carousel w-full">
                <div className="carousel-item relative w-full">
                    <div id="slide1">
                        <img className='w-40 h-40 rounded-full mx-auto' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/Wanda-C.-Gutierrez.png" alt="" />
                        <h1 className='text-3xl mt-5 flex justify-center'>Beautiful and healthy plants!</h1>
                        <p className='mt-8 flex justify-center px-2 md:px-0 md:w-1/2 mx-auto text-justify'>I ordered a few plants from this website and I am so happy with my purchase. The plants arrived quickly and were in great condition. They are thriving in my home and adding so much beauty to my space.</p>
                        <h2 className='text-3xl mt-6 flex justify-center'>Clara Smith</h2>
                    </div>
                </div>
                <div className="carousel-item relative w-full">
                    <div id="slide2">
                        <img className='w-40 h-40 rounded-full mx-auto' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/Daniel-J.-Woodley.png" alt="" />
                        <h1 className='text-3xl mt-5 flex justify-center'>Excellent customer service</h1>
                        <p className='mt-8 flex justify-center px-2 md:px-0 md:w-1/2 mx-auto text-justify'>I had a question about one of the plants I was interested in purchasing and reached out to customer service. They were so helpful and responsive, and I ended up ordering several plants that I am now in love with!</p>
                        <h2 className='text-3xl mt-6 flex justify-center'>Jane Doe</h2>
                    </div>
                </div>
                <div className="carousel-item relative w-full">
                    <div id="slide3">
                        <img className='w-40 h-40 rounded-full mx-auto' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/Frances-C.-Borel.png" alt="" />
                        <h1 className='text-3xl mt-5 flex justify-center'>Fast shipping and well-packaged</h1>
                        <p className='mt-8 flex justify-center px-2 md:px-0 md:w-1/2 mx-auto text-justify'>I was a bit nervous about ordering plants online, but this website exceeded my expectations. The plants were shipped quickly and arrived in great condition thanks to the careful packaging. I will definitely be ordering from here again!</p>
                        <h2 className='text-3xl mt-6 flex justify-center'>Sarah Lee</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full mt-10 py-2 gap-2">
                <a href="#slide1" className="flex w-3 h-3 bg-gray-900 rounded-full"></a>
                <a href="#slide2" className="flex w-3 h-3 bg-gray-200 rounded-full"></a>
                <a href="#slide3" className="flex w-3 h-3 bg-teal-500 rounded-full"></a>
            </div>
        </div>
    );
};

export default Customer;