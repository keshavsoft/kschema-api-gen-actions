import Insert from "../tasks/actions/insert.js";
import ShowAll from "../tasks/actions/showAll.js";

// resolveCommand.js
const map = {
    ShowAll,
    Insert
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};