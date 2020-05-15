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
    <template v-if="page === 'MainPage'">
      <CardContainer :goods-datas="goodsList">
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
  </div>
</template>

<script>
import CardContainer from "./components/container/CardContainer";
import GoodsHeader from "./components/GoodsHeader";
import GoodsRegistForm from "./components/GoodsRegistForm";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Calousels from "./components/Caloucsels";

export default {
  //
  name: "App",
  components: {
    CardContainer,
    GoodsHeader,
    Calousels,
    GoodsRegistForm,
    SignIn,
    SignUp
  },
  data: function() {
    return {
      page: "MainPage",
      goodsList: [],
      loggedMember: ""
    }
  },
  methods: {
    routePage: function(pageName) {
      this.page = pageName[0];
    }
  },
  updated: function() {
    this.loggedMember = ("; " + document.cookie).split("; loggedMember=").pop().split(";").shift();
    console.log(this.loggedMember);
  }
};
</script>
