import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//Effects
import LightRays from './components/LightRays.jsx'

//Vercel
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <>
      <Header/>

      <div className='w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='LightEffect'>
          <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.6}
              rayLength={4}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={.23}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={2}
              saturation={1}
          />
        </div>

        <h1 className='p-2 text-4xl'>Welcome</h1>
        <p className='text-gray-500'>Welcome to my homepage!</p>
      </div>

      <div className='bg-gray-800 text-gray-300 w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <h1>Introducing</h1>
      </div>

      <div className= 'w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <h1>Skills</h1>
      </div>

      <div className= 'bg-gray-800 text-gray-300 w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <h1>Your minds?</h1>
      </div>

      <div className= 'w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <h1>Dm us {'<'}3</h1>
      </div>

      <Analytics/>
      <SpeedInsights/>

      <Footer/>
    </>
  )
}

export default App
