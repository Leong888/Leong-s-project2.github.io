<template>
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  width: 100%;
}
#container {
  width: 500px;
  height: 500px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* border: #ccc solid 1px; */
}
.header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        background-color:#dddddd;
        color: #333333;

        /*吸顶效果*/
       /* position: sticky;
        position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
        top: 0px;                    !*必须设一个值，否则不生效*!*/
}
.box{
    display: flex;
    align-items: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  /* color: #444; */
}
</style>
