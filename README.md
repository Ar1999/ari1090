## `Installation` 
> `npm install ari1090` or `npm i ari1090`

### `Tebak Gambar`
```js
const { Tebakgambar } = require('ari1090');

(async () => {
	try {
		const tebakgambar = await Tebakgambar();
		console.log(tebakgambar);
	} catch (err) {
		console.log(err);
	}
})();

// or

Tebakgambar()
	.then(tebakgambar => console.log(tebakgambar))
	.catch(err => console.log(err));

```

### `Pinterest`
```js
const { Pinterest } = require('ari1090');

(async () => {
	try {
		const pinterest = await Pinterest('Nishimiya Shouko');
		console.log(pinterest);
	} catch (err) {
		console.log(err);
	}
})();

// or

Pinterest('Nishimiya Shouko')
	.then(pinterest => console.log(pinterest))
	.catch(err => console.log(err));

```

### `Cak Lontong`
```js
const { Caklontong } = require('ari1090');

(async () => {
	try {
		const caklontong = await Caklontong();
		console.log(caklontong);
	} catch (err) {
		console.log(err);
	}
})();

// or

Caklontong()
	.then(caklontong => console.log(caklontong))
	.catch(err => console.log(err));

```
#### `Support Me ?`
> Subscribe Youtube: ari1090
>
> Follow Instagram: @youtubenurari
>
> Join Discord Server: https://discord.gg/vcgamers