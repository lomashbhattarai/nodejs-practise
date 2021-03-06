import bookDetail from '../components/book-detail.vue'
import bookPage from '../components/book-page.vue'
import mainPage from '../components/main-page.vue'
import friendPage from '../components/friend-page.vue'
import friendDetail from '../components/friend-detail.vue'
import notePage from '../components/note-page.vue'
import noteDetail from '../components/note-detail.vue'
import aboutPage from '../components/about-page.vue'
import loginPage from '../components/login-page.vue'
import signupPage from '../components/signup-page.vue'
import chatPage from '../components/chat-page.vue'


const routes = [
    {
      path:'/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path:'/book-detail',
      name: 'bookDetail',
      component: bookDetail
    },
    {
      path:'/book-page',
      name: 'bookPage',
      component: bookPage
    },
    {
      path:'/friend-page',
      name: 'friendPage',
      component: friendPage
    },
    {
      path:'/friend-detail',
      name: 'friendDetail',
      component: friendDetail
    },
    {
        path:'/note-page',
        name: 'notePage',
        component: notePage
    },
    {
        path:'/note-detail',
        name: 'noteDetail',
        component: noteDetail
    },
    {
      path:'/about',
      name: 'aboutPage',
      component: aboutPage
    },
    {
      path:'/login',
      name: 'loginPage',
      component: loginPage
    },
    {
      path:'/signup',
      name: 'signupPage',
      component: signupPage
    },
    {
      path:'/chat',
      name: 'chatPage',
      component: chatPage
    }

    
  
  ]


export default routes