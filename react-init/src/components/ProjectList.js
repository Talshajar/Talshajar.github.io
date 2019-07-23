import React, {Component} from 'react'
import Project from './Project';

// import EduTitle component

class SuperProjects extends Component {

  renderList( projectList) {
    const list =  projectList.map(item => {
      return <Project key={item.project} item={item} />;
    });
    return list;
  }

  render() {   
    return (
      <section id="superProjectsId">
        <h4>Proyectos</h4>
        <div className="skills-list">

          {this.renderList(this.props.projectList)}

        </div>
      </section>
    )
  }
}

export default SuperProjects;
