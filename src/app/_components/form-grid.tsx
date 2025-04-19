import { PropsWithChildren } from 'react'

export function CustomFormGrid ({children}: PropsWithChildren) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {children}
    </div>
  )
}