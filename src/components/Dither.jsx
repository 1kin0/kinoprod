import Dither from '../lib/Dither.jsx'

export default function DitherCanvas() {
    return (
        <div style={{ width: '160%', height: '100%', position: 'absolute', top:0,right:0, zIndex:-1}}>
            <Dither
                waveColor={[0.4,0.4,0.4]}
                disableAnimation={false}
                colorNum={5}
                waveAmplitude={0.4}
                waveFrequency={4}
                waveSpeed={0.02}
            />
        </div>
    )
}