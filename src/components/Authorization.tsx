import * as React from 'react';
import {includes, curry} from 'lodash';

const Authorization = (user, allowRoles, WrappedComponent) =>
    class WithAuthorization extends React.Component<any, any> {
        constructor(props) {
            super(props);

            this.state = {user}
        }

        render() {
            const {role} = this.state.user;
            if (includes(allowRoles, role)) {
                return <WrappedComponent {...this.props}/>;
            }
            return <h1>No page for you!</h1>;
        }
    };

export default curry(Authorization);