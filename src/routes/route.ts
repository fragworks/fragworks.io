interface Route {
	path: string;
	fn: (ctx: any, next: any) => void;
}

export default Route;
