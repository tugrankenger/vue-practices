import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      name: 'tugran',
      lname: 'kenger',
      age:13,
      address:{},
      password: 123123123,
      tc: 1111111
    },
    fullname:"tugran kenger",
    theme: 'dark',
    permission: [1, 2, 3, 4, 5, 6],
    userList: ['desmond', 'kate', 'juliet', 'john', 'jack', 'sawyer'],
    itemList:[
      {id:1, title: "Masa", type:"mobilya"},
      {id:1, title: "Sandalye", type:"mobilya"},
      {id:1, title: "TV", type:"elektronik"},
      {id:1, title: "Monitor", type:"elektronik"},
      {id:1, title: "Bardak", type:"plastik"}
    ]
  },
  getters:{
    _woodItems: state=> state.itemList.filter(i=> i.type== "mobilya"),
    _activeUser(state){
      const user = {
        ...state.user
      }
       delete user.password

       return user
    }
  }
});

export default store;
