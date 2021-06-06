export default {
    jwt: {
        secret: process.env.APP_SECRET || 'default',
        privatekey: process.env.APP_PRIVATE_KEY || 'default',
        publickey: process.env.APP_PUBLIC_KEY || 'default',
        expiresIn: '1d',
    }
}