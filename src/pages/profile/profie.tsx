import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/header/header';
import { paths } from '../root/paths';

const Profile: React.FC = () => {
	const { profile } = paths;
	return (
		<IonPage>
			<Header title={profile} />
			<IonContent fullscreen>
				<div>PROFILE</div>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
