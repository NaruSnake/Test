const settings = {
	handler: (options, next) => {
		if (options.stream) {
			// It's a Stream
			// We can perform stream-specific actions on it
			return next(options)
				.on('request', request => setTimeout(() => request.abort(), 50));
		}

		// It's a Promise
		return next(options);
	},
	options: got.mergeOptions(got.defaults.options, {
		json: true
	})
};

const jsonGot = got.create(settings);
const defaults = {
	options: {
		retry: {
			retries: 2,
			methods: [
				'GET',
				'PUT',
				'HEAD',
				'DELETE',
				'OPTIONS',
				'TRACE'
			],
			statusCodes: [
				408,
				413,
				429,
				500,
				502,
				503,
				504
			]
		},
		cache: false,
		decompress: true,
		useElectronNet: false,
		throwHttpErrors: true,
		headers: {
			'user-agent': `${pkg.name}/${pkg.version} (https://github.com/sindresorhus/got)`
		},
		hooks: {
			beforeRequest: []
		}
	}
};

// Same as:
const defaults = {
	handler: got.defaults.handler,
	options: got.defaults.options
};

const unchangedGot = got.create(defaults);
const settings = {
	handler: got.defaults.handler,
	options: got.mergeOptions(got.defaults.options, {
		headers: {
			unicorn: 'rainbow'
		}
	})
};

const unicorn = got.create(settings);

// Same as:
const unicorn = got.extend({headers: {unicorn: 'rainbow'}});

const controlRedirects = got.create({
	options: got.defaults.options,
	handler: (options, next) => {
		const promiseOrStream = next(options);
		return promiseOrStream.on('redirect', resp => {
			const host = new URL(resp.url).host;
			if (options.allowedHosts && !options.allowedHosts.includes(host)) {
				promiseOrStream.cancel(`Redirection to ${host} is not allowed`);
			}
		});
	}
});

const limitDownloadUpload = got.create({
    options: got.defaults.options,
    handler: (options, next) => {
        let promiseOrStream = next(options);
        if (typeof options.downloadLimit === 'number') {
            promiseOrStream.on('downloadProgress', progress => {
        		if (progress.transferred > options.downloadLimit && progress.percent !== 1) {
        			promiseOrStream.cancel(`Exceeded the download limit of ${options.downloadLimit} bytes`);
        		}
        	});
        }

        if (typeof options.uploadLimit === 'number') {
            promiseOrStream.on('uploadProgress', progress => {
        		if (progress.transferred > options.uploadLimit && progress.percent !== 1) {
        			promiseOrStream.cancel(`Exceeded the upload limit of ${options.uploadLimit} bytes`);
        		}
        	});
        }

        return promiseOrStream;
    }
});

const noUserAgent = got.extend({
	headers: {
		'user-agent': null
	}
});

const crypto = require('crypto');
const getMessageSignature = (data, secret) => crypto.createHmac('sha256', secret).update(data).digest('hex').toUpperCase();
const signRequest = got.extend({
	hooks: {
		beforeRequest: [
			options => {
				options.headers['sign'] = getMessageSignature(options.body || '', process.env.SECRET);
			}
		]
	}
});

const merged = got.mergeInstances(controlRedirects, limitDownloadUpload, httpbin, signRequest, noUserAgent);

(async () => {
	// There's no 'user-agent' header :)
	await merged('/');
	/* HTTP Request =>
	 * GET / HTTP/1.1
	 * accept-encoding: gzip, deflate
	 * sign: F9E66E179B6747AE54108F82F8ADE8B3C25D76FD30AFDE6C395822C530196169
	 * Host: httpbin.org
	 * Connection: close
	 */

	const MEGABYTE = 1048576;
	await merged('http://ipv4.download.thinkbroadband.com/5MB.zip', {downloadLimit: MEGABYTE});
	// CancelError: Exceeded the download limit of 1048576 bytes

	await merged('https://jigsaw.w3.org/HTTP/300/301.html', {allowedHosts: ['google.com']});
	// CancelError: Redirection to jigsaw.w3.org is not allowed
})();
module.exports