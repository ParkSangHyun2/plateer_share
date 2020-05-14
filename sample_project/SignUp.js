const signUpTemplate = 
`
<v-layout row class="text-xs-center bg-content">
    <v-container class="text-xs-center">
      <v-layout class="minHeightExample" row child-flex justify-center align-center wrap>
        <v-flex class="login-box" fill-height>
          <v-card class="pa-10" outlined>
            <v-card-title class="sign-title text-center">
              <h4>판매자 등록</h4>
            </v-card-title>
            <v-form>
              <v-text-field v-model="email" name="Email" label="Email"></v-text-field>
              <v-text-field v-model="password" name="Password" label="Password" type="password"></v-text-field>
              <v-text-field v-model="location" name="위치" label="위치"></v-text-field>
              <v-card-actions>
                <v-row align="center">
                  <v-col cols="12" sm="12">
                    <div class="text-center">
                      <div class="my-4">
                        <v-btn large block @click="signUp">Sign Up</v-btn>
                      </div>
                      <div>
                        <v-btn primary large block @click="$emit('route-page', ['MainPage'])">Cancel</v-btn>
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
`

const signUpDatas = {
    email:'',
    password:'',
    location:'',
}

const SignUp = Vue.component('sign-up',{
    template: signUpTemplate,
    data: function() {
        return signUpDatas;
    },
    methods: {
        signUp: function() {
            if(this.email==='' && this.email===undefined && this.email === null &&
            this.password==='' && this.password===undefined && this.password === null){
                alert('모두 입력해주세요.');
                return;
            };

            const member = getMemberInstance(this.email, this.password, this.location);
            axios.post('http://localhost:3000/member', member);

            this.$emit('route-page', ['MainPage']);
        }
    }
})