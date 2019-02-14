import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function({ env, paths, utils }) {
    const config = utils.getConfig;
    
    const getPlugins = () =>
        [
            new CleanWebpackPlugin([paths.BUILD_DIR], {
                root: paths.ROOT_DIR,
                verbose: true,
                dry: false,
            }),
            new MiniCssExtractPlugin({
                filename: config.outputs.css[env.getModeNaming()],
            }),
        ];

    return getPlugins();
}
