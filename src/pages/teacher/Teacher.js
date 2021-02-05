import React, { useState } from 'react';
import './Teacher.css';

import TeacherSelect from '../../components/teacher/TeacherSelection';
import TeacherSettings from '../../components/teacher/TeacherSettings';
import TeacherCounter from '../../components/teacher/TeacherCounter';
import TeacherAttendance from '../../components/teacher/TeacherAttendance';


const Teacher = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("{{name}}"); //TODO get name from ?
  const [selection, setSelection] = useState(null);
  const [numOfStudents, setNumOfStudents] = useState(0);
  const [counterValue, setCounterValue] = useState(90000);
  const [counterComplete, setCounterComplete] = useState(false);
  const [code, setCode] = useState("{{CODE}}");
  //const [popupVisible, setPopupVisible] = useState(false);

  const handleNextButtonClick = () => {
    setStep(2);
  };

  const handleGenerateButtonClick = () => {
    //TODO http request to get the verification code
    //setCode(...)
    setStep(3);
  }

  const handleBackButtonClick = () => {
    setStep(1);
  };

  const handleGoToVerifyButtonClick = () => {
    //TODO http request to get the number of students
    //setNumOfStudents(...)

    /*if (counterComplete) {
      setStep(4);
    } else {
      setPopupVisible(true);
    }*/
    setStep(4);
  }

  const handleGoToSelectionButtonClick = () => {
    setStep(1);
  };

  const handleSelectionChange = selectedItem => {
    setSelection(selectedItem)
  }

  const handleCounterValueChange = (value) => {
    setCounterValue(value);
  }

  const handleCounterComplete = (isComplete) => {
    setCounterComplete(isComplete);
  }

  return (
    <div className="teacher__main">
      <div className="teacher__container">
        {step === 1 && (
          <TeacherSelect
            name={name}
            onSelectionChange={handleSelectionChange}
          />
        )}
        {step === 2 && (
          <TeacherSettings
            selection={selection}
            onChangeCounterValue={handleCounterValueChange}
          />
        )}
        {step === 3 && (
          <TeacherCounter
            counterValue={counterValue}
            code={code}
            onCounterComplete={handleCounterComplete}
          />
        )}
        {step === 4 && <TeacherAttendance numOfStudents={numOfStudents} />}
      </div>
      <div className="teacher__buttons">
        {step === 1 && (
          <>
            <button
              type="button"
              id="nextButton"
              className="teacher__button"
              onClick={handleNextButtonClick}
              disabled={!selection}
            >
              Tovább
            </button>
            <button
              type="button"
              id="signoutButton"
              className="teacher__button"
            >
              Kijelentkezés
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <button
              type="button"
              id="generateButton"
              className="teacher__button"
              onClick={handleGenerateButtonClick}
            >
              Kód generálás
            </button>
            <button
              type="button"
              id="backButton"
              className="teacher__button"
              onClick={handleBackButtonClick}
            >
              Vissza
            </button>
          </>
        )}
        {step === 3 && (
          <button
            type="button"
            id="goToVerifyButton"
            className="teacher__button"
            onClick={handleGoToVerifyButtonClick}
          >
            Tovább az ellenőrzéshez
          </button>
        )}
        {step === 4 && (
          <button
            type="button"
            id="goToSelectionButton"
            className="teacher__button"
            onClick={handleGoToSelectionButtonClick}
          >
            Vissza az órákhoz
          </button>
        )}
      </div>
      {/*popupVisible && <div className="teacher__popup">POPUP</div>*/}
    </div>
  );
}

export default Teacher;
