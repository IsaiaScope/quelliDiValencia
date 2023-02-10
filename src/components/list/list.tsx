import { IonList, IonItem, IonLabel } from '@ionic/react';

interface listProps {
	list: {
		id: number;
		label: string;
		routerLink: string;
	}[];
}

const List: React.FC<listProps> = ({ list }) => {
	return (
		<IonList lines='full'>
			{list.map(({ label, id, routerLink }) => {
				return (
					<IonItem key={id} routerLink={routerLink}>
						<IonLabel className='ion-text-capitalize'>{label}</IonLabel>
					</IonItem>
				);
			})}
		</IonList>
	);
};

export default List;
