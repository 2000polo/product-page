import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentFoodCategory } from '../slices/foods';

const Tabs = () => {

    const dispatch = useDispatch();
    const { foodCategories, currentCategory } = useSelector((state) => state?.foods);

    const onTabChangeHandler = (e) => {
        console.log(e.target.id)
        dispatch(updateCurrentFoodCategory({
            category_id: e.target.id
        }))
    }

    return (
        <div className="border-b border-gray-200 dark:border-gray-400  md:mx-32">
            <ul className="flex flex-nowrap overflow-x-scroll -pb-px no-scrollbar" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                {
                    foodCategories?.map((category, i) => {
                        return (

                            <li key={category + i} className="mr-3" role="presentation">
                                <button onClick={onTabChangeHandler}
                                    className={`inline-block
                                rounded-t-lg py-4 px-4 text-sm font-medium text-center 
                                 border-b-2 text-nowrap
                                 ${category?.value == currentCategory ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500'}
                                 `}
                                    id={category.value} data-tabs-target="#profile"
                                >{category.label}</button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Tabs