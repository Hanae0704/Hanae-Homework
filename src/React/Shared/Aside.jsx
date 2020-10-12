import React from 'react';
import styled from 'styled-components';

const Aside = ({auction}) => {

    console.log('Aside Auction', auction);

    const theAuction = (auction) ? auction 
    : { id: 64, title: 'Whatever - Fallback'};

    // const {
    //     id=64,
    //     title='whatever',
    //     } = auction;

    return (
        <AsideStyled className='Aside'>
            <img src={`/assets/img/auctions/${theAuction.id}/auction.jpg`} alt={theAuction.title}/>
            <h2>{theAuction.title}</h2>
        </AsideStyled>
    );
}

export default Aside;

const AsideStyled = styled.aside`

    img {
        max-width: 100%;
    }
    
`;