<template>
    <nav class="w-full navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/work">Work History</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex" role="search">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/lucas-v-azevedo/" target="_blank" class="nav-link"><i
                                class="fa-brands fa-linkedin fa-lg"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" target="_blank" class="nav-link"><i class="fa-brands fa-square-github fa-lg"></i></a>
                    </li>
                    <li class="nav-item">
                        <ThemeSwitch></ThemeSwitch>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue';

export default {
    name: 'Navbar',
    components: {
        ThemeSwitch
    }
}
</script>

<style lang="scss" scoped>
nav {
    // background-color: $glass;
    font-size: 20px;
}
</style>
