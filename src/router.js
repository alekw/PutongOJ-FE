import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Problems from './views/Problems.vue'
import Status from './views/Status.vue'
import Contests from './views/Contests.vue'
import Ranklist from './views/Ranklist.vue'
import FAQ from './views/FAQ.vue'

import News from './views/News.vue'
import Problem from './views/Problem.vue'
import Statistics from './views/Statistics.vue'
import User from './views/User/User.vue'
import UserProfile from './views/User/UserProfle.vue'
import UserEdit from './views/User/UserEdit.vue'
import Register from './views/Register.vue'
import Contest from './views/Contest/Contest.vue'
import ContestOverview from './views/Contest/ContestOverview.vue'
import ContestRanklist from './views/Contest/ContestRanklist.vue'
import ContestProblem from './views/Contest/ContestProblem.vue'
import ContestStatus from './views/Contest/ContestStatus.vue'
import Admin from './views/Admin/Admin.vue'
import AdminBoard from './views/Admin/Board.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    props: (route) => ({
      page: route.query.page,
      limit: route.query.limit
    })
  }, {
    path: '/problems',
    component: Problems,
    name: 'problems',
    props: (route) => ({
      page: route.query.page,
      limit: route.query.limit,
      field: route.query.field,
      query: route.query.query
    })
  }, {
    path: '/status',
    component: Status,
    name: 'status',
    props: (route) => ({
      page: route.query.page,
      limit: route.query.limit,
      uid: route.query.uid,
      pid: route.query.pid,
      language: route.query.language,
      judge: route.query.judge
    })
  }, {
    path: '/ranklist',
    component: Ranklist,
    name: 'ranklist',
    props: (route) => ({
      page: route.query.page,
      limit: route.query.limit
    })
  }, {
    path: '/contests',
    component: Contests,
    name: 'contests'
  }, {
    path: '/faq',
    component: FAQ,
    name: 'faq'
  }, {
    path: '/news/:nid',
    component: News,
    name: 'news',
    props: (route) => ({
      nid: route.params.nid
    })
  }, {
    path: '/problems/:pid',
    component: Problem,
    name: 'problem',
    props: (route) => ({
      pid: route.params.pid
    })
  }, {
    path: '/statistics/:pid',
    component: Statistics,
    name: 'statistics',
    props: (route) => ({
      pid: route.params.pid
    })
  }, {
    path: '/users/:uid',
    component: User,
    props: (route) => ({
      uid: route.params.uid
    }),
    children: [{
      path: '',
      component: UserProfile,
      name: 'user'
    }, {
      path: 'edit',
      component: UserEdit,
      name: 'useredit'
    }]
  }, {
    path: '/register',
    component: Register,
    name: 'register'
  }, {
    path: '/contests/:cid',
    component: Contest,
    props: (route) => ({
      cid: route.params.cid
    }),
    children: [{
      path: '',
      // Warning: 这是默认子路由，导航时这个 name 放在子路由里，别放在上一代路由里
      name: 'contest',
      component: ContestOverview,
      props: (route) => ({
        cid: route.params.cid
      })
    }, {
      path: 'ranklist',
      name: 'contest_ranklist',
      component: ContestRanklist,
      props: (route) => ({
        cid: route.params.cid
      })
    }, {
      path: 'problems/:pid',
      name: 'contest_problem',
      component: ContestProblem,
      props: (route) => ({
        cid: route.params.cid,
        pid: route.params.pid
      })
    }, {
      path: 'status',
      name: 'contest_status',
      component: ContestStatus,
      props: (route) => ({
        cid: route.params.cid,
        page: route.query.page,
        limit: route.query.limit,
        uid: route.query.uid,
        pid: route.query.pid,
        language: route.query.language,
        judge: route.query.judge
      })
    }]
  }, {
    path: '/admin',
    component: Admin,
    children: [{
      name: 'admin',
      component: AdminBoard,
      path: ''
    }]
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'is-active',
  linkActiveClass: 'is-active'
})