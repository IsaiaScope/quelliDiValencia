import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import Header from '../../components/header/header';

const WorKInProgress: React.FC = () => {
	return (
		<IonPage>
			<Header title='WORK IN PROGRESS' />
			<IonContent className='ion-padding'>
				<IonList>
					<IonItem>
						<IonLabel>WORK IN PROGRESS</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default WorKInProgress;
