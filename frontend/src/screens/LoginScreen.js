import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'

const LoginScreen = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = () => {
    dispatch(login(email, password))
    navigate('/')
  }

  const handleButtonClick = () => {
    navigate('/register')
  }
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex  justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl mx-auto text-center'>
        <span className='text-2xl font-light'>Login to your account</span>
        {error && <h3>{error}</h3>}
        {loading && <h2>LOADING..</h2>}
        <div className='relative mt-4 bg-white shadow-md sm:rounded-lg text-left'>
          <div className='h-2 bg-indigo-400 rounded-t-md'></div>
          <div className='py-6 px-8'>
            <label className='block font-semibold'>Email</label>
            <input
              type='text'
              placeholder='Email'
              className=' border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='block mt-3 font-semibold'>Password</label>
            <input
              type='password'
              placeholder='Password'
              className=' border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-between items-baseline'>
              <button
                onClick={submitHandler}
                className=' flex mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                  />
                </svg>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className='pt-2 mt-2'>
          <span className='text-2xl font-light'>Don't have an account? </span>
          <br />
          <button
            onClick={handleButtonClick}
            className='ml-8 mt-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
              />
            </svg>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen