import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const FontAwesome = require('react-fontawesome');

const FinancialDetails = () => {
    const outputDetails = [
        <p>Earnings per share is an indicator of a
        company's profitability calculated
        by dividing net profit by common shares outstanding.
        </p>,
        <p>
        The price-to-earnings ratio reflects investors' assessments of those future earnings. The share price of the 
        company's stock is divided by its' EPS to obtain the P/E ratio.
        </p>,
        <p>
        The beta is a measure of a stock's volatility in comparison to the overall market. A beta
        greater than 1 shows that the stock is more volatile than the market.
        </p>,
        <p>
        The price-to-book ratio or P/B ratio measures whether a stock is over or undervalued 
        by comparing the net value (assets - liabilities) of a company to its market 
        capitalization. Essentially, the P/B ratio divides a stock's share price by its 
        book value per share (BVPS). 
        </p>,
        <p>
        The PEG ratio measures the relationship between the price/earnings ratio and 
        earnings growth. This ratio provides a more complete picture of whether a 
        stock's price is overvalued or undervalued by analyzing both today's earnings and 
        the expected growth rate.
        </p>
        ]

    let index = 0;
    const detailsArray = [];
    outputDetails.forEach(el => {
        deatilsArray.push(
            
        )
    })

    return(
        <FontAwesome class="fa fa-info-circle" aria-hidden="true" />
    )
}

export default FinancialDetails;