import { useEffect } from 'react'
import ListUser from '../../components/User/ListUser.jsx'

const UserPage = (props) => {
  useEffect(() => {
    document.title = 'User Page';
  }, []);

  return (
    <div className='l-homepage'>
      <div className="container">
        <div className="p-listUser">
          <ListUser />
        </div>
      </div>
    </div>
  )
}

export default UserPage