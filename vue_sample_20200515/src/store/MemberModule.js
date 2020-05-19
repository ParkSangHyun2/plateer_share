import axios from 'axios';

const MemberModule =
    {
        namespaced: true,
        state: {
            loggedMemberEmail: '',
        },
        mutations: {
            setLoggedMemberEmail: function(state, memberEmail) {
                //
                state.loggedMemberEmail = memberEmail;
            }
        },
        actions: {
            signUp: function(context, memberModel) {
                //
                axios.post('http://localhost:3000/member', memberModel);
            },
            signIn: async function(context, memberModel) {
                //
                let foundMember = {};

                await axios.get(`http://localhost:3000/member?email=${memberModel.email}&password=${memberModel.password}`)
                    .then((response) => {
                        foundMember = response.data;
                    });

                context.commit('setLoggedMemberEmail', foundMember[0].email);
            },
            logout: function(context) {
                context.commit('setLoggedMemberEmail', '');
            }
        }
    };

export default MemberModule;
