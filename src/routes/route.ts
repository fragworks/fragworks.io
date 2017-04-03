interface Route {
	path: string;
	fn: (ctx: Object, next: Function) => void;
}

export default Route;
