import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { home as homeIcon, peopleCircleSharp as profileIcon } from 'ionicons/icons';
import Home from '../home/home';
import Profile from '../profile/profie';
import { paths } from './paths';
import WorKInProgress from '../wip/wip';
import RandomPicker from '../random-picker/random-picker';
import Settings from '../settings/settings';

const Tabs: React.FC = () => {
	const { home, profile, rp, wip, settings } = paths;
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path={`/:tab(${home})`} component={Home} exact={true} />
				<Route path={`/:tab(${home})/${rp}`} component={RandomPicker} exact={true} />
				<Route
					path={`/:tab(${home})/${wip}`}
					component={WorKInProgress}
					exact={true}
				/>
				<Route path={`/:tab(${profile})`} component={Profile} exact={true} />
				<Route
					path={`/:tab(${profile})/${settings}`}
					component={Settings}
					exact={true}
				/>
				<Route render={() => <Redirect to={`/${home}`} />} />
			</IonRouterOutlet>
			<IonTabBar slot='bottom'>
				<IonTabButton tab={home} href={`/${home}`}>
					<IonIcon icon={homeIcon} />
					<IonLabel className='ion-text-capitalize'>{home}</IonLabel>
				</IonTabButton>
				<IonTabButton tab={profile} href={`/${profile}`}>
					<IonIcon icon={profileIcon} />
					<IonLabel className='ion-text-capitalize'>{profile}</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default Tabs;
