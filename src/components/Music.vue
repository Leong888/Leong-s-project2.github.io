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

<Card style="width:100%">
        <template #title  >
            <Icon type="ios-musical-notes"></Icon>
           音乐播放器
        </template>
        <audio ref="audio" controls="controls" style="width:100%;" :preload="preload">
          <source />
        </audio>
          <h4 style="width: 100%;height: 50px;line-height: 50px; text-align: center;">{{namesong}}</h4>
           <div wrap style="width: 100%; height: 150px;line-height: 150px; text-align: center;">
         
            <ButtonGroup shape="circle">
                <Button type="info" title="上一首" size="large" @click="up(Indexsong)"><i class="fa fa-backward"></i> </Button>
                <Button type="info" title="播放/暂停" size="large" @click="play(namesong,Indexsong)"><i :class="playButton"></i></Button><!--fa fa-pause-->
                <Button type="info" title="下一首" size="large" @click="down(Indexsong)" ><i class="fa fa-forward"></i></Button>
                <Button type="info" title="列表" size="large" @click="IssongListshowhide" ><i class="fa fa-th-list"></i></Button>
            </ButtonGroup>         
         </div>
          <Table :columns="columns" :data="songList" v-show="songListhidden" @click="IssongListshowhide"></Table>
    </Card>
</div>
</template>

<script>
 
 
    export default {
        data () {
            return {
                   optiontype:["up","play","down"],
                   preload:'auto',
                   Indexsong:0,
                   namesong: '',
                   playButton:'fa fa-play',
                   musicUrl:'',
                   columns: [
        {
          type: 'index',
          title: '序号',
          align: 'center',
          width: 100,
          render: (h, params) => {
            return h(
              'span',
              params.index
            )
          }
        },
                    {
                        title: '歌曲',
                        key: 'song'
                    },
                    {
                        title: '操作',
                       render: (h, params) => {
                           return h('div', [
            
                      h(
                'Button',
                {
                  props: {
                    type: 'info',
                    size: 'small'
                  },                 
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {       
                     this.play(params.row.song,params.index);
                    }
                  }
                },
                  '播放'
              
              )
            
            ])
          }
                    }
                ],
                songList: [
                    {
                        song: '因为爱情(电影《将爱情进行到底》主题曲) - 陈奕迅,王菲.mp3',
                       
                    },
                   {
                        song: '阴天快乐 - 陈奕迅.mp3',
                    },
                   
                 
                  
                    {
                        song: '最佳损友 - 陈奕迅.mp3',
 
                    }
                   
                ],
            
                songListhidden:false
            }
        },
// computed: {  ///存在问题，未能 到底预期效果以换他方式created里实现
//     namesong:{
//       // setter
//       get() {    
//         console.log("get:"+)
//         return this.songList[1].song;
//       }
//       ,
//        set(newval) {  
//         console.log("set:"+newval)  
//         return newval;
//       }
//       }
      
//   },
 
 
         methods:{
       //切换上一曲
       up(index){
         let vm = this;       
          if(index===0){
             this.$Message.success({ title: '提示', content: '已经到顶了喔' })
           return
          }
        
          vm.Indexsong=--index;
          vm.playButton='fa fa-pause'; 
          vm.namesong=vm.songList[vm.Indexsong].song;
          console.log("Indexsong:"+vm.Indexsong+",namesong:"+vm.namesong)
          let  audioplay= this.$refs.audio//播放
 
          vm.musicUrl= require("@/assets/Music/"+vm.namesong)
          audioplay.src = vm.musicUrl;
          audioplay.play();
       },
     //切换下一曲
       down(index){
 
         let vm = this;       
          if(index===vm.songList.length-1){
             this.$Message.success({ title: '提示', content: '已经到底了喔' })
           return
          }
 
          vm.Indexsong=++index;
          vm.playButton='fa fa-pause'; 
          vm.namesong=vm.songList[vm.Indexsong].song;
          console.log("Indexsong:"+vm.Indexsong+",namesong:"+vm.namesong)
          let  audioplay= this.$refs.audio
 
          vm.musicUrl= require("@/assets/Music/"+vm.namesong)
          audioplay.src = vm.musicUrl;
          audioplay.play();//播放
 
       },
         play(song,index){
          
         let vm = this;    
         vm.Indexsong=index;         
         console.log("Indexsong:"+ 
         vm.Indexsong+",song:"+song+",+playButton:"+vm.playButton)  
         if(vm.namesong===song){
 
          if(vm.playButton==="fa fa-play"){
            vm.playButton='fa fa-pause'; 
          let  audioplay= this.$refs.audio
          vm.musicUrl= require("@/assets/Music/"+vm.namesong)
          audioplay.src = vm.musicUrl;
          audioplay.play();//播放
            }else{
          vm.playButton="fa fa-play";
          this.$refs.audio.pause();//暂停    
            }
         }else if(vm.namesong!=song){
 
          console.log("song:"+song)
          console.log("playButton:"+vm.playButton)
          vm.playButton='fa fa-pause'; 
          vm.namesong=song;
          let  audioplay= this.$refs.audio
           console.log("namesong:"+vm.namesong)
          vm.musicUrl= require("@/assets/Music/"+vm.namesong)
          audioplay.src = vm.musicUrl;
          audioplay.play();//播放
         }
 
          },
           IssongListshowhide(){
                let vm = this;
                vm.songListhidden = !vm.songListhidden;          
               }
             }
             ,
          created(){
           //赋值变量
            this.namesong = this.songList[1].song;
            this.Indexsong=1;
           }
 
         
    }
</script>

