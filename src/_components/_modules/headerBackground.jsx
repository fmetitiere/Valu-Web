import React from 'react';
import {
	MDBContainer,
	MDBView,
	MDBMask
} from 'mdbreact';


class FullPageIntroWithNonFixedNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse
		});
	}

	render() {
		return (
			<div>
				<header>
					<MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg">
						<MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
							<h2>This Navbar isn't fixed</h2>
							<h5>When you scroll down it will disappear</h5>
							<br />
							<p>
								Full page intro with background image will be always displayed in full screen mode,
								regardless of device{' '}
							</p>
						</MDBMask>
					</MDBView>
				</header>

				<main>
					<MDBContainer className="text-center my-5">
						<p align="justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</MDBContainer>
				</main>
			</div>
		);
	}
}

export default FullPageIntroWithNonFixedNavbar;
