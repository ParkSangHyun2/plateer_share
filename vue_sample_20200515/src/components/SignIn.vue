<template>
  <div>
    <v-layout row class="text-xs-center bg-content">
      <v-container class="text-xs-center">
        <v-layout class="minHeightExample" row child-flex justify-center align-center wrap>
          <v-flex class="login-box" fill-height>
            <v-card class="pa-10" outlined>
              <v-card-title class="sign-title text-center">
                <h4>판매자 로그인</h4>
              </v-card-title>
              <v-form>
                <v-text-field v-model="email" name="Email" label="Email"></v-text-field>
                <v-text-field v-model="password" name="Password" label="Password" type="password"></v-text-field>
                <v-card-actions>
                  <v-row align="center">
                    <v-col cols="12" sm="12">
                      <div class="text-center">
                        <div class="my-4">
                          <v-btn large block @click="login">Login</v-btn>
                        </div>
                        <div>
                          <v-btn primary large block>Sign Up</v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';

const singInDatas = {
  email:'',
  password:'',
}

export default {
    data: function() {
      return singInDatas;
    },
    methods:{
      login: async function() {
        //
        let foundMember = {};

        await axios.get(`http://localhost:3000/member?email=${this.email}&password=${this.password}`)
        .then((response) => {
          foundMember = response.data;
        });

        console.log(foundMember[0]);
        if(foundMember[0].email === this.email){
          document.cookie = `loggedMember=${this.email};`
        }
      }
    }
}
</script>

<style lang="postcss" scoped>

</style>