const px2rem = require('postcss-px2rem');

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    px2rem({
                        remUnit: 37.5,
                    }),
                ],
            },
        },
    },
};
