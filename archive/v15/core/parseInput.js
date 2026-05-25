export default function parseInput() {
    const [cmd] = process.argv.slice(2);

    return {
        cmd: cmd || null,
        toPath: process.cwd()
    };
};