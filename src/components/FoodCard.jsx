import React from 'react'
import { BiFoodTag } from 'react-icons/bi';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { addToCart, removeItem, updateCartItemsCount } from '../slices/foods';
import { useDispatch, useSelector } from 'react-redux';

const FoodCard = (props) => {

    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state?.foods);
    const { dish_id, dish_name, dish_image, dish_price, dish_currency, dish_calories, dish_description, addonCat, dish_Availability, dish_Type } = props?.data

    const addItemHandler = (id) => {
        dispatch(addToCart({
            id: id
        }));
        dispatch(updateCartItemsCount())
    }
    const removeItemHandler = (id) => {
        dispatch(removeItem({
            id: id
        }));
        dispatch(updateCartItemsCount())
    }

    return (
        <div className="flex flex-col px-2 gap-2 border-b-2 pb-2 mt-2">
            <div className='flex w-full gap-2 justify-between'>

                <div className="flex flex-1 gap-3">
                    <div className="text-2xl pt-1">
                        {
                            dish_Type === 1 ?
                                <BiFoodTag color='red' />
                                :
                                <BiFoodTag color='green' />
                        }
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <div className="">
                            <h3 className='text-lg font-bold md:text-xl md:font-bold '>{dish_name}</h3>
                            <div className="flex text-base md:font-medium justify-between">
                                <h4>{dish_currency} {dish_price}</h4>
                                <h4>{dish_calories} Calories</h4>
                            </div>
                        </div>
                        <p className='text-gray-600 text-sm md:text-base'>{dish_description}</p>
                        {
                            dish_Availability &&
                            <div className="text-white flex items-center gap-9 bg-green-600 max-w-max px-2 py-0.5 rounded-3xl">
                                <button onClick={() => removeItemHandler(dish_id)}>
                                    <FaMinus />
                                </button>
                                <p className='font-medium text-xl'>{cart?.[dish_id] ? cart?.[dish_id] : 0}</p>
                                <button onClick={() => addItemHandler(dish_id)}>
                                    <FaPlus />
                                </button>
                            </div>
                        }
                        {
                            addonCat.length !== 0 && <p className='text-red-600'>Customizations Avialable</p>
                        }
                        {
                            !dish_Availability && <p className='text-red-600'>Not Available</p>
                        }
                    </div>
                </div>
                <div  >
                    <img className="relative inline-block h-28 w-28 rounded-md  object-cover object-center z-0" src={dish_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FoodCard;