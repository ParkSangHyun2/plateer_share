const goodsHeaderTemplate = 
`
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

        <v-btn text>
            <v-icon>mdi-basket-outline</v-icon>
        </v-btn>
        <v-btn text>
            <v-icon @click="routeRegistration">mdi-account-outline</v-icon>
        </v-btn>
    </v-app-bar>
</div>
`;

const GoodsHeader = Vue.component('goods-header',{
    template: goodsHeaderTemplate,
    methods: {
        routeRegistration: function() {
            this.$emit('route-page',['RegistraionPage']);
        },
        routeMain: function(event) {
            this.$emit('route-page',['MainPage']);
        }
    }
})

