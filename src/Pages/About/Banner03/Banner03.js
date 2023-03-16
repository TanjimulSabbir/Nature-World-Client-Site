import React from 'react';


const Banner03 = () => {
    return (
        <div className='UniversalMargin py-24'>
            <div className='md:flex md:flex-row-reverse md:justify-center md:items-center'>
                <img className='w-full md:w-5/12' src="https://templatekits.techeshta.com/nature-world/wp-content/uploads/sites/21/2023/01/galina-vase-small-plant.png" alt="" />

                <div className='w-full mt-14 md:mt-0'>
                    <img className='w-32 mb-3' src="http://localhost:3000/static/media/leaf-vector.ad003a027923f0a4d1eacf9d8ae73854.svg" alt="" />
                    <h1 className='UniversalHeadingText'>What <span className='Text-Primary leading-snug'>Is Our Mission</span></h1>
                    <p className='mt-8 text-justify'>Welcome to our plant website, where nature meets style and wellness. We believe that plants are more than just decorations - they are living, breathing companions that can transform your home or office into a sanctuary of beauty and serenity.
                    </p>
                    <p className='mt-5 text-justify'>At our website, we are dedicated to providing you with the best selection of plants, accessories, and information to help you cultivate your own personal paradise. Whether you're an experienced gardener or just starting out, our expert team is here to guide you every step of the way.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner03;