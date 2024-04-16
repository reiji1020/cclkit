import type { Meta, StoryObj } from '@storybook/svelte';
// import Button from './Button.svelte';
import Header from '$lib/Header.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Header',
	component: Header,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
