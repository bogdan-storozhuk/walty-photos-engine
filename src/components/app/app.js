import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import SearchPanel from '../search-panel/';
import LastSearchesPanel from '../last-searches-panel/'
import PhotoContainer from '../gallery';

const App=()=>{
    return(
        <Container>
            <SearchPanel/>
            <PhotoContainer/>
            <LastSearchesPanel/>
        </Container>    
    );
}

export default App;