let syntax = {
	gml: {
		operator: /-[-=]?|\+[+=]?|!=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|%=?|div|mod/g,
		content: /\/\/.*|\/\*\S\/\*/g,
		number: /0[xX][\da-fA-F]+|0[bB][01]|0[oO][0-7]|\d+(?:\.\d+)?(?:[Ee][+-]\d+)?/g,
		functions: /[_$a-z][\w$]*(?=\s*\()/g
	},
	shader: {
		keyword: /vec[2-4]|attribute|varying|void/g
	}
}


let highlight = function (lang) {
	let lineNum = document.getElementById("lineNum").innerHTML;
	let codes = document.getElementById("code").innerHTML;
	((array) => {
		let lines = array.length - 1;
		for (var i; i <= lines; i++) {
			lineNum += i + "<br>"
		}
	})(codes.split("\n"));
	codes.replace(/\n/g,"<br>");
	switch (lang) {
	case "gml":
		for (let i in syntax.gml) {
			let a = codes.match(syntax[i])
			switch (i) {
			case "operator":
				codes.replace(syntax[i],"<span class='code opr'>" + a + "</span>");
				break;
			case "content":
				break;
			case "number":
				break;
			case "functions":
			}
		};
	break;
	}
}