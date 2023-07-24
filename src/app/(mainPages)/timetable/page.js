import React from 'react';
import MyTimetable from './Components/MyTimetable.js'; 
import Enrolment from './Components/Enrolment.js'
// import SyncCal from './Components/SyncCal.js';

export default function Page() {
  const timings = [
    "8:00am",
    "10:00am",
    "12:00pm",
    "14:00pm",
    "16:00pm",
    "18:00pm",
    "20:00pm"
];

  return (
    <div>
      <div style={{ display: 'flex' }}>
        
        {/* Left Wrapper */}
        {/* Center Wrapper */}
        <div style={{ display: 'column', scale: 1.05, transformOrigin: 'top left' }}>
          <div style={{ display: 'flex', width: 810 }}>
            <div className='timeColumn' style={{ marginRight: 10}}>
              {timings.map((timing)=>{
                return (<h3 className='timings' key={timing}> {timing}</h3 >)
              })}
            </div>
            <MyTimetable /> 
          </div>
        </div>

        {/* Right Wrapper */}
        <div style={{ position: 'relative', left: 220}}>
          <Enrolment />
        </div>
      </div>
    </div>
  );
}
