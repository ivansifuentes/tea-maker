import { createSigner, createVerifier } from 'fast-jwt';
import config from './config';

const privateJwtKey = Buffer.from(config.get('privateJWTKey'), 'base64');
const publicJwtKey = Buffer.from(config.get('publicJWTKey'), 'base64');

export default createVerifier({ key: publicJwtKey, algorithms: ['RS256'], cache: true });

const signSync = createSigner({
    key: privateJwtKey,
});
export const signJwt = (payload: {
    sub: string;
    role?: string;
}) => signSync(payload);
