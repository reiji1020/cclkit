import type { Meta, StoryObj } from '@storybook/svelte';
import Table from '$lib/Table.svelte';

const meta = {
	title: 'Table',
	component: Table,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * サービスで使用するテーブルコンポーネント
 */
export const Default: Story = {
	args: {
		tableHeading: ['更新日時', 'お知らせ', 'カテゴリ']
	}
};
