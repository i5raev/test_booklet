import React, { FC } from 'react';
import styled from './style.module.scss';

const Image: FC<IImage> = ({
                             url,
                             className,
                             alt,
                         }) => (
                           <div className={`${styled.image_wrapper} ${className}`}>
                             <img src={url} alt={alt || 'image'} />
                           </div>
);

interface IImage {
    url: string,
    className?: string
    alt?: string
}

Image.defaultProps = {
    alt: 'image',
    className: '',
};

export default Image;
