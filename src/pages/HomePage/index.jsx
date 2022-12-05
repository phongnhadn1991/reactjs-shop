import {  useState, useEffect } from 'react'

import { getAllPost, getThumbPost } from '../../services/apiWp';

const HomePage = (props) => {

  const [postList, setpostList] = useState([])
  const [postThumb, setpostThumb] = useState([])

  const getThumbWp = async (id) => {
    await getThumbPost(id).then(res => { 
      if(res.status === 200) {
        return res.data._embedded['wp:featuredmedia'][0].source_url
      }
     })
  }

  const getPostWp = async () => {
    await getAllPost().then(res => {
      console.log(res)
      if(res.status === 200 ) {
        // eslint-disable-next-line array-callback-return
        const newData = res.data.map(post => {
          let thumb = getThumbWp(post.id)
          console.log(thumb)
          // return {...post,urlThumb:thumb}
        })
        setpostList(newData)
      }
    })
  }

  // const getThumbWp = async (id) => {
  //   await getThumbPost(id).then(res => { 
  //     if(res.status === 200) {
  //       console.log(res.data._embedded['wp:featuredmedia'][0].source_url);
  //       return res.data._embedded['wp:featuredmedia'][0].source_url
  //     }
  //    })
  // }
  

  useEffect(() => {
    document.title = 'Home Page';
    getPostWp()
  }, []);

  return (
    <div className='l-homepage'>
      <div className="container">
        {/* Post List */}
        <div className="p-post">
          <div className="p-postList">
          <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
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
                                    <td></td>
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
        {/* End Post Lis */}
      </div>
    </div>
  )
}

export default HomePage