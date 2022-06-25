import React from 'react';

const ButtomQuote = ({randomColor,buttonChange}) => {
    return (
        <div className='containerButton'>
            <button className='button' style={{backgroundColor: randomColor }} onClick={buttonChange}><i className='iconButton' class="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default ButtomQuote;