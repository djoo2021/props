import react, { Component } from 'react'

import FullName from './FullName'
import Bio from './Bio'
import Profession from './Profession'
import image from './image1.jpg'


class Profile extends Component{

    clickHandler =() => {alert("wajdi");}


    render (){

        return (
            <div>
                

            <FullName  name="WAJDI MEJRI" />
            <Bio bio="i'm a student fullStack Develloper in GoMyCode" />
           
           <Profession><img src={image} ></img></Profession> 
           <button className="btn-danger" onClick={this.clickHandler}> click me  </button>

           
            </div>
           


        )
    }

}

export default Profile