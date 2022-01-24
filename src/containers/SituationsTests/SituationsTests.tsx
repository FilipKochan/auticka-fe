import React from 'react';
import { createTest } from '../../api/situationsTests';
import { TestDifficulty, TestLength } from '../../types';

import './SituationsTests.scss';

const SituationsTests: React.FC = () => {
  const handleNewTest = (length: TestLength, difficulty: TestDifficulty) => {
    createTest(length, difficulty).then(console.log);
  };

  return (
    <div className="SituationsTests">
      {/* TODO VYBER PREDCHOZIHO TESTU */}

      <ul>
        <li onClick={() => handleNewTest(TestLength.short, TestDifficulty.easy)}>
          Krátký test<span> – 5 náhodně vybraných otázek</span>
        </li>
        <li onClick={() => handleNewTest(TestLength.normal, TestDifficulty.easy)}>
          Střední test<span> – 10 náhodně vybraných otázek</span>
        </li>
        <li onClick={() => handleNewTest(TestLength.long, TestDifficulty.easy)}>
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
    </div>
  );
};

export default SituationsTests;
