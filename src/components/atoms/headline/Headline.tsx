import React, { FC } from 'react';
import styled from './style.module.scss';

const Headline: FC<IHeadline> = ({
                             title,
                             subtitle,
                             className,
                         }) => (
                           <div className={`${styled.title_wrapper} ${className}`}>
                             <p className={styled.subtitle}>{subtitle}</p>
                             <p className={styled.title}>{title}</p>
                           </div>
);

interface IHeadline {
    title: string,
    subtitle: string,
    className?: string
}

Headline.defaultProps = {
    className: '',
};

export default Headline;
