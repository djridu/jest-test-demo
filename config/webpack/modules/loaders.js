import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function({ env, paths, utils }) {
    const config = utils.getConfig;
    const babelRc = utils.getBabelrc;
    const { regexScripts, regexImgToFile } = config;
    const isNeedSourceMaps = env.isStage() || env.isDebug();
    
    const getJsxLoader = () => ({
        test: regexScripts,
        loader: 'babel-loader',
        options: {
            babelrc: false,
            cacheDirectory: env.isDebug(),
            presets: babelRc.presets,
            plugins: babelRc.plugins
        },
    });
    
    const getCssLoaders = () => [
        {
            test: /\.(css)$/,
            loader: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        sourceMap: isNeedSourceMaps,
                    },
                },
            ],
            sideEffects: true,
        }
    ];
    
    const getLoadersImages = () => [
        {
            test: regexImgToFile,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        },
    ];

    const getLoadersSvg = () => [
        {
            test: /\.svg$/,
            issuer: {
                test: /\.js$/,
            },
            use: [
                '@svgr/webpack',
                {
                    loader: 'file-loader',
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        },
        {
            test: /\.svg$/,
            issuer: {
                test: /\.css$/,
            },
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: config.outputs.assetName[env.getModeNaming()],
                    },
                },
            ],
        },
    ];

    const getLoaders = () => {
        return {
            rules: [{
                oneOf: [
                    ...getLoadersImages(),
                    ...getLoadersSvg(),
                    getJsxLoader(),
                    ...getCssLoaders(),
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
                        options: {
                            name: config.outputs.assetName[env.getModeNaming()],
                        },
                    },
                ],
            }],
        };
    };

    return getLoaders();
}
