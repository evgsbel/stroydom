// JS
import * as $ from 'jquery'
import 'bootstrap'
import 'owl.carousel';
import '@fancyapps/fancybox'
import 'ion-rangeslider/js/ion.rangeSlider.min'
import './js/app'

// SCSS
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import './assets/sass/app.sass'
import './assets/sass/media.sass'

// svg sprite
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('./assets/img/svg/', true, /\.svg$/));

fetch(`./assets/img/svg/sprite.svg`).then(res => {
    return res.text();
}).then(data => {
    document.getElementById('svg-icons').innerHTML = data;
});
