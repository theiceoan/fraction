import './OurClients.css';
import bheroApp from './images/bheroapp-logo.jpeg';
import bikitaMinerals from './images/bikita-minerals-logo.png';
import firstCapital from './images/first-capital-bank-logo.jpeg';
import sendemTransportTech from './images/sendem-logo.jpg';
import youLearn from './images/youlearn-logo-light.png';

export const OurClients = () => {
	return (
		<div className='our-clients-container'>
			<div className='all-clients-container'>
				<div className='client-container'>
					<img src={bheroApp} alt='Bhero' />
				</div>
				<div className='client-container'>
					<img src={bikitaMinerals} alt='Bikita Minerals' />
				</div>
				<div className='client-container'>
					<img src={firstCapital} alt='First Capital Bank' />
				</div>
			</div>
			<div className='text-container'>
				<h1>OUR CLIENTS</h1>
				<h4>Will You Join Our Innovators Who Trust Us To Turn Their Ideas Into Reality? </h4>
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