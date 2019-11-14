import gql from 'graphql-tag';
import {listTeams} from 'graphql/queries';
import React from 'react';
import {useQuery} from '@apollo/react-hooks';

const LIST_TEAMS = gql`
    ${listTeams}
`;

const TestGQL = () => {
    const {loading, error, data} = useQuery(LIST_TEAMS);
    console.log({loading, error, data});
    return (
        <div className="test-gql">
            <></>
        </div>
    );
};

TestGQL.propTypes = {};

export default TestGQL;
