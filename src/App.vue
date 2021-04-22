<template>
  <main class="container-fluid">
    <div class="row m-0">
    <div class="col-12 p-0">
    <div class="row my-4">
      <div class="col-md-5 d-flex align-items-center mb-2">
        <div class="separator"></div>
      </div>
      <div class="col-md-2">
        <h3>Applications</h3>
      </div>
      <div class="col-md-5 d-flex align-items-center mt-1 mb-2">
        <div class="separator"></div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col justify-content-end">
        <div class="card bg-orange p-3">
          <div class="card-img-top shadow">
            <img src="./assets/prompetition_logo.png" alt="Prompetition Logo" class="rounded img-fluid">
          </div>
          <div class="bg-light mt-3 p-3 rounded shadow">
            <h5 class="text-secondary">A competitive creative writing site that uses prompts to facilitate daily challenges, live writing duels and practice.</h5>
            <p class="text-success">Created with Vue.js, Node.js, Sockets, Figma Prototype, Scrum & 2 other developers</p>
          </div>
          <div class="row d-inline-flex bg-light mt-3 p-3 rounded max287 ml-0 justify-content-around shadow">
            <a href="https://github.com/JordanWilker/Prompetition"><i class="fa fa-github text-dark mr-1" aria-hidden="true"></i>GitHub</a>
            <a href="https://github.com/JordanWilker/Prompetition" class="text-danger"><i class="fa fa-sitemap text-dark mr-1" aria-hidden="true"></i>Website</a>
          </div>
        </div>
      </div>
      <div class="col justify-content-center">
        <div class="card bg-mint p-3">
          <div class="card-img-top shadow">
            <img src="https://raw.githubusercontent.com/ethanmmay/ethanmmay.github.io/main/src/assets/keepr_logo.PNG" alt="Prompetition Logo" class="rounded img-fluid keepr-img">
          </div>
          <div class="bg-light mt-3 p-3 rounded shadow">
            <h5 class="text-secondary">A app that uses a masonry layout to display user posts, along with a vault system for keeping track of categories with public profile pages.</h5>
            <p class="text-success">Created with Vue.js, C# & .NET, MySQL and a Figma Prototype with development testing</p>
          </div>
          <div class="row d-inline-flex bg-light mt-3 p-3 rounded max287 ml-0 justify-content-around shadow">
            <a href="https://github.com/ethanmmay/checkpoint-8"><i class="fa fa-github text-dark mr-1" aria-hidden="true"></i>GitHub</a>
            <a href="https://github.com/ethanmmay/checkpoint-8" class="text-danger"><i class="fa fa-sitemap text-dark mr-1" aria-hidden="true"></i>Website</a>
          </div>
        </div>
      </div>
      <div class="col justify-content-start">
        <div class="card bg-blue p-3">
          <div class="card-img-top shadow">
            <img src="./assets/buglog_logo.png" alt="Prompetition Logo" class="rounded img-fluid">
          </div>
          <div class="bg-light mt-3 p-3 rounded shadow">
            <h5 class="text-secondary">A basic bug logging application that supports reporting bugs, commenting on them with notes, and sharing them from a public api.</h5>
            <p class="text-success">Created with Vue.js, Node.js, a Figma Prototype and API development tests</p>
          </div>
          <div class="row d-inline-flex bg-light mt-3 p-3 rounded max287 ml-0 justify-content-around shadow">
            <a href="https://github.com/ethanmmay/checkpoint-7"><i class="fa fa-github text-dark mr-1" aria-hidden="true"></i>GitHub</a>
            <a href="https://github.com/ethanmmay/checkpoint-7" class="text-danger"><i class="fa fa-sitemap text-dark mr-1" aria-hidden="true"></i>Website</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cecece;
}
.bg-orange {
  background: rgb(255,103,1);
background: linear-gradient(207deg, rgba(255,103,1,1) 47%, rgba(223,1,1,1) 100%);
}
.bg-mint {
  background: rgb(85,239,196);
background: linear-gradient(125deg, rgba(85,239,196,1) 49%, rgba(0,151,255,1) 100%);
}
.bg-blue {
  background: rgb(255,0,254);
background: linear-gradient(125deg, rgba(255,0,254,1) 18%, rgba(112,1,223,1) 70%);
}
.card {
  max-width: 321px;
  height: min-content;
}
.max287 {
  max-width: 287px;
  margin-right: 0;
}
.col {
  display: flex;
  margin-bottom: 3vh;
}
.separator {
  border-bottom: 3px double #cecece;
  width: 100%;
}
.shadow {
  filter: drop-shadow(2px 2px 3px black);
}
.card {
  animation: box-float 5s ease-in-out infinite;
}
@keyframes box-float {

    0%,
    100% {
        transform: translateY(-2px) rotate(0.2deg);
    }

    50% {
        transform: translateY(2px) rotate(-0.2deg);
    }
}
body
{
  margin:0;
  padding:0;
  background-color:#333;
}

.editorial {
  display: block;
  width: 100%;
  height: 60px;
  max-height: 60px;
  margin: 0;
  z-index:5;
  bottom:0;
  position:absolute;
  left:0px;
  float:left;
}

.parallax1 > use {
  animation: move-forever1 10s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax2 > use {
  animation: move-forever2 8s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax3 > use {
  animation: move-forever3 6s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax4 > use {
  animation: move-forever4 4s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
@keyframes move-forever3 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
</style>
