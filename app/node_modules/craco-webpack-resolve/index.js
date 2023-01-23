export function overrideWebpackConfig({webpackConfig, cracoConfig, pluginOptions}) {
    if (webpackConfig.resolve === undefined) {
        webpackConfig.resolve = {}
    }

    applyOverrides(webpackConfig.resolve, pluginOptions.resolve)
    return webpackConfig
}

function applyOverrides(target, override) {
    for(const key in override) {
        if (Array.isArray(target[key])) {
            target[key].push(override[key])
        } else if(typeof target[key] === "object") {
            Object.assign(target[key], override[key])
        } else {
            target[key] = override[key]
        }
    }
}