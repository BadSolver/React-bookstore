import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { ROUTE } from '../../router'
import { useAppDispatch } from '../../store/redux-hooks/redux-hooks'

export const RequareAuth = () => {

  const dispatch = useAppDispatch()

    const {isAuth, email} = useAuth()

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.REGISTRATION} />
}
