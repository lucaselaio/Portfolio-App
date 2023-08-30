<template>
    <div>
        <Navbar></Navbar>
        <div class="container-fluid mainContainer">
            <router-view></router-view>
        </div>
        <Footerbar></Footerbar>
    </div>
</template>
<script>
import Footerbar from './Footerbar.vue';
import Navbar from './Navbar.vue';
export default {
    components: { 
        Navbar,
        Footerbar
    },
}
</script>
<style></style>