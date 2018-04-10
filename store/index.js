import Vuex from 'vuex'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCCy2wRcWuSyZuc_49UUnmsiSkf9kjw1jA",
  authDomain: "nuxt-blog-e0f9a.firebaseapp.com",
  databaseURL: "https://nuxt-blog-e0f9a.firebaseio.com",
  projectId: "nuxt-blog-e0f9a",
  storageBucket: "nuxt-blog-e0f9a.appspot.com",
  messagingSenderId: "179654731046"
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      uid: null,
      loadedPosts: []

    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost (state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
      setUid(state, uid) {
        state.uid = uid
      },
      clearUid(state) {
        state.uid = null
      }
    },
    actions: {
      addPost ({ commit, state }, post) {
        return firebase.auth().currentUser.getIdToken(true)
          .then(idToken => {
            this.$axios.$post('/posts.json?auth=' + idToken, post)
              .then(data => {
                commit('addPost', { ...post, id: data.name })
              })
              .catch(e => console.log(e))
          })
          .catch(e => console.log(e))
      },
      editPost ({ commit, state }, editedPost) {
        return firebase.auth().currentUser.getIdToken(true)
          .then(idToken => {
            this.$axios.$put('/posts/' + editedPost.id + '.json?auth=' + idToken, editedPost)
              .then(data => {
                commit('editPost', editedPost)
              })
              .catch(e => console.log(e))
          })
          .catch(e => console.log(e))
      },
      setPosts ({ commit }, posts) {
        commit('setPosts', posts)
      },
      authenticateUser ({ commit }, authData) {
        return firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
        .then(user => {
          commit('setUid', user.uid)
        })
        .catch(e => console.log(e))
      },
      initAuth ({ commit }, req) {
        return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              commit('setUid', user.uid)
            }
            resolve(user)
          })
        })
      },
      logout ({ commit }) {
        firebase.auth().signOut()
        commit('clearUid')
      }
    },
    getters: {
      posts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore