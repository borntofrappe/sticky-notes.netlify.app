type Color = 'yellow' | 'green' | 'pink' | 'purple' | 'blue' | 'grey' | 'charcoal';

type Note = {
	lastModified: string;
	highlight: Color;
	text: string;
	open: boolean;
};
