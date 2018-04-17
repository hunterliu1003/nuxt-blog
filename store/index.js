import Vuex from 'vuex'
import * as firebase from 'firebase'
import config from '@/firebase.config.js'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const createStore = () => {
  return new Vuex.Store({
    state: {
      // token: null,
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
        state.loadedPosts.splice(postIndex, 1, editedPost)
      },
      // setToken(state, token) {
      //   state.token = token
      // },
      // clearToken(state) {
      //   state.token = null
      // },
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
      async setPosts ({ commit, state }) {
        if (state.loadedPosts.length !== 0) return
        await this.$axios.$get('/posts.json')
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            commit('setPosts', postsArray)
          })
          .catch(e => context.error())
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