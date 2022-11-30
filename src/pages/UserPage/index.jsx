import { useEffect } from 'react'

const UserPage = (props) => {
  useEffect(() => {
    document.title = 'User Page';
  }, []);

  return (
    <div className='l-homepage'>
      <div className="container">
        UserPage
      </div>
    </div>
  )
}

export default UserPage