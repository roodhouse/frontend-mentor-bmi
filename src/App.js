import './App.css';
import Hero from '../src/components/Hero'
import Results from '../src/components/Results'
import Tips from '../src/components/Tips'
import Limits from '../src/components/Limits'

// need to do logic on load for both
// something off with layout in fullview hero section

function App() {
  return (
    <div className="App">
     <div id='contentWrapper' className='flex flex-col justify-center items-center'>
      <div id='heroWrapper' className='mb-[72px] max-w-[640px] md:max-w-[1024px] md:mb-[96px] xl:max-w-full xl:w-full xl:mb-[65px]'>
        <Hero />
      </div>
      <div id='resultsWrapper' className='mb-[72px] max-w-[640px] md:max-w-[1024px] md:mb-[96px] xl:max-w-full xl:w-full xl:px-[140px]'>
        <Results />
      </div>
      <div id='tipsWrapper' className='mb-[72px] max-w-[640px] md:max-w-[1024px] md:mb-[96px] xl:max-w-full xl:w-full xl:mb-[120px]'>
        <div id='tipsPrimary' className='bg-gradient-opacity xl:mx-4'>
          <Tips />
        </div>
      </div>
      <div id='limitsWrapper' className='pl-[20px] pr-[29px] pb-[96px] max-w-[640px] md:max-w-[1024px] md:pl-[39px] md:pr-[43px] xl:max-w-full xl:w-full'>
        <Limits />
      </div>
     </div>
    </div>
  );
}

export default App;
