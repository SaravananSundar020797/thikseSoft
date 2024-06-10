// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// app.controller('HomeController', function($scope) {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   const renderer = new THREE.WebGLRenderer({ alpha: true });
//   renderer.setClearColor(0x000000, 0); // Set background color to black with 0 opacity
//   renderer.setSize(window.innerWidth/2, window.innerHeight/2);
//   document.getElementById('canvas').appendChild(renderer.domElement);
  
//   // Handle window resize
// window.addEventListener('resize', function() {
//   var width = document.getElementById('canvas').clientWidth;
//   var height = 400; // Keep a consistent height for simplicity
//   renderer.setSize(width, height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });

// // Create a simple cube

// const cubeGeometry = new THREE.BoxGeometry(3, 5, 5);
// const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xccd7ff,wireframe:false,});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// // Create a simple geometry and material to visualize
// const geometry = new THREE.SphereGeometry(5, 30, 30);
// const material = new THREE.MeshBasicMaterial({ color: 0x5f81fd,wireframe:true, });
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// // Set up OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = false;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.minDistance = 8.5; // Set minimum zoom distance
// controls.maxDistance = 8.5; // Set maximum zoom distance



// // Set initial camera position
// camera.position.z = 10;


// // Animation loop
// // Render loop
// function animate() {
//   requestAnimationFrame(animate);
//     // sphere.rotation.x += 0.005; // Reduced speed
//     sphere.rotation.y +=0.002; // Reduced speed
//     cube.rotation.y -=0.002; // Reduced speed
//   controls.update(); // Update orbit controls
//   renderer.render(scene, camera);
// }
// animate();

// });

let navLinks = document.querySelectorAll(".thikse_nav-link");
let sections = document.querySelectorAll("section");



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 180 ;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(navList => {
                navList.classList.remove("active");
                document.querySelector('.thikse_nav-link[href*=' + id + ']').classList.add("active");
            })
        }
    })
}

navLinks.forEach(navList => {
  navList.addEventListener("click",(event)=>{
      document.querySelector(".active")?.classList.remove("active");
      navList.classList.add("active");
  })
});

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */




  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  // document.querySelectorAll('#navbar a').forEach(navbarlink => {

  //   if (!navbarlink.hash) return;

  //   let section = document.querySelector(navbarlink.hash);
  //   if (!section) return;

  //   navbarlink.addEventListener('click', () => {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       mobileNavToogle();
  //     }
  //   });

  // });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

});

