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
      loadedPosts: [],
      allTags: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      setAllTags(state, allTags) {
        state.allTags = allTags
      },
      addPost (state, post) {
        state.loadedPosts.unshift(post)
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
      addPost ({ commit }, post) {
        return db.collection('posts').add({ ...post })
          .then(data => {
            commit('addPost', { ...post, id: data.id })
          })
      },
      editPost ({ commit }, editedPost) {
        db.collection('posts').get()
          .then(docs => {
            let allTags = {}
            docs.forEach(doc => {
              allTags = Object.assign(allTags, doc.data().tags)
            })
            return allTags
          })
          .then(allTags => {
            let tagsCount = {}
            const promises = Object.keys(allTags).map((tag) => {
              return db.collection('posts').where(`tags.${tag}`, '==', true).get()
                .then(docs => {
                  return {
                    tag,
                    size: docs.size
                  }
                })
            })
            return Promise.all(promises)
          })
          .then(tagsArray => {
            let tagsCount = {}
            tagsArray.forEach(tags => {
              tagsCount[tags.tag] = tags.size
            })
            db.collection('tags').doc('tags').set(tagsCount)
              .then(() => {
                commit('setAllTags', tagsCount)
              })
          })
        return db.collection('posts').doc(editedPost.id).update(editedPost)
          .then(() => {
            commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      async setPosts ({ commit }) {
        // if (state.loadedPosts.length !== 0) return
        await db.collection('posts').where('isShow', '==', true).orderBy('postTime', 'desc').get()
          .then(docs => {
            const postsArray = []
            docs.forEach(doc => {
              postsArray.push({ ...doc.data(), id: doc.id })
            })
            commit('setPosts', postsArray)
          })
      },
      async setAdminPosts ({ commit }) {
        // if (state.loadedPosts.length !== 0) return
        await db.collection('posts').orderBy('postTime', 'desc').get()
          .then(docs => {
            const postsArray = []
            docs.forEach(doc => {
              postsArray.push({ ...doc.data(), id: doc.id })
            })
            commit('setPosts', postsArray)
          })
      },
      async setTagsPosts ({ commit }, tag) {
        await db.collection('posts').where('isShow', '==', true).where(`tags.${tag}`, '==', true).get()
          .then(docs => {
            const postsArray = []
            docs.forEach(doc => {
              postsArray.push({ ...doc.data(), id: doc.id })
            })
            commit('setPosts', postsArray)
          })
      },
      async setAllTags ({ commit, state }) {
        await db.collection('tags').doc('tags').get()
          .then(doc => {
            commit('setAllTags', doc.data())
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
      },
      allTags (state) {
        return state.allTags
      }
    }
  })
}

export default createStore