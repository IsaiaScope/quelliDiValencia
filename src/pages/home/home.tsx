import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import Header from '../../components/header/header';
import { noDash } from '../../helper/functions/string-manipulation';
import { CONFIG } from '../../shared/costants/config';
import { paths } from '../root/paths';

const { home, wheel, wip } = paths;
const { qdv, tts } = CONFIG.labels;
const homeConfig = {
	list: [
		{
			id: 1,
			label: tts,
			routerLink: `/${home}/${wheel}`,
		},
		{
			id: 2,
			label: `${noDash(wip)}...`,
			routerLink: `/${home}/${wip}`,
		},
	],
};

const Home: React.FC = () => {
	const { list } = homeConfig;
	return (
		<IonPage>
			<Header title={qdv} />
			<IonContent>
				<IonList className='ion-padding' lines='full'>
					{list.map(({ label, id, routerLink }) => {
						return (
							<IonItem key={id} routerLink={routerLink}>
								<IonLabel className='ion-text-capitalize'>{label}</IonLabel>
							</IonItem>
						);
					})}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;
