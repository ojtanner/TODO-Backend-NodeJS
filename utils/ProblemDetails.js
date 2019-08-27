const problemTypeEnum = {
    INVALID_CREDENTIALS: {
        KEY: 'invalid_credentials',
        TYPE: '/problems/invalid_credentials',
        TITLE: 'Invalid Credentials',
        STATUS: 400
    },
    INTERNAL_ERROR: {
        KEY: 'internal_error',
        TYPE: '/problems/internal_error',
        TITLE:'Internal Error',
        STATUS: 500
    },
    EMAIL_UNAVAILABLE: {
        KEY: 'email_unavailable',
        TYPE: '/problems/email_unavailable',
        TITLE:'Email Unavailable',
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
    
        case problemTypeEnum.INTERNAL_ERROR.KEY:
            this.type = problemTypeEnum.INTERNAL_ERROR.TYPE,
            this.title = problemTypeEnum.INTERNAL_ERROR.TITLE,
            this.status = problemTypeEnum.INTERNAL_ERROR.STATUS
            break;

        case problemTypeEnum.EMAIL_UNAVAILABLE.KEY:
            this.type = problemTypeEnum.EMAIL_UNAVAILABLE.TYPE,
            this.title = problemTypeEnum.EMAIL_UNAVAILABLE.TITLE,
            this.status = problemTypeEnum.EMAIL_UNAVAILABLE.STATUS
            break;

        default:
            break;
    }
};

module.exports = ProblemDetails;
