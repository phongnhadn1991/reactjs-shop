import {  useState, useEffect } from 'react'

import { getAllPost } from '../../services/apiWp';

const HomePage = (props) => {

  const [postList, setpostList] = useState([])

  const getPostWp = () => {
     getAllPost().then((res) => {
       if(res.status === 200 ) {
        setpostList(res.data)
      }
    })
  }

  useEffect(() => {
    document.title = 'Home Page';
    getPostWp()
  }, []);

  return (
    <div className='l-homepage'>
      <div className="container">
        <h4>LIST NEWS</h4>
        <hr />
        {/* Post List */}
        <div className="p-post">
          <div className="p-postList">
          <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Thumb</th>
                    </tr>
                </thead>
                <tbody>
                    {postList && postList.length > 0 &&
                        postList.map((post) => {
                            return (
                                <tr key={post.id}>
                                    <th scope="row">{post.id}</th>
                                    <td>{post.title.rendered}</td>
                                    <td>{post._embedded["wp:term"][0].slug}</td>
                                    <td><img width={70} src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.title.rendered} /></td>
                                </tr>
                            )
                        })
                    }
                    {postList && postList.length === 0 &&
                        <tr>
                            <td className='text-center' colSpan={4}>Not Found Post</td>
                        </tr>
                    }
                </tbody>
            </table>
          </div>
        </div>
        {/* End Post List */}
        <br />
        <h4>LIST MENU</h4>
        {/* List Menu */}
        {/* End Post List */}
        <hr />
      </div>
    </div>
  )
}

export default HomePage