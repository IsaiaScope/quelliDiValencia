import {
	IonBackButton,
	IonButtons,
	IonHeader,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

interface headerProp {
	title: string;
}

const Header: React.FC<headerProp> = ({ title }) => {
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
