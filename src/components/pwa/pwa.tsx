import { useEffect, useState } from 'react';

const InstallPWA: React.FC = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState<any>(null);

	useEffect(() => {
		const handler = (e: any) => {
			e.preventDefault();
			console.log('we are being triggered :D');
			setSupportsPWA(true);
			setPromptInstall(e);
		};
		window.addEventListener('beforeinstallprompt', handler);
		console.log('yuppi');

		return () => window.removeEventListener('transitionend', handler);
	}, []);

	const onClick = (evt: any) => {
		evt.preventDefault();
		if (!promptInstall) {
			return;
		}
		promptInstall.prompt();
	};
	if (!supportsPWA) {
		console.log('yuppu');
		// return null;
	}
	return (
		<button
			className='link-button'
			id='setup_button'
			aria-label='Install app'
			title='Install app'
			onClick={onClick}>
			Install
		</button>
	);
};

export default InstallPWA;
