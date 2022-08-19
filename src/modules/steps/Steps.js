import React from 'react';
import { useNavigate } from 'react-router-dom';

const Steps = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='heading-wrapper'>
        <div className='heading'>Welcome! First things first...</div>
        <p className='subtitle'>You can always change them later.</p>
      </div>
      <form className='form'>
        <div className='input-control'>
          <label htmlFor='' className='label'>
            Full Name
          </label>
          <input
            type='text'
            name='fullname'
            id='fullname'
            placeholder='Steve Jobs'
          />
        </div>
        <div className='input-control'>
          <label htmlFor='' className='label'>
            Display Name
          </label>
          <input
            type='text'
            name='displayname'
            id='displayname'
            placeholder='Steve'
          />
        </div>
        <button
          onClick={() => navigate('/steps/2', { state: 2 })}
          className='button create-workspace'
        >
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export { Steps };
