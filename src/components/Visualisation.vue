<template>
<div>
    <div class="header">
            <div class="box">
                <h1>
                  <img src="../assets/logo.png">
                  <span>Leong's project</span>
                </h1>
                <nav>
                  <ul>
                    <li><router-link active-class="active" to="/Map">Map</router-link></li>
            
                    <li><router-link active-class="active" to="/Music">Music</router-link></li>
                    <li><router-link active-class="active" to="/Visualisation">Data Visualization</router-link></li>
                  </ul>
                </nav>
            </div>
            <div class="box">

            </div>
    </div>	
    <div id="main" style="width: 100%;height: 600px;"></div>
</div>
</template>

<script>
export default {
  name: 'Echarts',
  methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  // 指定图表的配置项和数据
		  var option = {
			  title: {
				  text: '2022年卡塔尔世界杯八强球队身价'
			  },
			  tooltip: {},
			  legend: {
				  data:['日期']
			  },
			  xAxis: {
				  data: ["阿根廷","法国","克罗地亚","摩洛哥","英格兰","葡萄牙","巴西","荷兰"]
			  },
			  yAxis: {},
			  series: [{
				  name: '球员身价（亿欧元）',
				  type: 'bar',
				  data: [6.45, 10.33, 3.77, 2.41, 12.60, 8.65, 11.42, 5.87]
			  }]
		  };

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },
  mounted() {
  	this.myEcharts();
  }
}
</script>

<style>
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
        background-color:coral;
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
</style>

