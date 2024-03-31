import type { Meta, StoryObj } from '@storybook/svelte';
// import Button from './Button.svelte';
import Button from '$lib/Button.svelte';
import CCLVividColor from '$lib/config/config.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		buttonBgColor: {
			control: { type: 'select' },
			options: [
				CCLVividColor.STRAWBERRY_PINK,
				CCLVividColor.PINEAPPLE_YELLOW,
				CCLVividColor.SODA_BLUE
			]
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/**
 * サービス、サークルのメインカラー
 *
 * 意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。
 *
 * Services, main colours of the circle.
 *
 * Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.
 */
export const Pink: Story = {
	args: {
		label: 'Strawberry Pink',
		buttonBgColor: CCLVividColor.STRAWBERRY_PINK
	}
};
/**
 * 意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。
 *
 * Used when presenting information to help or assist users in decision-making. Neutral colour.
 */
export const Yellow: Story = {
	args: {
		label: 'Pineapple Yellow',
		buttonBgColor: CCLVividColor.PINEAPPLE_YELLOW
	}
};
/**
 * 意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。
 *
 *　Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.
 */
export const Blue: Story = {
	args: {
		label: 'Soda Blue',
		buttonBgColor: CCLVividColor.SODA_BLUE
	}
};
