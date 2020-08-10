import React, { Component } from 'react'

class RefsDemo extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    clickHanlder=()=>{
        alert(this.inputRef.current.value)
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHanlder}>Click</button>
            </div>
        )
    }
}

export default RefsDemo