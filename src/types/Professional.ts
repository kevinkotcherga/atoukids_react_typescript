export type Professional = {
	id: number;
	name: string;
	picture: string;
	job: string;
	city: string;
	workplaces: string[];
	for: string;
	review: number;
	notation: number[];
	diploma: {
		name: string;
		description: string;
	};
	method_of_working: string;
};

export type ProfessionalsData = {
	professionals: Professional[];
};

export type ProfessionalData = {
	professional: Professional;
};
