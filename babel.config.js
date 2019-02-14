module.exports = {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
        ['babel-plugin-styled-components', { fileName: false }], // eslint-disable-line prettier/prettier
        ['@babel/proposal-class-properties', { loose: false }], // eslint-disable-line prettier/prettier
        '@babel/transform-spread',
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-export-namespace-from',
        '@babel/proposal-export-default-from',
        '@babel/syntax-dynamic-import',
        '@babel/syntax-import-meta',
        '@babel/plugin-transform-template-literals',
        '@babel/transform-modules-commonjs',
        ['@babel/transform-async-to-generator', { module: 'bluebird', method: 'coroutine' }], // eslint-disable-line prettier/prettier
    ],
    env: {
        test: {
            plugins: ['@babel/transform-modules-commonjs', 'dynamic-import-node'],
            sourceMaps: 'both',
        },
    },
};
