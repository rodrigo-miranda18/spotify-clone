import React from 'react';
import styled from 'styled-components';

const IconBackground = styled.div`
  align-items: center;
  background: currentColor;
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;
`;

const Create = () => {
  return (
    <IconBackground>
      <svg
        fill="black"
        width="12"
        height="12"
        viewBox={`0 0 16 16`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
      </svg>
    </IconBackground>
  );
};

export default Create;
