import React, { useState } from 'react';

import Header from 'components/Header';
import { RecieverNameInput } from 'components/Recievernameinput';
import { ConsiderationInput } from 'components/Considerationinput';
import { TextAreaInput } from 'components/Textareainput';
import { ActionInput } from 'components/Actioninput';
import { UserNameInput } from 'components/Usernameinput';
import { Summary } from 'components/summary';
import { Button } from 'components/button';
import { Email } from 'components/EmailInput';
import { Checkbox } from 'components/Checkbox';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [recieverName, setRecieverName] = useState('');
  const [consideration, setConsideration] = useState('');
  const [textArea, setTextArea] = useState('');
  const [action, setAction] = useState('');
  const [userName, setUserName] = useState('');

  const handleStepIncrease = (shouldIncrease) => {
    if (shouldIncrease && counter < 1) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        {/* Where we gather the message */}
        {counter === 0 && (
          <div className="form-wrapper">
            <Header />
            <RecieverNameInput recieverName={recieverName} setRecieverName={setRecieverName} />
            <ConsiderationInput consideration={consideration} setConsideration={setConsideration} />
            <TextAreaInput textArea={textArea} setTextArea={setTextArea} />
            <ActionInput action={action} setAction={setAction} />
            <UserNameInput userName={userName} setUserName={setUserName} />
            <input className="button primary-button" type="submit" value="Summarize" onClick={() => handleStepIncrease(true)} />
          </div>
        )}

        {/* Where we summarize the message */}
        {counter === 1 && (
          <div className="form-wrapper">
            <Header />
            <Summary
              recieverName={recieverName}
              consideration={consideration}
              textArea={textArea}
              action={action}
              userName={userName} />
            <div className="group-wrapper">
              <Email email="Recievers Email" />
              <Email email="Your Email" />
            </div>
            <div className="group-wrapper">
              <Checkbox label="I accept the terms & conditions" />
              <Button button="Send Email" />
              <button className="button secondary-button" type="button" onClick={() => handleStepIncrease(false)}>Edit</button>
            </div>
          </div>
        )}
        {/* My page counter {counter} */}
      </div>
    </div>
  );
}