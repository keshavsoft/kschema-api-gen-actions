import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();
    return (await import(`./bin/${v}/commands/exportCommands/${cmd}.js`)).default;
};

export const showAll = async (...a) => (await load("showAll"))(...a);