import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

const ProjectsPage = () => {
  return (
    <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
      Proyectos
    </h2>
    <p className="grey-text w-responsive mx-auto mb-5">
     Estos son algunos de mis proyectos:
    </p>

    <MDBRow>
      <MDBCol md="12" className="mb-4">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage:
              "url(https://drive.google.com/uc?export=view&id=1w9-auimsC49l2TjCSNaBXoCE1m0qCB-e)"
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h3 className="py-3 font-weight-bold">
                <strong>One Social Network</strong>
              </h3>
              <p className="pb-3">
              Red Social con autenticación de usuarios y roles, usa base de datos de Firebase. Crea, Lee, Edita y borra comentarios en tiempo real. Estructurado con ReactJS.
              </p>
              <MDBBtn color="secondary" rounded size="md" href="https://github.com/rociochavoya/GDL002-framework-social-network">
                <MDBIcon className="left" /> <i class="fab fa-github"></i> Code Review
              </MDBBtn>
              <MDBBtn color="secondary" rounded size="md" href="https://socialnetwork-81193.firebaseapp.com/signin">
                <MDBIcon className="left" /> <i class="fas fa-desktop"></i> Demo Review
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
     
    </MDBRow>

    <MDBRow>
      <MDBCol md="12" className="mb-4">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage:
              "url(https://mdbootstrap.com/img/Photos/Others/project4.jpg)"
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h3 className="py-3 font-weight-bold">
                <strong>Visitors Plesk</strong>
              </h3>
              <p className="pb-3">
              Web App para registro de visitantes en tiempo real en Firebase.
              </p>
              <MDBBtn color="secondary" rounded size="md" href="https://github.com/rociochavoya/GDL002-visitors">
                <MDBIcon className="left" /> <i class="fab fa-github"></i> Code Review
              </MDBBtn>
              <MDBBtn color="secondary" rounded size="md" href="https://ihost-6a2e2.firebaseapp.com/">
                <MDBIcon className="left" /> <i class="fas fa-desktop"></i> Demo Review
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
     
    </MDBRow>

    <MDBRow>
      <MDBCol md="12" className="mb-4">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage:
              "url(https://drive.google.com/uc?export=view&id=1OxalmM2IysHMwCvoUO0FqZOei3Kf0kYo)"
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h3 className="py-3 font-weight-bold">
                <strong>Organa</strong>
              </h3>
              <p className="pb-3">
              Wep app para registro de asistencia a través de códigos QR. Herramientas: Javascript, CSS y Firebase.
              </p>
              <MDBBtn color="secondary" rounded size="md" href="https://github.com/rociochavoya/GDL-open-house">
                <MDBIcon className="left" /> <i class="fab fa-github"></i> Code Review
              </MDBBtn>
              <MDBBtn color="secondary" rounded size="md" href="https://openhouse-e0266.firebaseapp.com/">
                <MDBIcon className="left" /> <i class="fas fa-desktop"></i> Demo Review
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
     
    </MDBRow>
  </section>
  );
}

export default ProjectsPage;