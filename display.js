async function displayMenuAll(name, runtime) {

    const finishDisplay = `
┏━━⬣  \`Aphrodite Crasher\`
│ 👤 *User:* ${name}      
║ 🤖 *Creator:* 6285654001429
│ 🌐 *Version:* Beta
║ ⏰ *Uptime:* ${runtime}   
┗━━⬣ 

╔─═⊱ *「 \`ATTACK MENU\` 」* 
│┏⊱
║⿻ Crash 628xx
│⿻ Death 628xx
║⿻ Crashios 628xx
│┗⊱
┗━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`OWNER MENU\` 」* 
│┏⊱
║⿻ Cd True/false
│⿻ Self
║⿻ Public
│⿻ Rvo
║⿻ Msgx
│⿻ Access 628xx      
║⿻ Dellaccess 628xx  
│┗⊱
┗━━━━━━━━━━━━━━━━━⬣

┏━━⬣  Thanks To
┃ 🔥 Aphrodite / Dev
┃ 🔥 PakTzy / Case
┃ 🔥 RxhL / Base
┗━━⬣`;

    return finishDisplay;
}

async function displayResponeDoneBug(number, command) {
     const responseDone = `「 ATTACKING SUCCESS 」\n\n┗⊱TARGET : ${number}\n┗⊱METHOD : ${command}`
     return responseDone
}

module.exports = { displayMenuAll, displayResponeDoneBug };