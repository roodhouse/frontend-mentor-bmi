import './App.css';
import Hero from '../src/components/Hero'
import Results from '../src/components/Results'
import Tips from '../src/components/Tips'
import Limits from '../src/components/Limits'

function App() {
  return (
    <div className="App">
     <div id='contentWrapper' className=''>
      <div id='heroWrapper' className='mb-[72px]'>
        <Hero />
      </div>
      <div id='resultsWrapper' className='mb-[72px]'>
        <Results />
      </div>
      <div id='tipsWrapper' className='bg-gradient-opacity mb-[72px]'>
        <Tips />
      </div>
      <div id='limitsWrapper' className='px-6 pb-[96px]'>
        <Limits />
      </div>
     </div>
    </div>
  );
}

export default App;
