import * as bootstrap from 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

var options = {
  strings: [
    '<span>I am</span> <span class="text-primary">Freelancer.</span>', 
    '<span>I am</span> a <span class="text-primary">Web Developer.</span>', 
    '<span>I am</span> a <span class="text-primary">Tester.</span>'],
  typeSpeed: 60,
  loop: true,
  smartBackspace: true
};

const typed = new Typed('.hero span', options);

document.querySelector('.age').innerHTML = new Date().getFullYear() - 1993;


