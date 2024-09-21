import './OurClients.css';
import bikitaMinerals from './images/bikita-minerals-logo.png';
import firstCapital from './images/first-capital-bank-logo.jpeg';
import sendemTransportTech from './images/sendem-logo.jpg';
import youLearn from './images/youlearn-logo-text.png';

export const OurClients = () => {
	return (
		<div className='our-clients-container'>
			<div className='all-clients-container'>
				<div className='client-container'>
					<img src={bikitaMinerals} alt='Bikita Minerals' />
				</div>
				<div className='client-container'>
					<img src={firstCapital} alt='First Capital Bank' />
				</div>
			</div>
			<div className='clients-text-container'>
				<h2 className='text'>
					THROUGH ALL OF <span className='highlight-blue'>OUR PARTNERS</span>,
					WE CONTINUE TO <span className='highlight-green'>DELIVER VALUE </span>
					FOR <span className='highlight-gold'>OUR CLIENTS</span>
				</h2>
				<h3 className='text button-like'>Trusted By Leading <span className='colour-change'>Innovators</span>, Will You Be Next?</h3>
			</div>
			<div className='all-clients-container'>
				<div className='client-container'>
					<img src={sendemTransportTech} alt='Sendem Transport Technology' />
				</div>
				<div className='client-container'>
					<img src={youLearn} alt='You Learn' />
				</div>
			</div>
		</div>
	)
}