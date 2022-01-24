import React from 'react';
import './Title.scss';

interface TitleProps {
  ishomeTitle?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, ishomeTitle = false }) => {
  return (
    <div className="TitleWrapper">
      <h1 className="Title">{children}</h1>
    </div>
  );
};

export default Title;
