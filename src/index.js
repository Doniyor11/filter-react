import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from "./FilterableProductTable";
import App from './app'

// const PRODUCTS = [
//     {
//         price: '$3.10', stocked: true, name: 'Shaftoli'
//     },
//     {
//         price: '$3.10', stocked: true, name: 'Gilos'
//     },
//     {
//         price: '$3.10', stocked: false, name: 'Nok'
//     },
//     {
//         price: '$3.10', stocked: true, name: 'Sut'
//     },
//     {
//         price: '$3.10', stocked: false, name: 'Olma'
//     },
//     {
//         price: '$3.10', stocked: true, name: 'Suv'
//     },
//
// ]

// ReactDOM.render( <FilterableProductTable products={PRODUCTS} />,
ReactDOM.render( <App />,
document.getElementById('root'));