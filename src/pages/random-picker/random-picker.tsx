import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonIcon,
	IonItemDivider,
	IonLabel,
	IonPage,
} from '@ionic/react';
import Header from '../../components/header/header';
import { CONFIG } from '../../shared/constants/constants';
import { RandomReveal } from 'react-random-reveal';
import { useState } from 'react';
import { balloonSharp as balloonIcon } from 'ionicons/icons';

const { tts } = CONFIG.labels;

const RandomPicker: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(true);
	const results = ['bacio', 'schiaffo','abbraccio'];

	const OnClickRandomBtn = () => setIsPlaying(!isPlaying);

	return (
		<IonPage>
			<Header title={tts} />
			<IonContent className='ion-padding'>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle>Fun Randomiser</IonCardTitle>
						<IonCardSubtitle>are u sure to continue? </IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent className='ion-padding'>
						{isPlaying ? (
							<RandomReveal
								isPlaying={isPlaying}
								duration={Infinity}
								revealDuration={0}
								updateInterval={0.5}
								characterSet={[
									'uscire a cena',
									'aperitivo',
									'sesso',
									'sberla',
									'schiaffone',
									'film sul divano',
									'corsa di cavalli',
									'ascoltare la musica',
									'concerto',
									'cinema',
									'bacio',
									'biancaneve',
									'ciao mi chiamo Carlo',
									'Iso culo',
									'kiss',
									'slap',
									'Dumbooo',
									'giocare a golf',
									'ubriacarsi',
									'fumare',
									'guardare le stelle',
									'osservare la luna',
									'selfie',
									'derubare una vecchietta',
									'bere un drink',
									`scappare all'estero`,
									'studiare',
									'leggere un libro',
									'palestra',
									'bacio sulla guancia',
								]}
								characters=' '
							/>
						) : (
							<IonLabel color='success'>
								{results[Math.floor(Math.random() * results.length)]}
							</IonLabel>
						)}

						<IonItemDivider />
						<IonButton
							color='secondary'
							size='small'
							onClick={() => OnClickRandomBtn()}>
							<IonIcon slot='start' icon={balloonIcon}></IonIcon>
							{isPlaying ? 'Random Pick' : 'Start Spinning'}
						</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default RandomPicker;
