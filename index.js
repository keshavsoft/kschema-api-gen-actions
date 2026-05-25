import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const module = await import(`./bin/${getLatestVersion()}/commands/loadCommand.js`);
    return module.default(cmd); // Returns a function
};

export const showAll = async (...args) => {
    const commandFunction = await load("ShowAll");

    await commandFunction({
        cmd: "ShowAll",
        toPath: process.cwd()
    });
};

export const Insert = async (...args) => {
    const commandToSend = "Insert";

    const commandFunction = await load(commandToSend);

    await commandFunction({
        cmd: commandToSend,
        toPath: process.cwd()
    });
};