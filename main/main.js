const cheerio = require("cheerio"),
	axios = require("axios")

function tebakgambar() {
	return new Promise(async(resolve, reject) => {
		axios.get("https://jawabantebakgambar.net/all-answers/").then(({data}) => {
			const $ = cheerio.load(data)
			const result = [];
			const random = Math.floor(Math.random() * 2836) + 2;
			$(`#images > li:nth-child(${random}) > a`).each((a, b) => {
				const img = "https://jawabantebakgambar.net"+ $(b).find("img").attr("data-src")
				const jwb = $(b).find("img").attr("alt")
				const jwbmurni = jwb.slice(8)
				result.push({gambar: img, jawaban: jwbmurni})
			})
			resolve(result)
		}).catch(reject)
	})
};


module.exports.tebakgambar = tebakgambar