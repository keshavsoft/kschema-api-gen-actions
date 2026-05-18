import getLatestVersion from "../bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();
    return (await import(`../bin/${v}/commands/exportCommands/${cmd}.js`)).default;
};

const startFunc = async () => {
    const func = await load({
        folderName: "showAll",
        toPath: process.cwd()
    });
};

startFunc().then();