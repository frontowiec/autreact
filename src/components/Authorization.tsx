import {includes, curry} from 'lodash'
import {branch} from 'recompose';

const Authorization = (user, allowRoles, renderElement) =>
    branch(
        () => !includes(allowRoles, user.role),
        renderElement
    );

export default curry(Authorization);