module.exports = {
    sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
        try {
            return dataSources.sessionAPI.getSessionById(id);
        } catch (error) {
            return {
                code: 'ERROR',
                message: 'an error occurred',
                token: 'uniquetoken'
            }
        }
    },
    speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers(args);
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
    }
}