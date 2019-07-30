import React, {Component} from 'react';


class Project extends Component {
  render() {

    return (

      <div >
        <p>HOLA</p>
        <img className="ImageProject" src={this.props.item.poster} alt='Project'></img>
       <h5 >{this.props.item.projet}</h5>
       <p >{this.props.item.resume}</p>
     </div>
     
    );
  }
}

export default Project;


