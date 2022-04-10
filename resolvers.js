const Query = require('./resolvers/query');
const Session = require('./resolvers/session');
const Mutation = require('./resolvers/mutation')

module.exports = {
  Query,
  Session,
  Mutation,
  SessionOrError: {
    __resolveType(obj, context, info) {
      if (obj.code) {
        return 'Error';
      }
      return 'Session';
    }
  },
  Room: {
    EUROPA: 'Europa',
    SOL: 'Sol',
    SATURN: 'Saturn'
  }
};
