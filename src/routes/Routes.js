import React from 'react';
import { Route, Routes as BrowserRoutes, Navigate } from 'react-router-dom';
import { StepsFour } from '../modules/steps/steps-four';
import { StepsThree } from '../modules/steps/steps-three';
import { StepsTwo } from '../modules/steps/steps-two';
import { StepsPage } from '../pages/steps/StepsPage';

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path='/' element={<Navigate to='/steps/1' replace />} />
      <Route path='/steps/1' element={<StepsPage />} />
      <Route path='/steps/2' element={<StepsTwo />} index />
      <Route path='/steps/3' element={<StepsThree />} index />
      <Route path='/steps/4' element={<StepsFour />} index />
    </BrowserRoutes>
  );
};

export default Routes;
