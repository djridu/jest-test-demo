import Config from 'webpack-config';
import helpers from './helper';
import modules from './modules';

const isNeedSourceMap = helpers.env.isStage() || helpers.env.isDebug() ? 'source-map' : false;

const getCoreConfig = () => {
    helpers.env.showState();

    return {
        context: helpers.paths.ROOT_DIR,
        mode: helpers.env.getMode(),
        entry: modules.getEntries(helpers),
        output: modules.getOutputs(helpers),
        module: modules.getLoaders(helpers),
        plugins: modules.getPlugins(helpers),
        devtool: isNeedSourceMap,
    };
};

export default new Config().merge(getCoreConfig());
