import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';


const Custom404 = () => {
    return (
        <React.Fragment>
			<Navbar />
			<PageBanner 
                pageTitle="404 Error" 
            />  
			 
			<div className="error-area ptb-100">
				<div className="container">
					<div className="error-content">
						<img src="/images/error.png" alt="image" />
						<h3>Error 404 : Page Not Found</h3>
						<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
						<Link href="/">
							<a className="default-btn">Back to Homepage</a>
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</React.Fragment>
    )
}



export default Custom404;