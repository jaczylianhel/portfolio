import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".about-me"), "85%");
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".form"), "85%");
new RevealOnScroll($(".wrapper--links"), "85%");
var stickyHeader = new StickyHeader();
