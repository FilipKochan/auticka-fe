import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTest } from '../../api/situationsTests';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import FormError from '../../components/FormError/FormError';
import { TestDifficulty, TestLength } from '../../types';

import './SituationsTests.scss';

const SituationsTests: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [creating, setCreating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Výběr testu';
  }, []);

  const handleNewTest = (length: TestLength, difficulty: TestDifficulty) => {
    if (creating) return;

    setCreating(true);
    setError('');

    createTest(length, difficulty)
      .then((testId) => navigate(`/test/${testId}/0`))
      .catch((msg) => {
        setError(msg);
        setCreating(false);
      });
  };

  return (
    <div className="SituationsTests">
      {/* TODO VYBER PREDCHOZIHO TESTU */}
      <ul>
        <li onClick={() => handleNewTest(TestLength.short, TestDifficulty.medium)}>
          Krátký test<span> – 5 náhodně vybraných otázek</span>
        </li>
        <li onClick={() => handleNewTest(TestLength.normal, TestDifficulty.medium)}>
          Střední test<span> – 10 náhodně vybraných otázek</span>
        </li>
        <li onClick={() => handleNewTest(TestLength.long, TestDifficulty.medium)}>
          Dlouhý test<span> – 20 náhodně vybraných otázek</span>
        </li>
        <li onClick={() => handleNewTest(TestLength.normal, TestDifficulty.easy)}>
          Lehký test
          <span> – 10 otázek, ve kterých ostatní uživatelé nejméně chybují.</span>
        </li>
        <li onClick={() => handleNewTest(TestLength.normal, TestDifficulty.hard)}>
          Těžný test
          <span> – 10 otázek, ve kterých ostatní uživatelé nejvíce chybují.</span>
        </li>
      </ul>
      {error && <FormError>{error}</FormError>}
      {creating && <CustomLoader>Test se vytváří...</CustomLoader>}
    </div>
  );
};

export default SituationsTests;
