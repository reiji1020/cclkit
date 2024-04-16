<script lang="ts">
    import '../lib/config/variables.css';
    import {getYear} from '$lib/scripts/script.js';

    /**
     * アクセス日の年情報を格納する
     * @type number
     */
    const year: number = getYear();
</script>

<footer>
    <div class="footer-style">
        <span class="copyright">Copyright © 2015 - {year} CANDY CHUPS Lab. All Rights Reserved. </span>
    </div>
</footer>

<style>
    .footer-style {
        height: 30px;
        background: var(--strawberry-pink);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .copyright {
        color: white;
        font-size: 9px;
    }
</style>
