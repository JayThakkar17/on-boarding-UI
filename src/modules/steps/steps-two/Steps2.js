import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepsTwo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='heading-wrapper'>
        <div className='heading'>Let's set up a home for all your work</div>
        <p className='subtitle'>You can always create another workspace later.</p>
      </div>
      <form className='form'>
        <div className='input-control'>
          <label htmlFor='' className='label'>
            Workspace Name
          </label>
          <input
            type='text'
            name='workspace-name'
            id='workspace-name'
            placeholder='Eden'
          />
        </div>
        <div className='input-control'>
          <label htmlFor='' className='label'>
            Workspace URL <span className='optional'>(optional)</span>
          </label>
          <div className='workspace-url-wrapper'>
            <input
              className='workspace-url-name'
              disabled
              type='text'
              placeholder='www.eden.com/'
            />
            <input
              className='workspace-input'
              type='text'
              name='workspace-url'
              id='workspace-url'
              placeholder='Example'
            />
          </div>
        </div>
        <button
          onClick={() => navigate('/steps/3', { state: 3 })}
          className='button create-workspace'
        >
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export { StepsTwo };
