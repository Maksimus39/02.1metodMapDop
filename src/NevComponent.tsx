import React from 'react';

type NevComponentType = {
    topCars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string
}
export const NevComponent = (props: NevComponentType) => {
    return (
            <tr>
                {props.topCars.map((objectFromCarsArray, index) => {
                    return (
                        <th key={index}>
                            <table>{objectFromCarsArray.manufacturer}</table>
                            <table> {objectFromCarsArray.model}</table>
                        </th>
                    )
                })}
            </tr>
    )
}