import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import Header from '../../components/header/header';
import { CONFIG } from '../../shared/costants/config';

const { tts } = CONFIG.labels;

const RandomPicker: React.FC = () => {
	return (
		<IonPage>
			<Header title={tts} />
			<IonContent className='ion-padding'>
				<IonList>
					<IonItem>
						<IonLabel>Wheel</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default RandomPicker;
