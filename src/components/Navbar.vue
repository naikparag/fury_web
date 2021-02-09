<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item href="/">
                <img
                    src="@/assets/logo.jpg"
                    alt="Market Fury"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Market
            </b-navbar-item>
            <b-navbar-item href="#">
                Sectors
            </b-navbar-item>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-dark">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button active">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>