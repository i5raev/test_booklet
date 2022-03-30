import React, { FC, useEffect, useState } from 'react';
import MainTemplate from '../templates/main-template';
import { Cards } from '../../data';
import { ICard } from '../../interfaces';

const MainPage: FC = () => {
   const [state, setState] = useState<ICard[]>([]);
   useEffect(() => {
       setState(Cards);
   }, []);
       return (
         <MainTemplate cards={state} />
       );
};

export default MainPage;
