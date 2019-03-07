import { useState } from 'react'

export const useExample = () => {
  let [ value, setValue ] = useState('foo')

  return value
}
