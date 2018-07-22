import * as React from 'react';
import {Link} from "react-router-dom";

const Public = () => (
    <div>
        <div>
            <Link to="/list">Show List</Link>
            <br/>
            <Link to="/panel">Show Panel</Link>
        </div>
    </div>
);

export default Public;