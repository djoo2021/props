import react,{Component} from 'react'

class Profession extends Component {
    
    render (){

        return (

           <div style={{backgroundColor:"tomato"}}>

               <h1>{this.props.children} </h1>
           </div>
        )
    }
}

export default Profession