//Libs
import React, { Component } from 'react';
// Components
// styles
import css from '../static/css/broadway.css';

class Main extends Component {
	render() {
		return(
			<div className={'header'}>
				<div className={['header'].join(' ')}>
					<div className={['container'].join(' ')}>
						<ul className={['nav'].join(' ')}>
							<li><a href="/">About</a></li>
							<li><a href="/">Work</a></li>
							<li><a href="/">Team</a></li>
							<li><a href="/">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className={['jumbotron', 'jumbotron'].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['main'].join(' ')}>
							<h1>We are Broadway</h1>
							<a href="/" className={['btn-main', css['btn-main']].join(' ')} rel="style" type="text/css">Get Started</a>
						</div>
					</div>
				</div>
				<div className={['supporting'].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['col'].join(' ')}>
							<img alt='' src={require('../static/img/design.svg')} />
							<h2>Design</h2>
							<p>Make your projects look great and interact beautifully.</p>
							<a href="/" className={['btn-default', css['btn-default']].join(' ')} rel="style" type="text/css">Learn More</a>
						</div>
						<div className={['col'].join(' ')}>
							<img alt='' src={require('../static/img/develop.svg')} />
							<h2>Develop</h2>
							<p>Use modern tools to turn your design into a web site</p>
							<a href="/" className={['btn-default', css['btn-default']].join(' ')} rel="style" type="text/css">Learn More</a>
						</div>
						<div className={['col'].join(' ')}>
							<img alt='' src={require('../static/img/deploy.svg')} />
							<h2>Deploy</h2>
							<p>Use modern tools to turn your design into a web site</p>
							<a href="/" className={['btn-default', css['btn-default']].join(' ')} rel="style" type="text/css">Learn More</a>
						</div>
					</div>
					<div className={['clearfix'].join(' ')}></div>
				</div>
				<div className={['footer'].join(' ')}>
					<div className={['container'].join(' ')}>
						<p>&copy; Broadway 2015</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
