import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppDispatch, useAuth } from '../../hooks'
import { ROUTE } from '../../router'

export const RequareAuth = () => {

  const dispatch = useAppDispatch()

    const {isAuth, email} = useAuth()

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.REGISTRATION} />
}
