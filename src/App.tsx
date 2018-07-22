import * as React from 'react';
import Public from "./components/Public";
import {Route} from 'react-router-dom';
import List from "./components/List";
import Panel from "./components/Panel";
import Authorization from './components/Authorization';

const getUserFromUrl = () => { // for testing only
    const url = new URL(window.location.href);
    return url.searchParams.get("usertype");
};

const AuthorizationWithUser = Authorization({name: 'username', role: getUserFromUrl()}); // get form redux/mobix or anywhere..

const User = AuthorizationWithUser(['user', 'admin']);
const Admin = AuthorizationWithUser('admin');

const PanelWithAuthorization: any = Admin(Panel);
const ListWithAuthorization: any = User(List);

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Route path="/" component={Public} exact={true}/>
                <Route path="/panel" component={PanelWithAuthorization} exact={true}/>
                <Route path="/list" component={ListWithAuthorization} exact={true}/>
            </div>
        );
    }
}

export default App;
