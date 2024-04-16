import { expect, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/svelte';
import Thumbnail from '$lib/Thumbnail.svelte';
import { CCLVividColor } from '$lib/config/config.js';

const meta = {
	title: 'Thumbnail',
	component: Thumbnail,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
		borderColor: {
			control: { type: 'select' },
			options: [
				CCLVividColor.STRAWBERRY_PINK,
				CCLVividColor.PINEAPPLE_YELLOW,
				CCLVividColor.SODA_BLUE
			]
		},
		altText: { control: { type: 'text' } },
		src: { control: { type: 'text' } },
		imageSize: { control: { type: 'text' } }
	}
} satisfies Meta<Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pink: Story = {
	args: {
		altText: 'Strawberry Pink',
		src: 'thumbnail.png',
		imageSize: '120px',
		borderColor: CCLVividColor.STRAWBERRY_PINK
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
		await expect(args.borderColor).toBe(CCLVividColor.STRAWBERRY_PINK);
	}
};

export const Yellow: Story = {
	args: {
		altText: 'Pineapple Yellow',
		src: 'thumbnail.png',
		imageSize: '120px',
		borderColor: CCLVividColor.PINEAPPLE_YELLOW
	}
};

export const Blue: Story = {
	args: {
		altText: 'Soda Blue',
		src: 'thumbnail.png',
		imageSize: '120px',
		borderColor: CCLVividColor.SODA_BLUE
	}
};
