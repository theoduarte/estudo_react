import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './components/Course'

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          courses: [
              {
                  id: 1,
                  name: 'React',
                  category: 'Javascript',
                  image: 'https://cdn-images-1.medium.com/max/1600/1*To2H39eauxaeYxYMtV1afQ.png'
              },
              {
                  id: 2,
                  name: 'Laravel',
                  category: 'PHP',
                  image: 'https://www.ladybirdweb.com/wp-content/uploads/2016/03/laravel-1.png'
              }
          ]
      }

      this.remove = this.remove.bind(this);
  }

  remove(courseId) {
      const {courses} = this.state;
      const courseIndex = courses.findIndex(course => course.id == courseId);

      courses.splice(courseIndex, 1);
      this.setState({courses});
  }

   render() {
      const { state } = this;
      return (
          <div className="App">
              <ul className="courses-list">
                  {
                      state.courses.map(course => <Course course={course} onRemove={this.remove} />)
                  }
              </ul>
          </div>
      );
    }
}

export default App;
