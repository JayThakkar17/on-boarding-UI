import React, { useState } from 'react';
import { Card } from '../../../core/components/card';
import user from '../../../assets/images/card1.png';
import shared from '../../../assets/images/card2.png';
import { useNavigate } from 'react-router-dom';

const StepsThree = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  return (
    <div>
      <div className='heading-wrapper'>
        <div className='heading'>How are you planning to use Eden?</div>
        <p className='subtitle'>
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className='cards'>
        <div
          onClick={() => {
            setSelectedCard('first');
          }}
          className={`${selectedCard === 'first' ? 'cardActive' : ''}`}
        >
          <Card
            cardImg={user}
            cardLabel='For myself'
            cardDesc='Write better. Think more clearly. Stay organized'
          />
        </div>
        <div
          onClick={() => setSelectedCard('second')}
          className={`${selectedCard === 'second' ? 'cardActive' : ''}`}
        >
          <Card
            cardImg={shared}
            cardLabel='With my team'
            cardDesc='Wikis, docs, tasks& projects, all in one place.'
          />
        </div>
      </div>
      <form className='form'>
        <button
          onClick={() => navigate('/steps/4', { state: 4 })}
          className='button create-workspace'
        >
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export { StepsThree };
