import Vuex from 'vuex'
import * as firebase from 'firebase'
import config from '@/firebase.config.js'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

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
        return db.collection('posts').add({ ...post })
          .then(data => {
            commit('addPost', { ...post, id: data.id })
          })
      },
      editPost ({ commit, state }, editedPost) {
        return db.collection('posts').doc(editedPost.id).update(editedPost)
          .then(data => {
            commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      async setPosts ({ commit, state }) {
        if (state.loadedPosts.length !== 0) return
        await db.collection('posts').orderBy('postTime').get()
          .then(snapshot => {
            const postsArray = []
            snapshot.forEach(doc => {
              postsArray.push({ ...doc.data(), id: doc.id })
            })
            commit('setPosts', postsArray)
          })
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