async function bullshitPromise(p) {
	return new Promise(async (resolve, reject) => {
		let shouldResolve = Boolean(Math.round(Math.random()));
		try {
			let response = await p;
			if(shouldResolve) {
				resolve(response);
			} else {
				reject(response);
			}
		} catch(err) {
			reject(err);
		}
	});
}
export default bullshitPromise;