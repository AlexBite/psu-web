// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './app.module.scss';
import NxWelcome from "./nx-welcome";

export const App = () => (
	<BrowserRouter>
		<div className="app">
			<nav className="app-nav">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
			<div className="app-content">
				<Routes>
					<Route path="/" element={<NxWelcome title={'Home'}/>}/>
				</Routes>
			</div>
		</div>
	</BrowserRouter>
);

export default App;
