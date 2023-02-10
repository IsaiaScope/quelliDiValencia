import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import Header from '../../components/header/header';
import List from '../../components/list/list';
import { paths } from '../root/paths';

const Profile: React.FC = () => {
	const { profile, settings } = paths;
	const profileConfig = {
		list: [
			{
				id: 1,
				label: settings,
				routerLink: `/${profile}/${settings}`,
			},
		],
	};
	const { list } = profileConfig;
	return (
		<IonPage>
			<Header title={profile} />
			<IonContent className='ion-padding'>
				<List list={list}></List>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
