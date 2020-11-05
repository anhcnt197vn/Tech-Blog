import React from 'react'
import { Slider } from '../src/components/Slider'
import { Navigation } from '../src/components/Navigation'

interface Props {}

const Index: React.FC<Props> = () => {
  return (
    <>
      <Navigation />
      <main>
        <Slider />
      </main>
    </>
  )
}

export default Index