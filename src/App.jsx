import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//Effects
import LightRays from './components/effects/LightRays.jsx'
import CurvedLoop from './components/effects/CurvedLoop.jsx'
import ShinyText from './components/effects/ShinyText.jsx'

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
              lightSpread={0.55}
              rayLength={3.7}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={.18}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1.8}
              saturation={1}
          />
        </div>

        <h1 className='p-2 text-4xl'>Welcome</h1>
        <p className='text-gray-500'>Welcome to my homepage!</p>
      </div>

      <div className='bg-gray-800 text-gray-300 w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <h1 className='p-2 text-4xl'>Introducing</h1>
      </div>

      <div className= 'w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='w-full absolute'>
          <CurvedLoop 
            marqueeText="✦ rbx ✦ ue5 ✦ unity ✦ web "
            speed={0.7}
            curveAmount={600}
            direction="right"
            interactive
            className="custom-text-style"
          />
          <CurvedLoop 
            marqueeText="✦ c++ ✦ py3 ✦ html  ✦ css ✦ js "
            speed={1.2}
            curveAmount={-400}
            direction="left"
            interactive
            className="custom-text-style"
          />
        </div>
        <h1 className='p-2 text-4xl'>Skills</h1>
      </div>

      <div className= 'bg-gray-800 text-gray-300 w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <h1>Your minds</h1>
        <p className='text-gray-500'>Have an idea?</p>
      </div>

      <div className= 'w-lvw h-lvh flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='text-5xl'>
          <ShinyText
            text='Dm us <3'
            speed={2}
          />
        </div>
      </div>

      <Analytics/>
      <SpeedInsights/>

      <Footer/>
    </>
  )
}

export default App
