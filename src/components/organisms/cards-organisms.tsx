import React, { FC } from 'react';
import styled from './style.module.scss';
import Card from '../molecules/card-molecules/Card';
import Button from '../atoms/button/button';

const CardsOrganisms: FC<ICardsOrganisms> = ({
                                                 cards,
                                         className,
                                     }) => (
                                       <>
                                         <div className={`${styled.cards} ${className}`}>
                                           {cards.map((item) => (
                                             <Card {...item} key={item.id} />
                                           ))}
                                         </div>
                                       </>
    );

interface EnumObj {
    id: number,
    url: string,
    title: string,
    logo: string,
    subtitle: string,
}

interface ICardsOrganisms {
    cards: [{
        id: number,
        url: string,
        title: string,
        logo: string,
        subtitle: string,
    }],
    className?: string
}

CardsOrganisms.defaultProps = {
    className: '',
};

export default CardsOrganisms;
