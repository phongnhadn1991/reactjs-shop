import { useEffect } from 'react'
import ListUser from '../../components/User/ListUser.jsx'

import { useDispatch } from 'react-redux';
import { userActions } from '../../store/reducers/userSlice';
const UserPage = (props) => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    document.title = 'User Page'
    dispatch(
      userActions.login({
        email: 'mcn@gmail.com',
      }),
    )
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