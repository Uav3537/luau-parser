import fs from 'fs'
import { execSync } from 'child_process'
import { luauparser } from '../dist/index.js'

const exampleScript = fs.readFileSync('./scripts/example.luau', 'utf-8')

const program = luauparser.parse(exampleScript)
fs.writeFileSync('./generated/ast.json', JSON.stringify(program, null, 4))
const code = luauparser.print(program)
fs.writeFileSync('./generated/final.luau', code)