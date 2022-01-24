import React from 'react';
import { useParams } from 'react-router-dom';
import Canvas from '../../components/Canvas/Canvas';

const TestQuestion = () => {
  const { testId, question } = useParams();
  return (
    <div>
      Showing test id {testId} question {question}.
      <Canvas />
    </div>
  );
};

export default TestQuestion;
