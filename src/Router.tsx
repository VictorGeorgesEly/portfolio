import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function Router(): JSX.Element {

	// TODO Outlet and loader ?
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} />
                <Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
}