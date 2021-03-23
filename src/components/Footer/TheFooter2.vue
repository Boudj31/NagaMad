<template>
<footer class="footer2 footer">
  <div class="container">
  <ul class="menu-footer2">
    <li>  Nos Autres Services </li>
    <li> Condition d'Utilisation  </li>
    <li>  Foire Aux Questions  </li>
  </ul>
  </div>
</footer>
</template>

<script>
export default {
name: "TheFooter2"
}
</script>

<style scoped>

.footer{
  background: none;
}

.footer2{
  margin-top: -3%;
  z-index: 20;
  width: 100%;
  height: 2px;
  text-align: center;
}
.menu-footer2{
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
}

li {
  color: white;
  font-family: NunitoLight;
  padding: 0% 5% 0% 5%;
}


</style>