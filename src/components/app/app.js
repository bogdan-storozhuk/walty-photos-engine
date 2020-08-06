import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from '../pages/main-page';

const App=()=>{
    return(
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/:tag1?/:tag2?/:tag3?/:tag4?/:tag5?/:tag6?/:tag7?/:tag8?/:tag9?/:tag10?"
             render={({match}) => {
                const {params} = match;
                return <MainPage tags={params}/>
            }}/>
        </Switch>  
    );
}

export default App;