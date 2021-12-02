import react ,{Component} from 'react'

class FullName extends Component {
    
    render (){

        return (
            <div style={{backgroundColor:"yellow"}}>
                <h1> {this.props.name}</h1>
                
            </div>
            
        )
    }
}

export default FullName