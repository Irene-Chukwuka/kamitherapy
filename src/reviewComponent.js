import PostComponent from './postComponent';
import {useState, useEffect} from 'react';

const ReviewComponent = () => {
  const [posts, setPost] = useState (null);
  useEffect (
    () => {
      fetch('http://localhost:4000')
      .then (res=>res.json())
      .then (
        (data) => {
          setPost (data)
        }
      )
    }, []
  )



    return ( 
        <div>
           {posts && < PostComponent posts={posts} />}
        </div>
     );
}
 
export default ReviewComponent;