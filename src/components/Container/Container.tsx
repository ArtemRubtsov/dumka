import React from 'react'

type Container = {
    children: React.ReactNode
}

export const Container = ({children}: Container) => {
  return (
    <main className='bg-lime-200 h-screen w-full flex items-center justify-center box-border'>{children}</main>
  )
}
