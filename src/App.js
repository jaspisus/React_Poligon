import React, { useState, useEffect } from 'react';
import './App.css';

export class ClassComponent extends React.Component {
	state = {
		counter: 0,
	};

	addSecond = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	componentDidMount() {
		setInterval(() => {
			this.addSecond();
		}, 1000);
	}

	render() {
		return <h1>Class Component based counter: {this.state.counter}</h1>;
	}
}

export function FunctionComponent() {
	const [counter, updateCounter] = useState(0);

	useEffect(() => {
		setInterval(() => {
			updateCounter(counter => counter + 1);
		}, 1000);
	}, []);

	return <h1>Function Component based counter: {counter}</h1>;
}
