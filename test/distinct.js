import getLatestVersion from "../bin/core/getLatestVersion.js";
const commandToSend = "Distinct";

const load = async (cmd) => {
    const v = getLatestVersion();
    return (await import(`../bin/${v}/commands/exportCommands/${cmd}.js`)).default;
};

const startFunc = async () => {
    const func = await load(commandToSend);

    func({
        cmd: commandToSend,
        toPath: process.cwd()
    });
};

startFunc().then();