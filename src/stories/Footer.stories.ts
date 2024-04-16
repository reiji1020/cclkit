import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from '$lib/Footer.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Footer',
	component: Footer,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
