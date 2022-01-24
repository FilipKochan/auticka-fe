import React, { useEffect } from 'react';

const OwnSituations: React.FC = () => {
  useEffect(() => {
    document.title = 'Vlastní situace';
  }, []);
  return <div>Own situations</div>;
};

export default OwnSituations;
