<template>
  <div>
    <SectionFormProfile />
<!--     <SectionJobRelated />
 -->    <SectionTalentBank />
  </div>
</template>

<script>
  export default {
    transition: 'slide-left',
    layout: 'pages',
    middleware: 'authenticated'
  }
</script>