<script>
    import { scale } from 'svelte/transition';
	import { expoInOut } from "svelte/easing";

    export let isOpen;
    export let src;
</script>

{#if isOpen}
    <div class="modal">
        <div class="contents">
            <img {src} alt="Cabañas Ucihuen" in:scale={{ delay: 250, duration: 300, easing: expoInOut }} out:scale={{ delay: 50, duration: 300, easing: expoInOut }}/>
        </div>
    </div>
{/if}

<style>
    .modal {
        z-index: 400;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: auto;
    }
    img {
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }
</style>
