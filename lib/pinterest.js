//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Techzaz Bot Inc. ZAZBOT
//Thank you to TechZaz and Myself
//════════════════════════════//

const gis = require("g-i-s")

async function pinterest(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "There is an error" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'xeon',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}

module.exports.pinterest = pinterest