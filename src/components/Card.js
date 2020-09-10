import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Card() {
    return (
        <div className="cards">
            <h1>Dont miss out these EPIC places!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/image_1_vintage.jpg"
                            text="Get ready for the adventurous path to lead your serenity" label='Be Prepared'
                            path='/services'
                        />

                        <CardItem
                            src="images/image_3.jpg"
                            text="Enjoy every bits of moment lies ahead in the adventure" label='Adventure'
                            path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="images/image_2.jpg"
                            text="Have the journey beyond the horizon" label='Explore'
                            path='/services'
                        />

                        <CardItem
                            src="images/image_4.jpg"
                            text="Dare to live the life you always wanted" label='Take Risk'
                            path='/services'
                        />

                        <CardItem
                            src="images/image_5.jpg"
                            text="Witness the best moment in life" label='Experience'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;
