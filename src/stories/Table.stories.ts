import type { Meta, StoryObj } from '@storybook/svelte';
import Table from '$lib/Table.svelte';
import { CCLVividColor } from '$lib/config/config.js';

const meta = {
	title: 'Table',
	component: Table,
	tags: ['autodocs'],
	argTypes: {
		headingColor: {
			control: {
				type: 'select'
			},
			options: [
				CCLVividColor.STRAWBERRY_PINK,
				CCLVividColor.PINEAPPLE_YELLOW,
				CCLVividColor.SODA_BLUE
			]
		}
	}
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * サービスで使用するテーブルコンポーネント
 */
export const Pink: Story = {
	args: {
		tableHeading: ['更新日時', 'お知らせ', 'カテゴリ'],
		tableData: [
			['2024/04/02', 'hogeページを更新', '更新情報'],
			['2024/04/03', 'fugaページを更新', '更新情報'],
			['2024/04/04', 'piyoページを更新', '更新情報']
		],
		headingColor: CCLVividColor.STRAWBERRY_PINK
	}
};

export const Yellow: Story = {
	args: {
		tableHeading: ['更新日時', 'お知らせ', 'カテゴリ'],
		tableData: [
			['2024/04/02', 'hogeページを更新', '更新情報'],
			['2024/04/03', 'fugaページを更新', '更新情報'],
			['2024/04/04', 'piyoページを更新', '更新情報']
		],
		headingColor: CCLVividColor.PINEAPPLE_YELLOW
	}
};

export const Blue: Story = {
	args: {
		tableHeading: ['更新日時', 'お知らせ', 'カテゴリ'],
		tableData: [
			['2024/04/02', 'hogeページを更新', '更新情報'],
			['2024/04/03', 'fugaページを更新', '更新情報'],
			['2024/04/04', 'piyoページを更新', '更新情報']
		],
		headingColor: CCLVividColor.SODA_BLUE
	}
};
