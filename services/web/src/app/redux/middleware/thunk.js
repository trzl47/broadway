
const customMiddleware = store => next => action => {
	const isFunction = (action) => {
		return typeof action === 'function';
	}
	return isFunction(action) ? action(store.dispatch, store.getState): next(action);
}

export default customMiddleware;