import React, {Component} from 'react';
import axios from 'axios'

class ChoreRetrieval extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "will",
            chore: []
        }
    }

    componentDidMount(){
        axios.get('http://neighboring.today/api/chore').then( res => {
            this.setState({
                chore: res.data
            })
        })
    }


    render(){
        console.log(this.state);
        // const stuff = this.state.chore.map
        return(
            <div>
                <h1>My name is {this.state.name}  </h1>
            </div>
        )
    }
}

export default ChoreRetrieval