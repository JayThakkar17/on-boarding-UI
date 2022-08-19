import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Steps.css';

const StepComponent = () => {
  const pathName = useLocation().state;

  const [stepNumber, setStepNumber] = useState(1);

  useEffect(() => {
    if (pathName) {
      setStepNumber(pathName);
    } else {
      setStepNumber(1);
    }
  }, [pathName]);

  return (
    <div>
      <div className='stepper-wrapper'>
        <div className='stepper-item completed'>
          <div className='step-counter active'>1</div>
        </div>
        <div
          className={`stepper-item ${stepNumber >= 2 ? 'current' : ''} ${
            stepNumber >= 2 ? 'completed' : 'active'
          }`}
        >
          <div className='step-counter'>2</div>
        </div>
        <div
          className={`stepper-item  ${stepNumber >= 3 ? 'current' : ''} ${
            stepNumber >= 3 ? 'completed' : 'active'
          }`}
        >
          <div className='step-counter'>3</div>
        </div>
        <div
          className={`stepper-item ${stepNumber >= 4 ? 'current' : ''} ${
            stepNumber === 4 ? 'completed' : 'active'
          }`}
        >
          <div className='step-counter'>4</div>
        </div>
      </div>
    </div>
  );
};

export { StepComponent };
