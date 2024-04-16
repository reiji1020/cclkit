<script lang="ts">
	import '$lib/config/variables.css';
	import { CCLVividColor, CCLPastelColor } from '$lib/config/config.js';
	/**
	 * 表の見出しデータ
	 * @type string[]
	 */
	export let tableHeading: string[];

	/**
	 * 表の実データ
	 * @type string[][]
	 */
	export let tableData: string[][];
	/**
	 * 表のメインカラー
	 * @type string
	 */
	export let headingColor: string;
	/**
	 * 表のサブカラー
	 * メインカラーに応じて自動で変化する
	 * @type string
	 */
	let bodyColor :string;

	switch (headingColor) {
		case CCLVividColor.STRAWBERRY_PINK:
			bodyColor = CCLPastelColor.PEACH_PINK;
			break;
		case CCLVividColor.PINEAPPLE_YELLOW:
			bodyColor = CCLPastelColor.LEMON_YELLOW;
			break;
		case CCLVividColor.SODA_BLUE:
			bodyColor = CCLPastelColor.SUGAR_BLUE;
			break;
		default:
			bodyColor = CCLPastelColor.PEACH_PINK;
	}
</script>

<table class="table-wrapper">
	<thead>
		<tr>
			{#each tableHeading as title}
				<th class="th-style" style="--heading-color: var({headingColor})">{title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each tableData as row}
			<tr class="row-style" style="--table-body-color: var({bodyColor})">
				{#each row as data}
					<td>{data}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.table-wrapper {
		border-spacing: 0;
	}

	.th-style {
		background-color: var(--heading-color);
		color: #fff;
		padding: 4px 24px;
	}

	.row-style {
		color: #5F5F60;
		text-align: center;
	}
	/**
		奇数列だけパステルカラーの背景色をつける
	 */
	.row-style:nth-child(odd) {
		background-color: var(--table-body-color);
	}
</style>
