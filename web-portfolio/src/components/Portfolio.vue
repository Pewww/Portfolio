<template>
  <div>
    <side-part />
    <main-part />
  </div>
</template>

<script>
import SidePart from './SidePart'
import MainPart from './MainPart'

export default {
  name: 'portfolio',
  components: {
    SidePart,
    MainPart
  }  
}
</script>


