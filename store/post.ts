import { defineStore } from 'pinia'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostState {
  posts: Post[]
}

const state = (): PostState => ({
  posts: [],
})

const getters = {
  getById: (state: PostState) => (postId: number) => {
    return state.posts.find((post: Post) => post.id === postId)
  },
}

export const usePostStore = defineStore({
  id: 'post-store',
  state,
  getters,
  actions: {
    async fetchPosts() {
      this.posts = await this.$nuxt.$axios.get('/posts')
    },
  },
})
