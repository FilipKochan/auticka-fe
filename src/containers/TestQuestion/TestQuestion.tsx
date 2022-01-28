import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setSituation } from '../../actions/situationAction';
import { useDispatch, useSelector } from 'react-redux';
import { getSituationStatus, getSituationError } from '../../selectors';
import { Status } from '../../types';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import './TestQuestion.scss';
import FormError from '../../components/FormError/FormError';
import AnswerPicker from '../../components/AnswerPicker/AnswerPicker';

const TestQuestion = () => {
  const { testId, question } = useParams();
  const error = useSelector(getSituationError);
  const status = useSelector(getSituationStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Testová otázka';
  }, []);
  useEffect(() => {
    dispatch(setSituation(testId, question));
  }, [dispatch, testId, question]);

  return (
    <div className="TestQuestion">
      {status === Status.success && (
        <div className="TestQuestion__QuestionBox">
          <AnswerPicker />
        </div>
      )}
      {status === Status.requesting && <CustomLoader size="2rem">Načítání otázky...</CustomLoader>}
      {status === Status.error && error && <FormError style={{ fontSize: '1.5rem' }}>{error}</FormError>}
    </div>
  );
};

export default TestQuestion;
