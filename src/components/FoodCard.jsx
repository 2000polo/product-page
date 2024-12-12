import React from 'react'
import { BiFoodTag } from 'react-icons/bi';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const FoodCard = () => {
    return (
        <div className="flex flex-col px-2 gap-2 border-b-2 pb-2 mt-2">
            <div className='flex gap-2 justify-between'>

                <div className="flex gap-3">
                    <div className="text-2xl pt-1">
                        <BiFoodTag />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="">
                            <h3 className='text-xl font-medium '>Food name and  Title</h3>
                            <div className="flex font-medium justify-between">
                                <h4>SAR 7.95</h4>
                                <h4>15 Calories</h4>
                            </div>
                        </div>
                        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis molestias reiciendis totam. Enim, modi consequatur.</p>
                        <div className="text-white flex items-center gap-9 bg-green-600 max-w-max px-2 py-0.5 rounded-3xl">
                            <button>
                                <FaMinus />
                            </button>
                            <p className='font-medium text-xl'>0</p>
                            <button>
                                <FaPlus />
                            </button>
                        </div>

                        <p className='text-red-600'>Customization Not Avialable</p>
                    </div>
                </div>
                <div >
                    <img className="w-80 md:w-40 object-cover rounded-md" src="https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?cs=srgb&dl=basil-delicious-food-459469.jpg&fm=jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FoodCard;