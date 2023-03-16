import React from 'react';
import { GoPrimitiveDot } from "react-icons/go";
const CustomerReviews = () => {

    const dot = <>
        <GoPrimitiveDot className='text-white' /></>
    return (
        <div>
            <div className="carousel w-full mx-auto">
                <div id="item1" className="carousel-item">
                    <div>
                        <img className='w-40 h-40 rounded-full mx-auto' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/Wanda-C.-Gutierrez.png" alt="" />
                        <h1 className='text-3xl mt-5 flex justify-center'>Beautiful and healthy plants!</h1>
                        <p className='mt-8 flex justify-center w-1/2 mx-auto text-justify'>I ordered a few plants from this website and I am so happy with my purchase. The plants arrived quickly and were in great condition. They are thriving in my home and adding so much beauty to my space.</p>
                        <h2 className='text-3xl mt-6 flex justify-center'>John Smith</h2>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div>
                        <img className='w-40 h-40 rounded-full mx-auto' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/Daniel-J.-Woodley.png" alt="" />
                        <h1 className='text-3xl mt-5 flex justify-center'>Excellent customer service</h1>
                        <p className='mt-8 flex justify-center w-1/2 mx-auto text-justify'>I had a question about one of the plants I was interested in purchasing and reached out to customer service. They were so helpful and responsive, and I ended up ordering several plants that I am now in love with!</p>
                        <h2 className='text-3xl mt-6 flex justify-center'>Jane Doe</h2>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div>
                        <img className='w-40 h-40 rounded-full mx-auto' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/Frances-C.-Borel.png" alt="" />
                        <h1 className='text-3xl mt-5 flex justify-center'>Fast shipping and well-packaged</h1>
                        <p className='mt-8 flex justify-center w-1/2 mx-auto text-justify'>I was a bit nervous about ordering plants online, but this website exceeded my expectations. The plants were shipped quickly and arrived in great condition thanks to the careful packaging. I will definitely be ordering from here again!</p>
                        <h2 className='text-3xl mt-6 flex justify-center'>Sarah Lee</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full ml-6 gap-2 mt-16">
                <a href="#item1" className="btn btn-xs focus:bg-green-600">{dot}</a>
                <a href="#item2" className="btn btn-xs focus:bg-green-600">{dot}</a>
                <a href="#item3" className="btn btn-xs focus:bg-green-600">{dot}</a>
            </div>

        </div>
    );
};

export default CustomerReviews;