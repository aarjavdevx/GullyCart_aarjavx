import { isSpeechSynthesisSupported, speakText, stopSpeaking } from '../utils/speech.js'
import VoiceOnboarding from '../components/VoiceOnboarding.jsx'
import { Link } from 'react-router-dom'

function Home() {
  const welcomeMessage = 'Welcome to GullyCart. Find fresh local vendors near you.'

  return (
    <main>
      <h1>GullyCart</h1>
      <p>Your local shopping experience starts here.</p>
      <div>
        <button type="button" onClick={() => speakText(welcomeMessage)} disabled={!isSpeechSynthesisSupported()}>
          Read welcome message
        </button>
        <button type="button" onClick={stopSpeaking} disabled={!isSpeechSynthesisSupported()}>
          Stop
        </button>
      </div>
      <VoiceOnboarding />
      <Link to="/vendor/dashboard">Open Vendor Dashboard</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </main>
  )
}

export default Home
