import * as React from 'react';
import Public from "./components/Public";
import {Route} from 'react-router-dom';
import List from "./components/List";
import Panel from "./components/Panel";
import Authorization from './components/Authorization';
import Unauthorized from "./components/Unauthorized";
import {renderComponent, renderNothing} from "recompose";

const getUserFromUrl = () => { // for testing only
    const url = new URL(window.location.href);
    return url.searchParams.get("usertype");
};

export const AuthorizationWithUser = Authorization({name: 'username', role: getUserFromUrl()}); // get form redux/mobix or anywhere..

export const User = AuthorizationWithUser(['user', 'admin'], renderComponent(Unauthorized));
const Admin = AuthorizationWithUser('admin', renderComponent(Unauthorized));

export const UserRenderNothing = AuthorizationWithUser(['admin'], renderNothing);

const PanelWithAuthorization: any = Admin(Panel);
const ListWithAuthorization: any = User(List);

const TestButton = () => (<button>only for admin</button>);

const Test = UserRenderNothing(TestButton);

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Route path="/" component={Public} exact={true}/>
                <Route path="/panel" component={PanelWithAuthorization} exact={true}/>
                <Route path="/list" component={ListWithAuthorization} exact={true}/>
                <Test/>
            </div>
        );
    }
};

export default App;
