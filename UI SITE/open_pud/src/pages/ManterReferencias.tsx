import React, { useEffect, useLayoutEffect } from 'react';
import { useGetAllReferencias } from '../api/Refrencias/useGetAllReferencias';
import gerarReferenciaABNT from '../tipagem/IRefencias';
import { useAddReferencias } from '../api/Refrencias/useAddReferencias';

const ManterReferencias: React.FC = () => {
  const useGetAll = useGetAllReferencias()
  const useAdd = useAddReferencias()
  
  
  return (
    <div>
      <h2>Criação de PUD</h2>
    </div>
  );
};

export default ManterReferencias;
