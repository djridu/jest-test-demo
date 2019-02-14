export const getEntries = ({ paths, utils }) =>
    Object.keys(utils.getConfig.entries).reduce(
        (prev, key) => ({
            ...prev,
            [key]: [
                ...utils.getConfig.entries[key].map(item => utils.pathResolve(paths.SRC_DIR, item)),
            ],
        }),
        {},
    );

export const getOutputs = ({ env, utils }) => ({
    path: utils.pathResolve(utils.getConfig.outputs.path),
    publicPath: utils.getConfig.outputs.publicPath,
    pathinfo: env.isVerbose(),
    filename: `${utils.getConfig.outputs.filename[env.getModeNaming()]}`,
    chunkFilename: `${utils.getConfig.outputs.chunkFilename[env.getModeNaming()]}`,
});
