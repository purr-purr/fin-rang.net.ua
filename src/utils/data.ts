import {type INavigationList} from '@utils/types';

export const navigationList: INavigationList[] = [
	{title: 'Про компанію', path: '#about', isActive: true},
	{title: 'Звітність', path: '#share-holders-info', isActive: true},
	{title: 'Новини', path: '#share-holders-info', isActive: true},
	{
		title: 'Повідомити про порушення',
		path: '#report-violation',
		isActive: true,
	},
	{title: 'Контакти', path: '#contacts', isActive: true},
];
