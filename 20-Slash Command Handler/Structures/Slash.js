let slash = []
const { readdirSync } = require("fs");
const ascii = require("ascii-table");

let table = new ascii("Slash commands");
module.exports = (client) => {
    readdirSync("./SlashCommands/").forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
    
            if (pull.name) {
                client.slash.set(pull.name, pull);
                slash.push(pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            }
    });
    console.log(table.toString());
client.on("ready",async ()=> {
    await clent.guilds.cache.get('guild-id').commands.set(slash);
 })
}
