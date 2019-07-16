import React, {Component} from 'react'

class Project extends Component {
  render() {

    return (
      <div >
        <p>HOLA</p>
       <h5 >{this.props.item.projet}</h5>
       <img src={this.props.item.poster} alt='Project'></img>
       <p >{this.props.item.resume}</p>
     </div>
    );
  }
}

export default Project;