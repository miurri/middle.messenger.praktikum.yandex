export enum METHODS {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
}

export type RequestOptions = {
	tries?: number;
	headers?: Record<string, string>;
	data?: Record<string, unknown> | XMLHttpRequestBodyInit;
	timeout?: number;
};

type RequestOptionsWithMethod = RequestOptions & { method: METHODS };

const queryStringify = (data: Record<string, unknown>) => {
	return (
		"?" +
		Object.entries(data)
			.map(([key, value]) => {
				const mappedValue = Array.isArray(value)
					? value.join(",")
					: value?.toString();

				return `${key}=${mappedValue}`;
			})
			.join("&")
	);
};

export class HTTPTransport {
	get = (url: string, options: RequestOptions = {}) => {
		return this.requestWithRetry(url, { ...options, method: METHODS.GET });
	};

	post = (url: string, options: RequestOptions = {}) => {
		return this.requestWithRetry(url, { ...options, method: METHODS.POST });
	};

	put = (url: string, options: RequestOptions = {}) => {
		return this.requestWithRetry(url, { ...options, method: METHODS.PUT });
	};

	delete = (url: string, options: RequestOptions = {}) => {
		return this.requestWithRetry(url, {
			...options,
			method: METHODS.DELETE,
		});
	};

	request = (
		url: string,
		options: RequestOptionsWithMethod,
		timeout = 5000
	) => {
		const { method, data, headers = {} } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

			xhr.open(
				method,
				isGet && !!data
					? `${url}${queryStringify(data as Record<string, unknown>)}`
					: url
			);

			Object.entries(headers).forEach(([header, value]) => {
				xhr.setRequestHeader(header, value);
			});

			xhr.onload = function () {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.timeout = options.timeout || timeout;
			xhr.ontimeout = reject;

			if (isGet || !data) {
				xhr.send();
			} else {
				xhr.send(data as XMLHttpRequestBodyInit);
			}
		});
	};

	requestWithRetry = (url: string, options: RequestOptionsWithMethod) => {
		const { tries = 1 } = options;

		const onError = (err: string): Promise<any> => {
			const triesLeft = tries - 1;
			if (!triesLeft) {
				throw err;
			}

			return this.requestWithRetry(url, { ...options, tries: triesLeft });
		};

		return this.request(url, options, options.timeout).catch(onError);
	};
}
