const problemTypeEnum = {
    INVALID_CREDENTIALS: {
        KEY: 'invalid_credentials',
        TYPE: '/problems/invalid_credentials',
        TITLE: 'Invalid Credentials',
        STATUS: 400
    }
}

const ProblemDetails = function ( problemType ) {
    switch (problemType) {
        case problemTypeEnum.INVALID_CREDENTIALS.KEY:
            
            this.type = problemTypeEnum.INVALID_CREDENTIALS.TYPE,
            this.title = problemTypeEnum.INVALID_CREDENTIALS.TITLE,
            this.status = problemTypeEnum.INVALID_CREDENTIALS.STATUS

            break;
    
        default:
            break;
    }
};

module.exports = ProblemDetails;
