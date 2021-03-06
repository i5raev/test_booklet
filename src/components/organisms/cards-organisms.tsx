import React, { FC } from 'react';
import styled from './style.module.scss';
import Card from '../molecules/card-molecules/Card';
import Button from '../atoms/button/button';
import { ICard } from '../../interfaces';

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

type ICardsOrganisms = {
    cards: ICard[],
    className?: string
}

CardsOrganisms.defaultProps = {
    className: '',
};

export default CardsOrganisms;
