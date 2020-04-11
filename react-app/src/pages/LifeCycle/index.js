import React from 'react';
import Child from './Child'

import './index.scss'

class Index extends React.Component {
    constructor(props) {
        console.log('parent--constructor')
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount () {
        console.log('parent--componentDidMount')
        this.timerID = setInterval(
            () => this.tick(),
            10000
          );
    }
    componentWillUnmount() {
        console.log('parent--->componentWillUnmount')
        clearInterval(this.timerID)
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }
    render () {
        console.log('parent--render')
        return (
        <div>
            <div>It is {this.state.date.toLocaleTimeString()}</div>
            <Child></Child>
        </div>
        )
    }
}

export default Index