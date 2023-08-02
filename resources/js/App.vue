<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-light bg-light mb-4">
            <a class="navbar-brand" href="#">Laravel Vue 3</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="navbar-nav" v-if="isLoggedIn">
                <a to="#" class="nav-item nav-link">Dashboard</a>
                <a to="#" class="nav-item nav-link">Posts</a>
                <a class="nav-item nav-link" style="cursor: pointer;" @click="logout">Logout</a>
            </div>
            <div class="navbar-nav" v-else>
                <a to="#" class="nav-item nav-link">Home</a>
                <a to="#" class="nav-item nav-link">Login</a>
                <a to="#" class="nav-item nav-link">Register</a>
            </div>
        </nav>


        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "App",
        data() {
            return {
                isLoggedIn: false,
            }
        },
    }
</script>