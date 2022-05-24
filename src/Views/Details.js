import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Products from './Products';


export default function Details() {
    const { id } = useParams();
    const detailsURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const [details, setDetails] = useState();


    useEffect(() => {
        axios.get(detailsURL)
            .then(response => {
                setDetails(response.data.drinks);
            }).catch(error => {
                console.log(error)
            })
    }, [detailsURL]);


    if (details) {
        return (
            <div className='mx-5 px-5 text-center'>
                <h2 id="drinkName" className='my-4'>{details[0].strDrink}</h2>
                <img id="imgDrinkdetail" src={details[0].strDrinkThumb} className="rounded-circle mb-4" alt='NA' />
                <div className='d-flex flex-row justify-content-center'>
                    <div className='px-5 mt-4'>
                        <h5 id="drinkName" className='d-flex'>Ingredients:</h5>
                        {details[0].strIngredient1 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient1}</li> : null}
                        {details[0].strIngredient2 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient2}</li> : null}
                        {details[0].strIngredient3 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient3}</li> : null}
                        {details[0].strIngredient4 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient4}</li> : null}
                        {details[0].strIngredient5 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient5}</li> : null}
                        {details[0].strIngredient6 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient6}</li> : null}
                        {details[0].strIngredient7 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient7}</li> : null}
                        {details[0].strIngredient8 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient8}</li> : null}
                        {details[0].strIngredient9 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient9}</li> : null}
                        {details[0].strIngredient10 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient10}</li> : null}
                        {details[0].strIngredient11 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient11}</li> : null}
                        {details[0].strIngredient12 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient12}</li> : null}
                        {details[0].strIngredient13 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient13}</li> : null}
                        {details[0].strIngredient14 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient14}</li> : null}
                        {details[0].strIngredient15 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strIngredient15}</li> : null}
                    </div>
                    <div className='px-5 mt-4'>
                        <h5 id="drinkName" className='d-flex'>Messures:</h5>
                        {details[0].strMeasure1 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure1}</li> : null}
                        {details[0].strMeasure2 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure2}</li> : null}
                        {details[0].strMeasure3 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure3}</li> : null}
                        {details[0].strMeasure4 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure4}</li> : null}
                        {details[0].strMeasure5 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure5}</li> : null}
                        {details[0].strMeasure6 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure6}</li> : null}
                        {details[0].strMeasure7 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure7}</li> : null}
                        {details[0].strMeasure8 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure8}</li> : null}
                        {details[0].strMeasure9 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure9}</li> : null}
                        {details[0].strMeasure10 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure10}</li> : null}
                        {details[0].strMeasure11 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure11}</li> : null}
                        {details[0].strMeasure12 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure12}</li> : null}
                        {details[0].strMeasure13 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure13}</li> : null}
                        {details[0].strMeasure14 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure14}</li> : null}
                        {details[0].strMeasure15 !== null ? <li className='text-info d-flex flex-row justify-content-start'>{details[0].strMeasure15}</li> : null}
                    </div>
                </div>
                <h5 id="drinkName" className='mt-4'>Instructions:</h5>
                <div className='d-inline-flex justify-content-center text-info w-50'>{details[0].strInstructions}</div>
                <h5 className='mt-4'>Cheers!!!</h5>
            </div>
        )

    } else {
        return (<Products />)
    }
}