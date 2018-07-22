import {includes, curry} from 'lodash'
import {branch, renderComponent} from 'recompose';
import Unauthorized from "./Unauthorized";

const Authorization = (user, allowRoles) =>
    branch(
        () => !includes(allowRoles, user.role),
        renderComponent(Unauthorized)
    );

export default curry(Authorization);