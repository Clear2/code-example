import React from 'react';

class Index extends React.Component {
    constructor(props) {
        console.log('child--constructor')
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount () {
        console.log('child--componentDidMount')
    }
    componentWillUnmount() {
        console.log('child-->componentWillUnmount')
    }


    render () {
        console.log('child--render')
        return (
            <div>It is Chilld Component</div>
        )
    }
}

export default Index