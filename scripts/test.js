import * as parser from '../dist/index.js'
import fs from 'fs'

const testScript = fs.readFileSync('./scripts/example.luau', 'utf-8')

const res = parser.parse(testScript)