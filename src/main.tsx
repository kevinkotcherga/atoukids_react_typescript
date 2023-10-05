import React from 'react';
import ReactDOM from 'react-dom/client';
import Home, { loader as professionalsLoader } from './pages/Home';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Professional, {
	loader as professionalLoader,
} from './pages/Professional';
import ErrorPage from './pages/ErrorPage';
import GlobalStyles from './GlobalStyles';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route
				path="/"
				element={<Home />}
				loader={professionalsLoader}
				errorElement={<ErrorPage />}
			></Route>
			<Route
				path="professional/:professionalId"
				element={<Professional />}
				loader={professionalLoader}
				errorElement={<ErrorPage />}
			></Route>
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
	</React.StrictMode>,
);
