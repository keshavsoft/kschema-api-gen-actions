// resolveCommand.js

import Insert from "../tasks/actions/insert.js";
import ShowAll from "../tasks/actions/showAll.js";

const map = {
    showAll: ShowAll,
    insert: Insert
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};