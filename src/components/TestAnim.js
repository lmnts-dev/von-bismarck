import { Component, React } from 'react'
import { TweenLite } from "gsap/all"
import styled from 'styled-components'

const Circle = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`

class TestAnim extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
  }

  render(){
    return <Circle id="hello" ref={Circle => this.myElement = Circle} />;
  }
}

export default TestAnim
