<template>
<div>
    <v-app-bar
        app
        color="grey lighten-5"
        >
        <v-toolbar-title color="deep-purple" @click="routeMain">나비마켓</v-toolbar-title>
        <div class="d-flex align-center"></div>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-text-field
            hide-details
            prepend-icon="search"
            color="primary"
            single-line
        ></v-text-field>

        <template v-if="loggedMemberEmail===''">
            <v-btn text @click="routeSignUp">SignUp</v-btn>
            <v-btn text @click="routeSignIn">SignIn</v-btn>
        </template>
        <template v-else>
            <v-btn text>{{loggedMemberEmail}}</v-btn>
            <v-btn text @click="logout">LogOut</v-btn>
        </template>

        <v-btn text>
            <v-icon>mdi-basket-outline</v-icon>
        </v-btn>
        <v-btn text>
            <v-icon @click="routeRegistration">mdi-account-outline</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>

<script>
import store from '../store/MemberModule';

export default {
    computed: {
        loggedMemberEmail: function() {
            return store.state.loggedMemberEmail;
        }

    },
    methods: {
        routeRegistration: function () {
            this.$emit('route-page', ['RegistraionPage']);
        },
        routeMain: function () {
            this.$emit('route-page', ['MainPage']);
        },
        routeSignUp: function () {
            this.$emit('route-page', ['SignUp']);
        },
        routeSignIn: function () {
            this.$emit('route-page', ['SignIn']);
        },
        logout: function () {
            store.dispatch('logout');
        }
    }
}
</script>
<style scoped>

</style>
