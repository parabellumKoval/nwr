<script setup>
  const title = ref('Natural Wrist Rest')
  const windowWidth = ref(1933)

  const scaleStyle = computed(() => {
    let scale = windowWidth.value / 1933
    return "transform: translate(0%, 0%) " + "scale(" + scale + ")"
  })

  const setWindowWidth = () => {
    console.log('resize', window.innerWidth)
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    setWindowWidth();
    window.addEventListener("resize", setWindowWidth);
  })

</script>

<style src="assets/scss/default.scss" lang="scss" scoped />

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=contain" />
    </Head>
    <Body>
      <div class="master" :style="scaleStyle">
        <the-header></the-header>

        <main>
          <slot />
        </main>
      </div>
    </Body>
  </Html>
</template>