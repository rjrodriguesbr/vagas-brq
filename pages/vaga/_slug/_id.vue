<template>
  <div>
    <SectionJobDetails />
<!--     <SectionJobRelated />
 -->    <SectionTalentBank />
  </div>
</template>

<script>
  export default {
    transition: 'slide-left',
    layout: 'pages',
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>