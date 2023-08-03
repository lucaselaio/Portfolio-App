<template>
    <nav class="w-full navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
            <div style="color: white; margin: 5px 35px;">
                <i class="fa-solid fa-person-chalkboard fa-xl"></i>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/resume">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Work</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex" role="search">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/lucas-v-azevedo/" target="_blank" class="nav-link"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss" scoped>
nav {
    background-color: black;
    font-size: 25px;
}
</style>
