import { WHITELIST_DOMAIN } from '~/utilities/constants';
export const corsOptions = {
    origin: function (origin, callback) {
        if (WHITELIST_DOMAIN.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
};
