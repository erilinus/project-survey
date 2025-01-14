import React from 'react';

export const Button = ({ button }) => {
  return (
    <div>
      <button type="submit" className="button primary-button">
        {button}
      </button>
    </div>
  )
}