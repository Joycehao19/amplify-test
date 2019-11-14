import {Auth} from 'aws-amplify';
import React from 'react';
import TestGQL from '../TestGQL';
import './index.scss';

const App = () => (
    <div className="app">
        <header className="app-header">
            <div>
                <span>You are logged in.</span>
            </div>
            <button className="sign-out-link" onClick={() => Auth.signOut()}>
                Sign Out
            </button>
        </header>
        <TestGQL />
    </div>
);

export default App;
