import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Products.css';
import image_drink from '../image_drink.png';



export default function Products({ usrDrink, usrIngredient }) {

    const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${usrDrink}`
    const ingredientURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${usrIngredient}`;
    const ingredientListURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const [products, setProducts] = useState(null);
    const [list, setList] = useState();


    useEffect(() => {
        axios.get(drinkURL)
            .then(response => {
                setProducts(response.data.drinks);
            }).catch(error => {
                console.log(error)
            })
    }, [drinkURL]);


    useEffect(() => {
        axios.get(ingredientURL)
            .then(response => {
                setProducts(response.data.drinks);
            }).catch(error => {
                console.log(error)
            })
    }, [ingredientURL]);


    useEffect(() => {
        axios.get(ingredientListURL)
            .then(response => {
                setList(response.data.drinks);
            }).catch(error => {
                console.log(error)
            })
    }, [ingredientListURL]);


    if (products) {
        return (
            <div className='mx-5 px-5 text-center'>
                {products.map(product => {
                    return <div key={product.idDrink} className='d-inline-flex'>
                        <div className='d-flex flex-column text-center m-4'>
                            <a href={`/${product.idDrink}`} target="_blank">
                                <img id="imgDrink" src={product.strDrinkThumb} className="rounded-circle my-4" alt='NA' />
                            </a>
                            <span id="drinkName">{product.strDrink}</span>
                        </div>
                    </div>
                })}
            </div>
        )

    } else if (list) {
        return (
            <div className='mx-5 p-5 text-center'>
                <u><h5 className='mt-2 text-light text-center'>Search Your drink by a name or an ingredient:</h5></u>
                {list
                    .sort((a, b) => a.strIngredient1.toLowerCase() > b.strIngredient1.toLowerCase() ? 1 : -1)
                    .map(listItem => {
                        return <b key={listItem.strIngredient1} className="text-secondary">{listItem.strIngredient1}, </b>
                    })}
                <p>
                    <img id="imgMain" src={image_drink} alt='NA' />
                </p>
            </div>
        )
    }
}