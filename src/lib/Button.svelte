<script lang="ts">
    import '$lib/config/variables.css';
    /**
     * ボタンのラベル
     */
    export let label :string;
    /**
     * ボタンの背景色
     */
    export let buttonBgColor :string;
</script>

<button type="button" class="button-wrapper" style="--button-bg-color: var({buttonBgColor})">
    {label}
</button>

<style>
    .button-wrapper {
        background-color: var(--button-bg-color);
        border: none;
        padding: 28px 56px;
        color: #fff;
        border-radius: 50px;
        font-size: 24px;
        cursor: pointer;
    }
</style>