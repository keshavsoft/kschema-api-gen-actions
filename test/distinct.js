import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "Distinct";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(`../bin/${v}/commands/loadCommand.js`))
        .default(cmd);
};

const startFunc = async () => {
    const func = await load(commandToSend);

    func({
        cmd: commandToSend,
        toPath: process.cwd()
    });
};

startFunc().then();