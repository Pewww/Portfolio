<template>
  <div>
    <side-bar />
    <side-part />
    <main-part />
  </div>
</template>

<script>
import SideBar from './SideBar'
import SidePart from './SidePart'
import MainPart from './MainPart'

export default {
  name: 'portfolio',
  components: {
    SideBar,
    SidePart,
    MainPart
  }  
}
</script>
