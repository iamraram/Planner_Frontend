import React from 'react';
import styled from 'styled-components';

const Parent = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  background-color: #253746;
  color: white;
`

const Launch = () => {
  return (
    <Parent>
      SKILLING
    </Parent>
  );
}

export default Launch;
