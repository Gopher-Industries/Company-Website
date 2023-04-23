const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Components': path.resolve(__dirname, 'src/components'),
            '@Layout': path.resolve(__dirname, 'src/layout'),
            '@Assets': path.resolve(__dirname, 'src/assets'),
            '@Screens': path.resolve(__dirname, 'src/screens'),
        }
    },
};
