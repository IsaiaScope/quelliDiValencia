import {
	IonButton,
	IonContent,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
} from '@ionic/react';
import Header from '../../components/header/header';
import InstallPWA from '../../components/pwa/pwa';

const Settings: React.FC = () => {
	const installPwa = () => {};
	return (
		<IonPage>
			<Header title='Settings' />
			<IonContent className='ion-padding'>
				<IonList>
					<IonItem>
						<IonLabel>SETTINGS</IonLabel>
						<InstallPWA />
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Settings;
