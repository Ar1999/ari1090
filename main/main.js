const cheerio = require('cheerio'),
	axios = require('axios');

module.exports = {
	async Tebakgambar() {
		return new Promise(async (resolve, reject) => {
			try {
				const { data } = await axios.get('https://jawabantebakgambar.net/all-answers/');
				const $ = cheerio.load(data);
				const result = [];
				const random = Math.floor(Math.random() * 2836) + 2;
				$(`#images > li:nth-child(${random}) > a`).each((a, b) => {
					const img = 'https://jawabantebakgambar.net' + $(b).find('img').attr('data-src');
					const jwb = $(b).find('img').attr('alt');
					const jwbmurni = jwb.slice(8);
					result.push({ gambar: img, jawaban: jwbmurni });
				});
				resolve(result);
			} catch (err) {
				reject(err);
			}
		});
	},
	async Pinterest(search) {
		return new Promise(async (resolve, reject) => {
			if (!search) return reject('Please argument to pinterest search');
			try {
				const { data } = await axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${search}`, {
					headers: {
						cookie: '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
					},
				});
				const $ = cheerio.load(data);
				const imagearr = [];
				$('div > a').each((a, b) => {
					const image = $(b).find('img').attr('src');
					if (image !== undefined) {
						imagearr.push(image);
					}
				});
				resolve(imagearr);
			} catch (err) {
				reject(err);
			}
		});
	},
  async Caklontong() {
		return new Promise(async (resolve, reject) => {
			try {
				const { data } = await axios.get('https://exp.itemku.com/kunci-jawaban-tts-cak-lontong-terbaru/');
				const $ = cheerio.load(data);
				const caklontong = [];
				const nomor = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46];
				nomor.map(x => {
					$(`ul:nth-child(${x}) > li`).each((a, b) => {
						const caklontongsoaldanjawaban = $(b).text().trim().split(' – ');
						if (caklontongsoaldanjawaban[1] !== undefined) {
							caklontong.push({ soal: caklontongsoaldanjawaban[0], jawaban: caklontongsoaldanjawaban[1].toLocaleLowerCase() });
						}
					});
				});
				resolve(caklontong);
			} catch (err) {
				reject(err);
			}
		});
	},
};
