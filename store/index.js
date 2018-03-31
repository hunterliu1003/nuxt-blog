import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post (ID: ' + context.params.id + ')',
                lastUpdateTime: '22 Mar 2018',
                previewText: 'first Preview Text!',
                content: 'first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!',
                tags: ['tag1', 'tag2', 'tag3', 'tag4']
              },
              {
                id: '2',
                title: 'Second Post (ID: ' + context.params.id + ')',
                lastUpdateTime: '22 Mar 2018',
                previewText: 'first Preview Text!',
                content: 'first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!',
                tags: ['tag1', 'tag2', 'tag3', 'tag4']
              }
            ])
            resolve()
          }, 1500)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore