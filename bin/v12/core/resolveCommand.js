// resolveCommand.js

import Insert from "../tasks/actions/insert.js";
import ShowAll from "../tasks/actions/showAll.js";
import Distinct from "../tasks/actions/distinct.js";

const map = {
    showAll: ShowAll,
    insert: Insert,
    distinct: Distinct
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};