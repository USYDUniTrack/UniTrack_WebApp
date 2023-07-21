import React from 'react';
import MyTimetable from '/Users/devanshimirchandani/Desktop/UniTrack_WebApp/app/(mainPages)/timetable/Components/MyTimetable.js'; 
import Enrolment from '/Users/devanshimirchandani/Desktop/UniTrack_WebApp/app/(mainPages)/timetable/Components/Enrolment.js'
//import SyncCal from '/Users/devanshimirchandani/Desktop/UniTrack_WebApp/app/(mainPages)/timetable/Components/SyncCal.js'

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
      <div style={{ display: 'flex', margin:20 }}>
        
        {/* Left Wrapper */}
        <div style={{ flex: 1 }}>
          {/* <SyncCal /> */}
        </div>

        {/* Center Wrapper */}
        <div style={{ flex: 2, display: 'flex' }}>
          <div className='timeColumn'>
            {timings.map((timing)=>{
              return (<h3 className='timings' key={timing}> {timing}</h3 >)
            })}

          </div>
          <MyTimetable /> 
        </div>

        {/* Right Wrapper */}
        <div style={{ marginLeft: 150}}>
          <Enrolment />
        </div>
      </div>
    </div>
  );
}
