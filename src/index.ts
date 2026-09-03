import { parse, parseTokens, parseExpressionFromSource, ParseError } from '@ast/builders'
import { tokenize, LexError } from '@lexer/lexer'
import { print } from '@ast/printer'

// Re-export every AST/token type so consumers can `import type { ... } from "luau-parser"`.
export * from '@lexer/token'
export * from '@ast/nodes'
export type { PrintOptions } from '@ast/printer'

// Re-export the underlying functions/classes individually too, for consumers
// who prefer named imports over the `luauparser` namespace object.
export { tokenize, LexError, parse, parseTokens, parseExpressionFromSource, ParseError, print }

export const luauparser = {
    tokenize,
    parseTokens,
    parse,
    parseExpressionFromSource,
    print,
} as const

export default luauparser