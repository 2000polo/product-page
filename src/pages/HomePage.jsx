import React from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import FoodCard from '../components/FoodCard';

const HomePage = () => {
    return (
        <>
            <Header />
            <Tabs />
            <div className="md:mx-32">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
        </>
    )
}

export default HomePage;