//import React from 'React';
//import {Fragment} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/';
import List from './Components/List';
import {Container,Row,Col} from 'react-bootstrap';

const App = () => {
    return ( 
    <Container>  
        <Header />
        <Row>
            <Col md={8}>
                <List /> 
            </Col> 
            <Col md={4}>
             <h3>Input</h3>
            </Col>    
        </Row>
 <Footer />;
    </Container>
       
    );
}

export default App;

// react no permite exportar mas de un nodo html ,por eso se mete todo en el <div>
// se puede reemplazar el div por REACT.FRAGMENT 
// import React from 'react'
// en lugar de importar todo react puedo descontruct e importar solo Fragment (como esta ahora)
// frgment puede ser reemplazado por <> </>
// puedo usar varios fragments
