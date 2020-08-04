import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import SearchPanel from '../search-panel/search-panel';
import LastSearchesPanel from '../last-searches-panel/last-searches-panel'
import PhotoContainer from '../gallery/gallery';

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