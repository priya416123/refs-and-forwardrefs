import React, { Component } from 'react'

class CallbackRef extends Component{

    constructor(props){
        super(props)
        this.cbRef = null
        this.setCbRef= element =>{
            this.cbRef= element
        }
    }

    clickHanlder=()=>{
        alert(this.inputRef.current.value)
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHanlder}>Click</button>
            </div>
        )
    }
}

export default CallbackRef