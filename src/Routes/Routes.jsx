import NotFound from '../pages/NotFound/NotFound';
import Party from '../pages/Party/Party';
import Marriage from '../pages/Marriage/Marriage';
import Graduation from '../pages/Graduation/Graduation';
import Home from '../pages/Home/Home'
import {Switch, Route} from 'react-router-dom';

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/party">
                <Party/>
            </Route>
            <Route path="/marriage">
                <Marriage/>
            </Route>
            <Route path="/Graduation">
                <Graduation/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default Routes;