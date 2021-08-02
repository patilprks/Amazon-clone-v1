import { StarIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image";
import Currency from 'react-currency-formatter';
import { removeFromBasket, addToBasket } from "../slices/basketSlice";
import { useDispatch } from 'react-redux';

const checkoutProduct = ({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) => {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime
        };
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit='contain'/>
            <div className='col-span-3 mx-5'>
                <p>{ title }</p>
                <div className='flex'>
                    { Array(rating)
                    .fill()
                    .map((_, i)=> (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'> { description }</p>

                        <Currency quantity={price} currency='INR' />

                        {hasPrime && (
                            <div className='flex items-center space-x-2'>
                            <img 
                            loading='lazy'
                            className='w-12'
                            src='http://links.papareact.com/fdw'
                            alt='' />

                            <p className='text-xs text0gray-500'>Fre Next-day Delivery</p>
                            </div>
                        )}
                        

            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-content'>
                <button className='button' onClick={addItemToBasket}>Add To Basket</button>
                <button className='button' onClick= {removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default checkoutProduct
