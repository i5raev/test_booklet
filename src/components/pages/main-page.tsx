import React, { FC } from 'react';
import MainTemplate from '../templates/main-template';
import { Cards } from '../../data';

const MainPage: FC = () => (
  <MainTemplate cards={Cards} />
);

export default MainPage;
