import * as React from 'react';
import Public from "./components/Public";
import {Route} from 'react-router-dom';
import List from "./components/List";
import Panel from "./components/Panel";
import Authorization from './components/Authorization';
import Unauthorized from "./components/Unauthorized";
import {renderComponent, renderNothing} from "recompose";

const AuthorizationWithUser = Authorization({name: 'username', role: 'user'}); // get form redux/mobix or anywhere..

const User = AuthorizationWithUser(['user', 'admin'], renderComponent(Unauthorized));
const Admin = AuthorizationWithUser('admin', renderComponent(Unauthorized));

const ForAdmin = AuthorizationWithUser(['admin'], renderNothing);

const PanelWithAuthorization: any = Admin(Panel);
const ListWithAuthorization: any = User(List);

export const OnlyForAdmin: any = ForAdmin(props => <React.Fragment>{props.children}</React.Fragment>);

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
