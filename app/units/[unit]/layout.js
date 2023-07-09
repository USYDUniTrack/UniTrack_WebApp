import VerticalLinearStepper from './steps';

export default function navBarLayout({children}) {
  return (
    <>
        {children}
        <div className='rightNavigationWrapper'>
        <VerticalLinearStepper />
        </div>
    </>
  )
}

