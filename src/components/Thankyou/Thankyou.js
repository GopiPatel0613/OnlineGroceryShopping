
import React, { useState } from "react";

import { Route } from 'react-router-dom';
import axios from "axios";
import SignUp from '.././SignUp';
import { useEffect } from 'react';

const ThankYou = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInUser"),
        };
        //console.log(params);
        axios.get("http://localhost:8080/User", { params }).then((response) => {
            //console.log(response);
            setUser(response.data);
        }).catch((error) => {

        });
    }, []);

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div></div></div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Thank you {user.firstName} </h1>
          </div>
          {/* <Route exact path="/" component={SignUp} /> */}
        </main>
    );
}

export default ThankYou;