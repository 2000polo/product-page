import React, { useEffect } from 'react';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import FoodCard from '../components/FoodCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from '../slices/foods';
import Loading from './Loading';

const HomePage = () => {

    const dispatch = useDispatch();
    const { status, error, selectedCategoryFood, cartCount } = useSelector((state) => state?.foods)

    useEffect(() => {
        if (status?.foods === 'idle') {
            dispatch(fetchFoods());
        }
    }, [status?.foods, dispatch]);

    console.log(status)

    return (
        <>
            <div className="fixed top-0 right-0 left-0 bg-white z-10">
                <Header />
                <Tabs />
            </div>
            {
                status.foods === 'loading' ?
                    <div className="h-screen w-screen flex items-center justify-center">
                        <Loading />
                    </div>
                    :
                    <div className="md:mx-32 mt-28">
                        {
                            selectedCategoryFood?.map((dish) => {
                                return <FoodCard data={dish} />
                            })
                        }

                    </div>
            }
        </>
    )
}

export default HomePage;