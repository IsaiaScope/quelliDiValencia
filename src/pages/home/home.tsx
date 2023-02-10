import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/header/header';
import List from '../../components/list/list';
import { noDash } from '../../helper/functions/string-manipulation';
import { CONFIG } from '../../shared/costants/config';
import { paths } from '../root/paths';

const Home: React.FC = () => {
	const { home, rp, wip } = paths;
	const { qdv, tts } = CONFIG.labels;
	const homeConfig = {
		list: [
			{
				id: 1,
				label: tts,
				routerLink: `/${home}/${rp}`,
			},
			{
				id: 2,
				label: `${noDash(wip)}...`,
				routerLink: `/${home}/${wip}`,
			},
		],
	};
	const { list } = homeConfig;

	return (
		<IonPage>
			<Header title={qdv} />
			<IonContent className='ion-padding'>
				<List list={list}></List>
			</IonContent>
		</IonPage>
	);
};

export default Home;
