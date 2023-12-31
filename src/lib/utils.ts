import { INewArticle, INewProduct } from '@/types';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getColorPercentage(
	percentage: number,
): string {
	let color = '';
	switch (true) {
		case percentage < 0:
			color = 'text-red-500';
			break;
		case percentage >= 0 && percentage < 20:
			color = 'text-yellow-500';
			break;
		case percentage >= 20:
			color = 'text-green-500';
			break;
		default:
			color = 'text-yellow-500';
			break;
	}
	return color;
}

export function getSatisfaction(value: number): string {
	let text = '';
	switch (true) {
		case value >= 90:
			text = 'Sangat Puas';
			break;
		case value >= 80:
			text = 'Puas';
			break;
		case value >= 70:
			text = 'Lumayan Puas';
			break;
		case value >= 60:
			text = 'Tidak Puas';
			break;
		default:
			text = 'Sangat Tidak Puas';
			break;
	}
	return text;
}

export function isProduct(
	data: INewProduct | INewArticle,
): data is INewProduct {
	return 'price' in data;
}
