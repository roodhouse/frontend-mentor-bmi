import './App.css';
import Hero from '../src/components/Hero'
import Results from '../src/components/Results'
import Tips from '../src/components/Tips'
import Limits from '../src/components/Limits'

function App() {
  return (
    <div className="App">
     <div id='contentWrapper' className=''>
      <div id='heroWrapper' className='bg-gradient-315 pt-8 px-6 rounded-[0px_0px_35px_35px]'>
        <Hero />
      </div>
      <div id='resultsWrapper' className='px-6'>
        <Results />
      </div>
      <div id='tipsWrapper' className='px-6'>
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
