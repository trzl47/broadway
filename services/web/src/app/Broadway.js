//Libs
import React, { Component } from 'react';
// Components
// styles
import css from './broadway.css';

class Broadway extends Component {
	render() {
		return(
			<div className={[css.broadway].join(' ')}>
				<div className={[css.header].join(' ')}>
					<div className={['container'].join(' ')}>
						<ul className={[css.nav].join(' ')}>
							<li><a href="/">About</a></li>
							<li><a href="/">Work</a></li>
							<li><a href="/">Team</a></li>
							<li><a href="/">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className={['jumbotron', css.jumbotron].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={[css.main].join(' ')}>
							<h1>We are Broadway</h1>
							<a href="/" className={['btn-main', css['btn-main']].join(' ')} rel="style" type="text/css">Get Started</a>
						</div>
					</div>
				</div>
				<div className={[css.supporting].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={[css.col].join(' ')}>
							<img alt='' src={require('./assets/design.svg')} />
							<h2>Design</h2>
							<p>Make your projects look great and interact beautifully.</p>
							<a href="/" className={['btn-default', css['btn-default']].join(' ')} rel="style" type="text/css">Learn More</a>
						</div>
						<div className={[css.col].join(' ')}>
							<img alt='' src={require('./assets/develop.svg')} />
							<h2>Develop</h2>
							<p>Use modern tools to turn your design into a web site</p>
							<a href="/" className={['btn-default', css['btn-default']].join(' ')} rel="style" type="text/css">Learn More</a>
						</div>
						<div className={[css.col].join(' ')}>
							<img alt='' src={require('./assets/deploy.svg')} />
							<h2>Deploy</h2>
							<p>Use modern tools to turn your design into a web site</p>
							<a href="/" className={['btn-default', css['btn-default']].join(' ')} rel="style" type="text/css">Learn More</a>
						</div>
					</div>
					<div className={[css.clearfix].join(' ')}></div>
				</div>
				<div className={[css.footer].join(' ')}>
					<div className={['container'].join(' ')}>
						<p>&copy; Broadway 2015</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Broadway;
