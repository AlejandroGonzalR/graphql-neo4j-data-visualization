import gql from 'graphql-tag'

export const GET_ALL_CHARACTERS = gql`
    query {
        Character {
            id
            name
            age
        }
    }
`;

export const GET_ALL_LOCATIONS = gql`
    query {
        Location {
            id
            name
        }
    }
`;


export const GET_ALL_NATIONS = gql`
    query {
        Nation {
            id
            name
        }
    }
`;
