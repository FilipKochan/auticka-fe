import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSituation, getTest } from '../../selectors';
import { generatePath, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { classHandler } from '../../utils';
import './AnswerPicker.scss';
import CustomButton from '../CustomButton/CustomButton';
import { answerTestQuestion } from '../../api/situationsTests';
import FormError from '../FormError/FormError';

const AnswerPicker = () => {
  const situace = useSelector(getSituation);
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { testLength } = useSelector(getTest);
  const { question, testId } = useParams();

  const handleSubmitAnswer = () => {
    if (testId === undefined || question === undefined || selectedAnswer === null) return;
    setSubmitting(true);
    answerTestQuestion(testId, question, selectedAnswer).then(handleNext).catch(handleErr);
  };

  const handleErr = (msg: string = '') => {
    setSubmitError(msg);
    setSubmitting(false);
  };

  const handleNext = () => {
    if (testId === undefined || question === undefined) return;
    const questionInt = parseInt(question);
    if (questionInt + 1 >= testLength) {
      navigate(generatePath('/vysledky/:testId', { testId }));
    } else {
      navigate(generatePath('/test/:testId/:question', { testId, question: questionInt + 1 + '' }));
    }
  };

  if (!situace || testId === undefined || question === undefined) {
    return <div>Situace není definována</div>;
  }

  return (
    <div className="AnswerPicker">
      <div className="AnswerPicker__header">
        <div className="AnswerPicker__question">{situace.otazka ? situace.otazka : 'Vyberte správnou odpověď:'}</div>
        <div className="AnswerPicker__questionNumber">
          (otázka {parseInt(question) + 1} z {testLength})
        </div>
      </div>
      <ol className="AnswerPicker__body">
        {situace.odpovedi.map(({ odpoved, idodpovedi }) => {
          return (
            <li
              className={`HoverArrow ${classHandler(`AnswerPicker__option`, idodpovedi === selectedAnswer)}`}
              key={idodpovedi}
              dangerouslySetInnerHTML={{ __html: odpoved }}
              onClick={() => {
                if (isSubmitting) return;
                setSelectedAnswer(idodpovedi);
              }}
            />
          );
        })}
      </ol>

      <div className="AnswerPicker__submit">
        <CustomButton
          variant="primary"
          disabled={selectedAnswer === null}
          loading={isSubmitting}
          onClick={handleSubmitAnswer}
        >
          Potvrdit
        </CustomButton>
      </div>

      {submitError && <FormError>{submitError}</FormError>}
    </div>
  );
};

export default AnswerPicker;
