<template>
    <div class="f-uniswap-pools">
        <pairs-list />
    </div>
</template>

<script>
import PairsList from '@/components/data-tables/funi/PairsList/PairsList.vue';

export default {
    name: 'ZUniswapPools',

    components: { PairsList },
};
</script>
