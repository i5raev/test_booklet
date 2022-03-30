import React, { FC } from 'react';
import CardsOrganisms from '../organisms/cards-organisms';
import styled from './style.module.scss';
import Button from '../atoms/button/button';
import Image from '../atoms/image/Image';
import BgImage from '../../assets/image/bg-image.png';
import { ICard } from '../../interfaces';

const MainTemplate: FC<IMainTemplate> = ({
                                             cards,
                                             }) => (
                                               <div className={styled.main_template}>
                                                 <Image
                                                   url={BgImage}
                                                   className={styled.welcome_image}
                                                   alt="welcome_image"
                                                 />
                                                 <CardsOrganisms
                                                   cards={cards}
                                                   className={styled.cards}
                                                 />
                                                 <div className={styled.load_more}>
                                                   <Button>Load more</Button>
                                                 </div>
                                               </div>

);

type IMainTemplate = {
    cards: ICard[],
}

export default MainTemplate;
