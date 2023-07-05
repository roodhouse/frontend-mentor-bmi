import './App.css';
import Hero from '../src/components/Hero'
import Results from '../src/components/Results'
import Tips from '../src/components/Tips'
import Limits from '../src/components/Limits'

function App() {
  return (
    <div className="App">
     <div id='contentWrapper' className='flex flex-col justify-center items-center'>
      <div id='heroWrapper' className='mb-[72px] max-w-[640px] md:max-w-[1024px] md:mb-[96px] xl:max-w-full xl:w-full'>
        <Hero />
      </div>
      <div id='resultsWrapper' className='mb-[72px] max-w-[640px] md:max-w-[1024px] md:mb-[96px] xl:max-w-full xl:w-full'>
        <Results />
      </div>
      <div id='tipsWrapper' className='bg-gradient-opacity mb-[72px] max-w-[640px] md:max-w-[1024px] md:mb-[96px] xl:max-w-full xl:w-full'>
        <Tips />
      </div>
      <div id='limitsWrapper' className='pl-[20px] pr-[29px] pb-[96px] max-w-[640px] md:max-w-[1024px] md:pl-[39px] md:pr-[43px] xl:max-w-full xl:w-full'>
        <Limits />
      </div>
     </div>
    </div>
  );
}

export default App;
