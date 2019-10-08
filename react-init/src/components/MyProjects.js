import React from "react";
import '../css/carousel.css';


const ProjectsPage = () => {
  return (
<div>
    <h2 className="categories__title">... some projetcs</h2>


    <section className="carousel">
        <div className="carousel__container">
      
          <div className="carousel-item">
            <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="poster"  />
            <div className="carousel-item__details">
              <div>
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/play--v5.png" alt="vector" />
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/plus--v5.png" alt="vector" />
              </div>
              <p className="carousel-item__details--title">Título descriptivo</p>
              <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
          </div>
    
          <div className="carousel-item">
            <img className="carousel-item__img" src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="poster"  />
            <div className="carousel-item__details">
              <div>             
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/play--v5.png" alt="vector" />
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/plus--v5.png" alt="vector" />
              </div>
              <p className="carousel-item__details--title">Título descriptivo</p>
              <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
          </div>
    
          <div className="carousel-item">
            <img className="carousel-item__img" src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="poster"  />
            <div className="carousel-item__details">
              <div>             
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/play--v5.png" alt="vector" />
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/plus--v5.png" alt="vector" />
              </div>
              <p className="carousel-item__details--title">Título descriptivo</p>
              <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
          </div>

    
        </div>
      </section>
      </div>
  );
}

export default ProjectsPage;