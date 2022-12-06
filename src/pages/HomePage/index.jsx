import {  useState, useEffect } from 'react'

import { getAllPost, getThumbPost } from '../../services/apiWp';

const HomePage = (props) => {

  const [postList, setpostList] = useState([])

  const getPostWp = () => {
     getAllPost().then((res) => {
       if(res.status === 200 ) {
         // eslint-disable-next-line array-callback-return
        let newArrPost = []
        res.data.forEach(async(post) => {
          console.log(post)
          const resThumb = await getThumbPost(post.id)
          .then(res => res.data._embedded["wp:featuredmedia"][0].source_url)
          newArrPost.push({...post,urlThumb: resThumb})
        })
        console.log(newArrPost);
        setpostList(newArrPost)
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
                                    <td><img width={50} src={post.urlThumb} alt={post.title.rendered} /></td>
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