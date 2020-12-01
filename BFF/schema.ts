import { gql, IResolvers, makeExecutableSchema } from 'apollo-server';

const typeDefs = gql`
  type Country {
    name: String!
    capital: String!
    population: Int!
  }
  type Query {
    allCountries: [Country!]!
    countryByName(name: String!): Country!
  }
`;

const resolvers: IResolvers = {
    Query: {
        allCountries: async (parent, args, { dataSources }) => {
            return dataSources.countriesAPI.getAllCountries();
        },
        countryByName: async (parent, { name }, { dataSources }) => {
            let countryData = dataSources.countriesAPI.getCountryByName(name);
            return countryData.then(data => data[0]);
        }
    }
};
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})