import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './tabs';

const Root: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Tabs />
		</IonReactRouter>
	</IonApp>
);

export default Root;
