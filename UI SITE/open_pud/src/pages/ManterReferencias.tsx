import React, { useLayoutEffect } from 'react';
import { useGetAllReferencias } from '../api/Refrencias/useGetAllReferencias';

const ManterReferencias: React.FC = () => {
  const useGetAll = useGetAllReferencias()
  useLayoutEffect(()=>{useGetAll.recuperarReferencias()},[])
  return (
    <div>
      <h2>Criação de PUD</h2>
      <p>This is a mock component for ManterReferencias.</p>
    </div>
  );
};

export default ManterReferencias;
