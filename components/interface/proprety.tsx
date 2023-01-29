export interface Lessor {
	fullName: string;
	contacts: string;
}

export interface BasicalDetailsType {
	name: string;
	content: string;
}

export interface RentalInformation {
	isAvailable: boolean;
	availability_date: string;
	RentalType: string;
	geolocalisation: string;
	price: string;
	guarantee_value: string;
	monetaryCurrency: string;
	coverPicture: string;
	address: string;
	area: string;
	lessor: Lessor;
}

export interface PropretyGalleryImage {
	_id: string;
	url: string;
	width: number;
	height: number;
	size: number;
	uploadDate: string;
}

export interface TenantCharge {
	charge: string;
	price: number;
}

export interface RoomDetails {
	name: string;
	size: number;
	unit: string;
}

export interface Proprety {
	owner: string;
	uploadDate: string;
	updateDate: string[];
	questions: string[];
	visits: string[];
	rentalInformation: RentalInformation;
	description: {
		gallery: PropretyGalleryImage[];
		tenantCharges: TenantCharge[];
		interior: {
			rooms: RoomDetails[];
		};
		external: {
			rooms: RoomDetails[];
		};
		furniture: string[];
		geographicLocation: {
			nearestSchoolDistance: [
				{
					name: string;
					geolocalisation: string;
					grade: string;
					distance: string;
				}
			];
			nearestTransportationStopDistance: [
				{
					name: string;
					geolocalisation: string;
					distance: string;
				}
			];
		};
	};
	contacts: BasicalDetailsType[];
	rentHistorical: [
		{
			modificationDate: string;
			whathange: [{ change: string }];
		}
	];
	statistics: {
		referencingNote: number;
		averagePiewsPerWeek: Number;
		averagePrade: number;
		averageViewsPerMonth: number;
		personWhoNoted: number;
		averageVisitsPerWeek: number;
		viewsPerWeek: [
			{
				startTime: Date;
				endTime: Date;
				numberOfView: number;
			}
		];
		viewsPerMonth: [
			{
				startTime: Date;
				endTime: Date;
				numberOfView: number;
			}
		];
	};
}

// interior: {
// 	bedrooms: string;
// 	livingRoom: string;
// 	lounge: string;
// 	diningRoom: string;
// 	kitchen: string;
// 	attick: string;
// 	floor: string;
// 	toilet: string;
// 	bathroom: string;
// 	homeDetails: string;
// 	rooms: [
// 		{
// 			name: string;
// 			details: string;
// 		}
// 	];
// };

// external: {
// 	toilets: string;
// 	bathrooms: string;
// 	garage: string;
// 	garden: string;
// 	terrace: string;
// 	balcony: string;
// 	swimming_pool: string;
// 	homeDetails: string;
// 	other: [
// 		{
// 			object: string;
// 			details: string;
// 		}
// 	];
// };
