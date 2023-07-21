import UnitDescription from './UnitDescription';
import Reviews from './Reviews';
import VerticalLinearStepper from './steps';
import UnitOutline from './UnitOutline';
import Timetable from './Timetable';
// import Tree from './Tree';

export default function Unit({params}) {

    // verify unit code
    const verify = async () => {
        const data = await getData('units', params.unit);
        if (data.error) {

        }
    }

  return (
      <>
        <div className='centerContentWrapper'>
          <h2>{params.unit}</h2>
          <UnitDescription />
          <Timetable />
          <UnitOutline />
          <Reviews />
        </div>
    </>
  )
}

