// import Vue from 'vue'
import Router from 'vue-router'
import IndexView from './views/index/app.vue'
import LoginView from './views/login/app.vue'
// import CommentView from './views/CommentView.vue'
// import UserView from './views/UserView.vue'

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

export default new Router({
  // mode: 'abstract',
  routes: [
    // { path: '/top', component: createStoriesView('top') },
    // { path: '/new', component: createStoriesView('new') },
    // { path: '/show', component: createStoriesView('show') },
    // { path: '/ask', component: createStoriesView('ask') },
    // { path: '/job', component: createStoriesView('job') },
    // { path: '/article/:url(.*)?', component: ArticleView },
    // { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/login', component: LoginView },
    { path: '/', component: IndexView }
  ]
})
