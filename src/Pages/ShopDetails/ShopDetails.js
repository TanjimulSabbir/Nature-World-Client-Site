import React, { useContext, useEffect, useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Products from "../../JsonFiles/Products.json"
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { DBContext } from '../../Components/DataBaseContext/UserDBProvider';

const ShopDetails = () => {
    const [quantity, setQuantity] = useState(0);
    const { AddBooking } = useContext(DBContext)
    const [Btn, setBtn] = useState(1);
    const params = useParams();
    const MatchedProducts = Products?.find(product => product.id === Number(params.id))
    const { id, img, title, price } = MatchedProducts;

    // useEffect(() => {
    //     const GetItems = localStorage.getItem("AddToCart");
    //     if (quantity === 0) {
    //         return;
    //     }
    //     if (GetItems) {
    //         let ParseGetItems = JSON.parse(GetItems);
    //         let MatchedItem = ParseGetItems?.find(item => item.id === id);
    //         let MatchedIndex = ParseGetItems.indexOf(MatchedItem)

    //         if (MatchedIndex >= 0) {
    //             const previousQuantity = ParseGetItems[MatchedIndex].quantity;
    //             ParseGetItems[MatchedIndex].quantity = previousQuantity + quantity;

    //             localStorage.setItem("AddToCart", JSON.stringify(ParseGetItems))
    //             toast.success(`You have Successfully added ` + quantity + ` items.`)
    //         }
    //         else {
    //             ParseGetItems.push({ id, quantity, title })
    //             localStorage.setItem("AddToCart", JSON.stringify(ParseGetItems))
    //             toast.success(`You have Successfully added ` + quantity + ` items.`)
    //         }
    //         return setQuantity(0);
    //     }

    //     localStorage.setItem("AddToCart", JSON.stringify([{ id, quantity, title }]))
    //     toast.success(`You have Successfully added ` + quantity + ` items.`)
    //     setQuantity(0);

    // }, [quantity])

    const AddToCart = () => {
        if (Btn === 0) {
            return toast("Product Quantity Empty!")
        }
        AddBooking({ ...MatchedProducts, ...{ Quantity: Btn } });
        setBtn(0)
    }
    return (
        <div className='bg-green-50'>
            <div className='UniversalPadding md:px-0 py-24 flex flex-col space-y-14 md:space-y-0 md:flex-row justify-center items-center'>
                <div className='w-full md:w-4/12 flex justify-center'>
                    <img className='md:w-full' src={img} alt='' />
                </div>
                <div className='w-full md:w-7/12'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
                    <p className='mt-12'>Are you new to gardening and not sure where to start? Check out our list of the top 10 easy-to-grow plants for beginners! As the weather gets colder, it's important to adjust your plant care routine to keep your indoor plants healthy. Here are some tips! Did you know that adding plants to your office space can have a positive impact on your health and productivity? As the weather gets colder, it's important to adjust your plant care routine to keep your indoor plants healthy.
                    </p>
                    <div className='text-2xl flex mt-8 space-x-6 border-y py-6 w-5/6 justify-start'>
                        <h1 className="text-green-500">{price}</h1>
                        <h3 className='rating'>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </h3>
                    </div>
                    <div className='flex mt-8 space-x-6 justify-start items-center'>
                        <div className='flex space-x-3'>
                            <button disabled={Btn <= 1 ? true : false} className=" rounded font-extrabold px-3 py-2 border" onClick={() => setBtn(Btn - 1)}>-</button>
                            <p className='text-center w-24 rounded text-white bg-emerald-600 py-2 border-y border-emerald-600'>{Btn}</p>
                            <button className="font-extrabold px-3 py-2 border rounded" onClick={() => setBtn(Btn + 1)}>+</button>
                        </div>
                        <div>
                            <button onClick={() => AddToCart()} className='Btn-Primary'>Add to Cart <FontAwesomeIcon className='ml-2' icon={faCartShopping}></FontAwesomeIcon></button>
                        </div>
                        <div>
                            <Link to="/booking" className='Btn-Primary'>View Cart Details <FontAwesomeIcon className='ml-2' icon={faCartShopping}></FontAwesomeIcon></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;