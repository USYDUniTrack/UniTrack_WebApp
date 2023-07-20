import UnitDescription from './UnitDescription';
import Reviews from './Reviews';
import VerticalLinearStepper from './steps';
import UnitOutline from './UnitOutline';
import Timetable from './Timetable';
// import Tree from './Tree';

export default function Unit({params}) {
  return (
      <>
        <div className='centerContentWrapper'>
          {/* <h2>{params.unit}</h2> */}
          <UnitDescription />
          <Timetable />
          <UnitOutline />
          <Reviews />
        </div>
    </>
  )
}

