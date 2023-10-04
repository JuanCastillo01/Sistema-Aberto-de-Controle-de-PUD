import React, { useEffect, useLayoutEffect } from 'react';
import { useGetAllReferencias } from '../api/Refrencias/useGetAllReferencias';
import { useAddReferencias } from '../api/Refrencias/useAddReferencias';
import { IRefencias } from '../tipagem/IRefencias';
import { useEditRefrencias } from '../api/Refrencias/useEditRefrencias';



const ManterReferencias: React.FC = () => {
  const useGetAll = useGetAllReferencias()
  const useAdd = useAddReferencias()
  const useEdit = useEditRefrencias()


  return (
    <div>
      <h2>Criação de PUD</h2>
    </div>
  );
};

export default ManterReferencias;
