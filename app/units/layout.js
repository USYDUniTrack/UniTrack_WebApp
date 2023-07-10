import Image from 'next/image'
import './globals.css'
import Header from './Header';
import NavigationBar from './NavigationBar';
// import Timetable from './Timetable';
// import Tree from './Tree';

export default function navBarLayout({children}) {
  return (
    <div className="App">
    <Header/>
      <div className='HomePageWrapper'>
        <div>
          <NavigationBar />
        </div>
        {children}
      </div>
    </div>
  )
}

