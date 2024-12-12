import React from 'react'

const Tabs = () => {

    const onTabChangeHandler = (e) => {
        console.log(e.target.id)
    }

    return (
        <div class="border-b border-gray-200 dark:border-gray-400 mb-4 md:mx-32">
            <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-3" role="presentation">
                    <button onClick={onTabChangeHandler} class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" >Food Categroy 1</button>
                </li>
            </ul>
        </div>
    )
}

export default Tabs