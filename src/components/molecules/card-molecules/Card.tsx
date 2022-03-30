import React, { FC } from 'react';
import styled from './style.module.scss';

import Headline from '../../atoms/headline/Headline';
import Image from '../../atoms/image/Image';
import { ICard } from '../../../interfaces';

const Card: FC<ICard> = ({ url, title, logo, subtitle, className }) => (
  <div className={`${styled.card_wrapper} ${className}`}>
    <Image
      url={url}
      className={styled.card_image}
    />
    <Image
      url={logo}
      className={styled.logo}
    />
    <Headline
      title={title}
      subtitle={subtitle}
      className={styled.headline}
    />
  </div>
);

export default Card;
