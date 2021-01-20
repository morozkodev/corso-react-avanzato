import logo from './logo.svg';
import React, { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Test1 = React.lazy( () => import( './lazy/Test1' ) );
const Test2 = React.lazy( () => import( './lazy/Test2' ) );
const Test3 = React.lazy( () => import( './lazy/Test3' ) );


class App extends React.Component {
	
	constructor(props) {
		super( props );
	}
	
	render() {
		return (
			<div>
				<Router>
					<div className="container">
                       <nav>
                            <ul>
								<li><Link to="/test1">Test 1</Link></li>
                                <li><Link to="/test2">Test 2</Link></li>
                                <li><Link to="/test3">Test 3</Link></li>
                            </ul>
                        </nav>
						<Suspense fallback={<div>Loading</div>}>
							<Switch>								
								<Route exact path="/test2">
									<section>
										<Test2/>
									</section>
								</Route>
								<Route exact path="/test3">
									<section>
										<Test3/>
									</section>
								</Route>
								<Route path="/">
									<section>
										<Test1/>
									</section>
								</Route>
							</Switch>
						</Suspense>
					</div>
				</Router>
			</div>
		);
	}
	 
}

export default App;
