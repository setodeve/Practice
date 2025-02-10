<template>
  <div class="main-template">
    <OrganismsHeader>
      <h2>My App</h2>
    </OrganismsHeader>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.main-template {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
