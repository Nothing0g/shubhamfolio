import fs from 'node:fs'
const tokens = JSON.parse(fs.readFileSync('src/styles/tokens.json','utf8'))
const lines = [':root {']
for (const [group, values] of Object.entries(tokens)) for (const [name, token] of Object.entries(values)) lines.push(`  --${group}-${name}: ${token.$value};`)
lines.push('}')
fs.mkdirSync('src/styles',{recursive:true})
fs.writeFileSync('src/styles/tokens.css', lines.join('\n')+'\n')
