import Amplify from 'aws-amplify';
import ApolloClient from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {ApolloProvider} from '@apollo/react-hooks';
import App from 'components/App';
import appSyncConfig from 'aws-exports';
import {createAuthLink} from 'aws-appsync-auth-link';
import {createHttpLink} from 'apollo-link-http';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import React from 'react';
import {withAuthenticator} from 'aws-amplify-react';

Amplify.configure(appSyncConfig);

// Used for accessing "public" API endpoints (still behind an API Key) if any
// const publicClient = new AWSAppSyncClient({
//     url: awsconfig.aws_appsync_graphqlEndpoint,
//     region: awsconfig.aws_appsync_region,
//     auth: {
//         type: AUTH_TYPE.API_KEY,
//         apiKey: awsconfig.aws_appsync_apiKey,
//     },
// });

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
};

const httpLink = createHttpLink({uri: url});

const link = ApolloLink.from([
    createAuthLink({url, region, auth}),
    createSubscriptionHandshakeLink(url, httpLink),
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const signUpConfig = {
    header: 'Sign-Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 1,
            type: 'string',
        },
        {
            label: 'Name',
            key: 'name',
            required: true,
            displayOrder: 2,
            type: 'string',
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 3,
            type: 'password',
        },
    ],
};

const provider = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

export default withAuthenticator(provider, {
    usernameAttributes: 'email',
    signUpConfig,
});
