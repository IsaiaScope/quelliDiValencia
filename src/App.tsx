import { IonApp, setupIonicReact } from '@ionic/react';
import Root from './pages/root/root';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<Root />
	</IonApp>
);

export default App;
