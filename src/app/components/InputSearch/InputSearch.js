import React from 'react'
import { getAllProductsDB } from '@/app/actions'
import ClientSide from './ClientSide';

const InputSearch = async () => {
    const response = await getAllProductsDB();

  return (
    <ClientSide data={response}/>
  )
}

export default InputSearch