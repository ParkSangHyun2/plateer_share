<template>
  <!-- <div>
    <GoodsHeader></GoodsHeader>
    <br/><br/><br/>
    <CardContainer></CardContainer>
  </div>-->
  <div>
    <GoodsHeader v-on:route-page="routePage" :logged-member="loggedMember"></GoodsHeader>
    <br />
    <br />
    <br />
    <router-view>

    </router-view>
    <h1>{{sampleData}}</h1>
    <button @click="testSample">BUTTON</button>
    <!--
    <template v-if="page === 'MainPage'">
      <CardContainer>
        <template v-slot:calousels>
          <Calousels></Calousels>
        </template>
      </CardContainer>
    </template>
    <template v-else-if="page === 'RegistraionPage'">
      <GoodsRegistForm></GoodsRegistForm>
    </template>
    <template v-if="page === 'SignIn'">
      <SignIn v-on:route-page="routePage"></SignIn>
    </template>
    <template v-if="page === 'SignUp'">
      <SignUp v-on:route-page="routePage"></SignUp>
    </template>
    -->
  </div>
</template>

<script>
import GoodsHeader from "./components/GoodsHeader";
import store from './store/SampleStore';
//import mapState from 'vuex';

export default {
  //
  name: "App",
  components: {
    GoodsHeader
  },
  data: function() {
    return {
      page: "MainPage",
      goodsList: [],
      loggedMember: ""
    };
  },
  computed: {
    sampleData: function() {
      return store.state.data;
    }
  },
  methods: {
    testSample () {
      store.state.data = 'changeSomething';
    },
    routePage: function(pageName) {
      this.page = pageName[0];
    }
  },
  updated: function() {
    this.loggedMember = ("; " + document.cookie)
      .split("; loggedMember=")
      .pop()
      .split(";")
      .shift();
    console.log(this.loggedMember);
  }
};
</script>
