import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import imageFile from '.Images/therapy.jpg';
import { Link } from 'react-router-dom';


const PostComponent = ({posts}) => {
  // const history= useHistory();
  const loggedin= localStorage.getItem('token');
  const author= localStorage.getItem('username');
  const refreshPage =() => {
    window.location.reload(false);
   }
  
  
  return (
          <Row>
            {/* <h2>{name}</h2> */}
             
                          {
              posts.map(
                (post) => (

                  <Col xs={12} md={4} lg={3} key={post.id}>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                      {/* <Card.Img variant="top" src={imageFile} /> */}
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <small>Written by {post.author}</small>
                        <Card.Text>
                          {post.body.substring(0,100)}.....
                        </Card.Text>
                        < Link to={`/posts/${post.id}`}>
                        <Button variant="outline-primary">Read More</Button>
                        </Link>
                       
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )
            } 
  </Row>
     );
}

export default PostComponent;