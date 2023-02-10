import {
	IonBackButton,
	IonButtons,
	IonHeader,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

interface headerProps {
	title: string;
}

const Header: React.FC<headerProps> = ({ title }) => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot='start'>
					<IonBackButton />
				</IonButtons>
				<IonTitle className='ion-text-capitalize'>{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
