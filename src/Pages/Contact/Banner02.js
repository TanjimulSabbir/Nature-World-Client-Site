import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Banner02 = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        // const formTarget = event.target
        // const first_name = formTarget.first_name.value
        // const last_name = formTarget.last_name.value
        // const email = formTarget.email.value
        // const message = formTarget.message.value

        toast.success("Thank You for contact with us. We will response your Critoria as soon as possible. Stay with Us.")
    }

    return (
        <div>
            <section className="UniversalPadding bg-green-50 py-24">
                <div className="max-w-7xl mx-auto mid-lg:grid mid-lg:grid-cols-2 mid-lg:gap-8">
                    <div className="relative">
                        <h2 className="UniversalHeadingText font-extrabold tracking-tight text-gray-900">
                            Get in Touch With Us
                        </h2>
                        <p className="mt-16 text-lg text-gray-600">
                            Have a question, comment, or just want to say hi? Fill out the form below to send us a message and we'll get back to you as soon as possible.
                            Get in touch with us today to learn more about our plants and services. Whether you have a question about a specific plant, need help choosing the perfect greenery for your space, or want to place an order, our team is here to assist you. You can reach us by phone, email, or through our contact form below. We look forward to hearing from you!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-10 mid-lg:ml-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label for="first_name" className="block text-sm font-medium text-gray-700">First name</label>

                                <input type="text" name="first_name" id="first_name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label for="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" name="last_name" id="last_name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="email" name="email" id="email" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mt-6">
                            <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Banner02;