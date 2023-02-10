import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import Header from '../../components/header/header';

const Settings: React.FC = () => {
	return (
		<IonPage>
			<Header title='Settings' />
			<IonContent className='ion-padding'>
				<IonList>
					<IonItem>
						<IonLabel>SETTINGS</IonLabel>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Settings;
