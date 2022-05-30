
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
require('vue2-siema'); 
import Siema from 'vue2-siema'


require('tiptap'); 
require('tiptap-extensions'); 

Vue.use(Siema)

/**

 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

 
Vue.component('navbar', require('./components/NavbarComponent.vue'));
Vue.component('exercice', require('./components/ExerciceComponent.vue'));
Vue.component('exercices', require('./components/ExercicesComponent.vue'));
Vue.component('icons', require('./components/IconsComponent.vue'));
Vue.component('search', require('./components/SearchComponent.vue'));
Vue.component('layout', require('./components/LayoutComponent.vue'));
Vue.component('menuleft', require('./components/MenuLeftComponent.vue'));
Vue.component('mainsection', require('./components/MainSectionComponent.vue'));
Vue.component('opcionMenu', require('./components/OpcionMenuComponent.vue'));
Vue.component('perfilUser', require('./components/PerfilUserComponent.vue'));
Vue.component('login', require('./components/LoginComponent.vue'));
Vue.component('singup', require('./components/SingUpComponent.vue'));
Vue.component('register', require('./components/RegisterComponent.vue'));
Vue.component('exerciceForm', require('./components/ExerciceFormComponent.vue'));
Vue.component('exerciceFormDesktop', require('./components/ExerciceFormComponentDesktop.vue'));
Vue.component('exerciceFormMobile', require('./components/ExerciceFormComponentMobile.vue'));
Vue.component('exerciceEditor', require('./components/ExerciceEditorComponent.vue'));
Vue.component('exercicesSection', require('./components/ExercicesSection.vue'));
Vue.component('perfilSection', require('./components/PerfilSection.vue'));
Vue.component('sessionsSection', require('./components/SessionsSection.vue'));
Vue.component('exerciceCard', require('./components/ExerciceCardComponent.vue'));
Vue.component('createSection', require('./components/CreateSectionComponent.vue'));
Vue.component('addExercice', require('./components/addExerciceComponent.vue'));
Vue.component('sessionsList', require('./components/SessionsListComponent.vue'));
Vue.component('sessionCard', require('./components/SessionCardComponent.vue'));
Vue.component('exercicesListInSession', require('./components/ExercicesListInSession.vue'));
Vue.component('showSession', require('./components/ShowSessionComponent.vue'));
Vue.component('exerciceInSessionCard', require('./components/ExerciceInSessionCardComponent.vue'));
Vue.component('playSession', require('./components/PlaySessionComponent.vue'));
Vue.component('playingExercice', require('./components/PlayingExerciceComponent.vue'));



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
