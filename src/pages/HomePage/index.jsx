import { useEffect } from 'react'

const HomePage = (props) => {
  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <div className='l-homepage'>
      <div className="container">
        HomePage
      </div>
    </div>
  )
}

export default HomePage