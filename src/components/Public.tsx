import * as React from 'react';
import {Link} from "react-router-dom";
import {OnlyForAdmin} from "../App";

const Public = () => (
    <div>
        <div>
            <Link to="/list">Show List</Link>
            <br/>
            <OnlyForAdmin>
                <Link to="/panel">Show Panel</Link>
            </OnlyForAdmin>
        </div>
    </div>
);

export default Public;