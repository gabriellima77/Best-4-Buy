import React, { useState } from 'react';
import { Loader } from '../styles/Loader.style';

const useLoading = ()=> {
  const [isLoading, setIsLoading] = useState(false);

  const getLoading = ()=> {
    return(
      <Loader >
        <div />
        <div />
        <div />
        <div />
      </Loader>
    );
  }

  return {
    isLoading, setIsLoading,
    getLoading
  }
}

export default useLoading;