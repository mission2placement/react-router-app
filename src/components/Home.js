import React, { Component } from 'react';
import axios from 'axios';
/*
  We will be using this link tag to user the post.id to use it as route parameter
  and then based on the post we want to load our Post Component
*/
import { Link } from 'react-router-dom';

// We are creating functional components because we are not storing any states over here.
// className container and center are materialzied classes to give our app a look.

/*
  Now we want our Home content to fetch some data from the third party API.
          Example: https://jsonplaceholder.typicode.com/posts
  To do that we need to have axios --> axios is a HTTP client which helps to fetch data from API's.
          --> We import the axios library from the npm : npm install axios
          --> Now we have the axios installed so we can now go and fetch data from the API.
          --> How do we do that:
                # Since we have lifecycle hooks of a component, we discussed that a good point to load external data to the
                  component is componentDidMount() --> when component is already mounted on the DOM.
                # So we will use axios inside componentDidMount() to get the data from the API.
                # To use lifecycle hooks we need to convert this component to a class based component:
                          Why class based?
                          Because we can't use lifecycle hooks inside functional component

                        const Home = () => {
                          return(
                            {/*}<div>
                              <div className='container center'>
                                <h4>Home Page</h4>
                                <p> This my home page. </p>
                              </div>
                            </div>
                          )
                        }


export default Home; */

class Home extends Component {

  // we create a state and initial state has empty aray of posts.
  state = {
    posts: [ ]
  }
  componentDidMount(){
    // We will first import axios and then make a get request because we want to get data.
    // We can use post if want to post but for this application we just want to get data

    // The get() request is asynchronous i.e it will take sometime to go and fetch the data from API.
    // So it returns a promise.
    // Promise means that this request will return at somepoint and time.
    // So we use .then() method.
    // Any code inside .then() method only triggers when the get request is completed.

    axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then() on completion fires back a callback function and that function has the response object.
    // we can check the response object by logging it in the console.
    // we have a property called data inside the response object.
    // we can grab that res.data to get all the data and output it.
    // To output this data in this Home content we need to have a state which will contains the posts.
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 20)   // this will set the posts state with the data we are fetching, by adding fetch we are limiting it 20 posts
        })
      })


  }
  render(){

    // Here we are destrucuting the posts and we are cycling through the list we have and then outputting it on out home page
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map( post => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              {/* We will surround the span tag with a {Link to=<dynamic_id to use as route param>}
                  We cant just give to = '/post_id' because it will look literally for /post_id
                */}
              <Link to={'/' + post.id}  >
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (<div className='center'>No posts yet</div>)

    return(
      <div>
        <div className='container center'>
          <h4>Home Page</h4>
          { postList }
        </div>
      </div>
    )
  }
}

export default Home;
