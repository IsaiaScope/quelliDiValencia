import { SplashScreen } from '@capacitor/splash-screen';

const splashScreenMng = async () => await SplashScreen.hide();

export const capacitorSettingsInit = async () => {
	await splashScreenMng();
};
