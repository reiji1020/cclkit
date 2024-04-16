<script lang="ts">
    import './config/variables.css';

    /**
     * サムネイル画像の大きさ
     * @type number
     */
    export let imageSize: number;
    /**
     * 枠線の色
     * @default --strawberry-pink
     * @type string
     */
    export let borderColor: string;
    /**
     * 画像ソース
     * @type string
     */
    export let src: string;
    /**
     * alt属性に指定する値
     * @type string
     */
    export let altText: string;
</script>

<img src={src} alt={altText} class="image-style" style="--image-size: {imageSize}; --borderColor: var({borderColor})" />

<style>
    .image-style {
        height: var(--image-size);
        width: var(--image-size);
        border-radius: 50%;
        border: 5px solid var(--borderColor);
    }
</style>