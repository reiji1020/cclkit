<script lang="ts">
    /**
     * 表の見出しデータ
     * @type string[]
     */
    export let tableHeading :string[];

    /**
     * 表の実データ
     * @type string[][]
     */
    export let tableData :string[][]
</script>

<table>
    <thead>
        <tr>
            {#each tableHeading as title}
                <th>{title}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>データ1</td>
            <td>データ2</td>
            <td>データ3</td>
        </tr>
        <tr>
            <td>データ4</td>
            <td>データ5</td>
            <td>データ6</td>
        </tr>
        <tr>
            <td>データ7</td>
            <td>データ8</td>
            <td>データ9</td>
        </tr>
    </tbody>
</table>