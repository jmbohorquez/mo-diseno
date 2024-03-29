const path = require( 'path' )

module.exports = {
    reactStrictMode: true,
    webpack( config ) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    sassOptions:{
        includepaths: [ path.join( __dirname, 'styles' ) ]
    }
}
