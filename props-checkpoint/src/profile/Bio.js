import react ,{Component} from 'react'

class Bio extends Component{

    render(){


        return (

           <div style={{backgroundColor:"ActiveBorder"}}> 

               <p> {this.props.bio}</p>
           </div>
        )
    }
}
export default Bio 