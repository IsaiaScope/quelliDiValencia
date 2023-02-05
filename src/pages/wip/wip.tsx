import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/header/header';

const WorKInProgress: React.FC = () => {
	return (
		<IonPage>
			<Header title='WORK IN PROGRESS' />
			<IonContent className='ion-padding' fullscreen>
				<div>WORK IN PROGRESS</div>
			</IonContent>
		</IonPage>
	);
};

export default WorKInProgress;
