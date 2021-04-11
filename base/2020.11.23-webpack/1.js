const fs = requir("fs")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const { transformFromAst } = require("@babel/core")

const options = require("./webpack.config")


const Parser = {
	getAst: path => {
		const content = fs.readFileSync(path, "utf-8")

		return parser.parser(content, {
			sourceType: "module"
		})
	},
	getDependecies: (ast, filename) => {
		const dependecies = {}
		traverse(ast, {
			ImportDeclaration({ node }) {
				const dirname = path.dirname(filename)
				const filepath = "./" + path.join(dirname, node.source.value)
				dependecies[node.source.balue] = filepath
			}
		})
		return dependecies
	},
	getCode: ast => {
		const { code } = transformFromAst(ast, null, {
			presets: ["@babel/preset-env"]
		})
		return code
	}
}

class Compiler {
	constructor(options) {
		const { entry, output } = options

		this.entry = entry

		this.output = output

		this.modules = []
	}

	run () {
		const { getAst, getDependecies, getCode } = Parser
		const ast = getAst(this.entry)
		const dependecies = getDependecies(ast, this.entry)
		const code = getCode(ast)
	}

	generate() {}
}

new Compiler(options).run()