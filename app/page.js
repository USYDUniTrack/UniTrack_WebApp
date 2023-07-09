import Image from 'next/image'
import './globals.css'
import Header from './Header';
import UnitDescription from './UnitDescription';
import NavigationBar from './NavigationBar';
import Reviews from './Reviews';
import VerticalLinearStepper from './steps';
import UnitOutline from './UnitOutline';
// import Timetable from './Timetable';
// import Tree from './Tree';

export default function Page() {
  return (
    <div className="App">
    <Header/>
      <div className='HomePageWrapper'>
        <div className='leftNavigationWrapper'>
          <NavigationBar />
        </div>
        <div className='centerContentWrapper'>
          <UnitDescription />
          <UnitOutline />
          <Reviews />
        </div>
        <div className='rightNavigationWrapper'>
        <VerticalLinearStepper />
        </div>
      </div>
    </div>
  )
}

