import alexandra from './src/assets/images/professionals/alexandra.png';
import aline from './src/assets/images/professionals/aline.jpg';
import amelie from './src/assets/images/professionals/amelie.png';
import anceline from './src/assets/images/professionals/anceline.jpeg';
import anne from './src/assets/images/professionals/anne.png';
import carine from './src/assets/images/professionals/carine.png';
import caroline from './src/assets/images/professionals/caroline.png';
import cedric from './src/assets/images/professionals/cedric.png';
import charlotte from './src/assets/images/professionals/charlotte.jpg';
import clara from './src/assets/images/professionals/clara.png';
import florie from './src/assets/images/professionals/florie.png';
import gala from './src/assets/images/professionals/gala.png';
import magali from './src/assets/images/professionals/magali.png';
import maram from './src/assets/images/professionals/maram.png';
import marie from './src/assets/images/professionals/marie.png';
import marina from './src/assets/images/professionals/marina.jpg';
import miary from './src/assets/images/professionals/miary.png';
import myriam from './src/assets/images/professionals/myriam.png';
import pauline from './src/assets/images/professionals/pauline.jpg';
import phillipe from './src/assets/images/professionals/phillipe.png';
import sandra from './src/assets/images/professionals/sandra.png';
import valerie from './src/assets/images/professionals/valerie.png';

export const getProfessionals = (city: string, target: string | null) => {
  let modifiedTarget = target;

	if (target === "0"){
    modifiedTarget = null;
  }

  if (target === "Lycéens et étudiants"){
    modifiedTarget = 'students'
  }

	if (modifiedTarget){
		return professionals.filter(professional =>
			professional.city.toLowerCase() === city.toLowerCase()
			&& professional.target.toLowerCase() === modifiedTarget?.toLowerCase()
		);
	} else {
			return professionals.filter(professional =>
			professional.city.toLowerCase() === city.toLowerCase()
		);
	}
};

export const getProfessional = (id: number) => {
	return professionals.find(professional => professional.id === id);
};

export const professionals = [
	{
		name: 'Alexandra',
		id: 1,
		picture: alexandra,
		job: 'Consultant.e sommeil enfant / bébé Facilitatrice en discipline positive',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working: 'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Aline',
		id: 2,
		picture: aline,
		job: 'Consultant.e sommeil enfant / bébé Facilitatrice en discipline positive',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Amelie',
		id: 3,
		picture: amelie,
		job: 'Consultant.e sommeil enfant / bébé Facilitatrice en discipline positive',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Anceline',
		id: 4,
		picture: anceline,
		job: 'Consultant.e sommeil enfant / bébé Facilitatrice en discipline positive',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Ane',
		id: 5,
		picture: anne,
		job: 'Consultant.e sommeil enfant / bébé Facilitatrice en discipline positive',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Carine',
		id: 6,
		picture: carine,
		job: 'Hypnothérapeute',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Caroline',
		id: 7,
		picture: caroline,
		job: 'Hypnothérapeute',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Cedric',
		id: 8,
		picture: cedric,
		job: 'Hypnothérapeute',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Charotte',
		id: 9,
		picture: charlotte,
		job: 'Hypnothérapeute',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Clara',
		id: 10,
		picture: clara,
		job: 'Infirmièr.e puericultrice',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Florie',
		id: 11,
		picture: florie,
		job: 'Infirmièr.e puericultrice',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Gala',
		id: 12,
		picture: gala,
		job: 'Infirmièr.e puericultrice',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 4],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Magali',
		id: 13,
		picture: magali,
		job: 'Infirmièr.e puericultrice',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Maram',
		id: 14,
		picture: maram,
		job: 'Sophrologue',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Marie',
		id: 15,
		picture: marie,
		job: 'Sophrologue',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Marina',
		id: 16,
		picture: marina,
		job: 'Sophrologue',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Miary',
		id: 17,
		picture: miary,
		job: 'Educateur.trice spécialisé.e',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 4],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Myriam',
		id: 18,
		picture: myriam,
		job: 'Educateur.trice spécialisé.e',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 4],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Pauline',
		id: 19,
		picture: pauline,
		job: 'Sophrologue',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 4.5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Phillipe',
		id: 20,
		picture: phillipe,
		job: 'Sophrologue',
		city: 'Toulouse',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'parents',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Sandra',
		id: 21,
		picture: sandra,
		job: 'Sophrologue',
		city: 'Lyon',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
	{
		name: 'Valerie',
		id: 22,
		picture: valerie,
		job: 'Sophrologue',
		city: 'Paris',
		workplaces: ['En cabinet', 'A domicile'],
		target: 'students',
		review: 3,
		notation: [5, 5, 5],
		diploma: {
			name: 'Elit elit proident voluptate',
			description: 'Nostrud ipsum velit magna ullamco eu et.',
		},
		method_of_working:
			'Enim ex exercitation officia laborum cillum. Mollit adipisicing voluptate elit duis officia Lorem occaecat et exercitation id velit aliqua. Excepteur id consequat ad enim esse deserunt fugiat. Irure veniam adipisicing dolore id ex non ea deserunt. Amet eiusmod esse aliquip qui occaecat eiusmod exercitation aute eu incididunt quis pariatur culpa elit. Incididunt nostrud culpa sunt ex. Duis ex tempor labore nisi. Aliqua qui ullamco reprehenderit exercitation excepteur reprehenderit officia quis velit. Dolor velit do fugiat nulla commodo ad non sit mollit. Ipsum nulla id voluptate nisi. Nisi et deserunt amet ad dolore excepteur do sint magna deserunt. Deserunt fugiat laboris officia Lorem. Aute laboris eiusmod do eiusmod occaecat incididunt irure excepteur culpa excepteur ex. Adipisicing ullamco nostrud eiusmod velit dolore deserunt non laboris nostrud commodo quis id. Commodo excepteur exercitation laboris laboris amet ipsum dolor fugiat. Tempor labore veniam qui non cillum reprehenderit et proident laborum nostrud amet fugiat. Elit fugiat nostrud laborum qui elit consectetur enim. Eiusmod exercitation ad reprehenderit magna duis proident. Qui est tempor ut mollit pariatur laboris sunt sit fugiat. Sit nulla adipisicing ut qui in nisi.',
	},
];
