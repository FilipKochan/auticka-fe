import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setTestResult } from '../../actions/testResultAction';
import FormError from '../../components/FormError/FormError';
import { getTestResult, getTestResultState } from '../../selectors';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import { Status } from '../../types';
import './Results.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import ResultSituationItem from '../../components/ResultSituationItem/ResultSituationItem';

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { testId } = useParams();
  const { state, errorMsg } = useSelector(getTestResultState);
  const [start, setStart] = useState(0);
  const PER_PAGE = 5;
  const result = useSelector(getTestResult);
  useEffect(() => {
    document.title = 'Výsledky testu';
  }, []);

  useEffect(() => {
    dispatch(setTestResult(testId || ''));
  }, [dispatch, testId]);

  return (
    <div className="Results">
      {result && (
        <>
          <div className="Results__Header">
            Správně jste odpověděli <span className="Results--strong">{result.correctAnswers}</span> z{' '}
            <span className="Results--strong">{result.totalQuestions}</span> otázek.
          </div>
          <div className="Results__MainBody">
            {result.situations.slice(start, start + PER_PAGE).map((situation) => (
              <ResultSituationItem situation={situation} key={situation.order} />
            ))}

            <div className="Results__PageControls">
              <CustomButton
                style={{ fontSize: '1rem' }}
                ariaLabel="previous page"
                variant="primary"
                disabled={start <= 0}
                onClick={() => setStart(Math.max(start - PER_PAGE, 0))}
              >
                &lt;&lt;
              </CustomButton>
              <div>
                strana {Math.floor(start / PER_PAGE) + 1} z {Math.ceil(result.totalQuestions / PER_PAGE)}
              </div>
              <CustomButton
                style={{ fontSize: '1rem' }}
                ariaLabel="next page"
                variant="primary"
                disabled={start + PER_PAGE >= result.totalQuestions - 1}
                onClick={() => setStart(start + PER_PAGE)}
              >
                &gt;&gt;
              </CustomButton>
            </div>
          </div>
          <div className="Results__NewTest">
            <CustomButton variant="primary" onClick={() => navigate('/testy')}>
              Nový test
            </CustomButton>
          </div>
        </>
      )}
      {state === Status.requesting && <CustomLoader size="2rem">Načítání výsledků...</CustomLoader>}
      {state === Status.error && <FormError style={{ fontSize: '1.5rem', width: 'max-content' }}>{errorMsg}</FormError>}
    </div>
  );
};

export default Results;
