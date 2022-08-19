import React from 'react';
import success from '../../../assets/images/success.png';
const StepsFour = () => {
  return (
    <div>
      <div className='success-icon'>
        <img src={success} alt='success' />
      </div>
      <div className='heading-wrapper'>
        <div className='heading'>Congratulations, Eren!</div>
        <p className='subtitle'>
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
      <button className='button create-workspace'>Launch Eden</button>
    </div>
  );
};

export { StepsFour };
