<script setup lang="ts"></script>

<template>
  <main>
    <div>
      <img src="/logo.jpg" />
    </div>

    <div>
      <h1>launching soon</h1>
    </div>
  </main>
</template>

<style>
body {
  background: #ffffff;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
}
img {
  scale: 0.5;
  border-radius: 0.3rem;
  transition:
    scale 200ms,
    filter 200ms;
}
img:hover {
  scale: 0.55;
  filter: brightness(2);
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
  font-weight: normal;
  margin: 0;
}
</style>
