import React from 'react';
import { DEFAULT_QUESTION } from '../../constants';
import { TestResultSituace } from '../../types';
import CustomButton from '../CustomButton/CustomButton';
import './ResultSituationItem.scss';

const ResultSituationItem: React.FC<{ situation: TestResultSituace }> = ({ situation }) => {
  const getCorrectClass = (answerId: number) => {
    const correctlyAnswered = situation.userAnswer === situation.correctAnswer;
    if (correctlyAnswered) {
      if (answerId === situation.correctAnswer) {
        return 'ResultSituationItem__OKAnswer';
      }
      return;
    }

    if (answerId === situation.userAnswer) {
      return 'ResultSituationItem__WrongAnswer';
    }
    if (answerId === situation.correctAnswer) {
      return 'ResultSituationItem__CorrectAnswer';
    }
  };
  return (
    <div className="ResultSituationItem">
      <div>
        <span className="ResultSituationItem__QuestionNumber">otázka č. {situation.order + 1}:</span>{' '}
        {situation.question ? situation.question : DEFAULT_QUESTION}
        <hr />
        <div className="ResultSituationItem__Body">
          <ol>
            {situation.possibleAnswers.map(({ answerText, answerId }) => (
              <li
                className={getCorrectClass(answerId)}
                key={answerId}
                dangerouslySetInnerHTML={{ __html: answerText }}
              />
            ))}
          </ol>
          <CustomButton style={{ fontSize: '1rem' }} variant="primary">
            Spustit situaci
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ResultSituationItem;
