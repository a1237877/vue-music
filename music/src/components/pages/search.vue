<template>
    <div class="search">
        <div class="search-box-wrapper">
            <!-- 搜索框 -->
            <v-search-box></v-search-box>
        </div>
    </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
    components: {
        'v-search-box': searchBox
    }
}
</script>

<style>

</style>
