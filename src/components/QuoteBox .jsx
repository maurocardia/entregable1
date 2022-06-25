import React from 'react';
import quotes from '/Users/mauricio carvajal/reack/entregable1/entregable1/src/quotes.json'

const QuoteBox  = ({randomColor, change}) => {
    return (
        <div>
            <div className='containerHead'>
                <h1 style={{color: randomColor}}>“</h1>
                <p className='phrase' style={{color: randomColor}}>{quotes[change].quote}</p>

            </div>
            

            <div className='containerAuthor'>
                <p className='author' style={{color: randomColor}}>{quotes[change].author}</p>
                
            </div>
            
        </div>
    );
};

export default QuoteBox ;