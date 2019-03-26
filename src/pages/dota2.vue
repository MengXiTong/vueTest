<template>
  <div>
    <input type="file" v-on:change="change" />
    <button @click="storage(true)">缓存</button>
    <button @click="storage(false)">清楚缓存</button>
    <div class="mat20 mab20">
      <span class="fs18" style="color:#409EFF">筛选</span>
      <el-select v-model="filter.spes" clearable filterable placeholder="请选择种族" class="mal10">
        <el-option v-for="item in spesList" :key="item" :value="item">
        </el-option>
      </el-select>
      <el-select v-model="filter.class" clearable filterable placeholder="请选择职业" class="mal20">
        <el-option v-for="item in classList" :key="item" :value="item">
        </el-option>
      </el-select>
    </div>
    <div v-if="addition" class="fs16">加成：{{addition}}</div>
    <el-table :data="filterList" border style="width: 100%" height="340">
      <el-table-column fixed label="棋子">
        <template slot-scope="scope">
          <div @mouseover="handlePopHover(scope.row, $event)" @mouseout="handlePopOut(scope.row, $event)">{{scope.row.chess}}</div>
        </template>   
      </el-table-column>
      <el-table-column prop="spes" label="种族">
      </el-table-column>
      <el-table-column prop="class" label="职业">
      </el-table-column>
      <el-table-column prop="cost" label="价格" :formatter="costFormatter">
      </el-table-column>
    </el-table>
    <el-popover trigger="hover" ref="touchPop" placement="left">
      大家好
    </el-popover>
  </div>
</template>

<script>
  import XLSX from 'xlsx'

  export default {
    data() {
      return {
        list: [],
        spesList: ['矮人', '地精', '恶魔', '精灵', '巨魔', '龙', '娜迦', '人类', '野兽', '食人魔', '兽人', '亡灵', '元素'],
        classList: ['刺客', '德鲁伊', '恶魔猎手', '法师', '工匠', '猎人', '骑士', '萨满祭司', '术士', '战士'],
        spesAction: {
          '矮人': '2矮人攻击距离+300',
          '地精': '3地精使随机一友军护甲15回血10，6地精全体地精护甲15回血10',
          '恶魔': '只上场一个恶魔，该恶魔攻击+50%',
          '精灵': '2精灵所有精灵20%闪避，4精灵25闪避，6精灵30闪避',
          '巨魔': '2巨魔所有巨魔加攻速30，4巨魔加攻速30',
          '龙': '3龙开局满魔，即开局就放技能',
          '娜迦': '2娜迦全体魔抗+30，4娜迦魔抗+60',
          '人类': '2人类所有人类普通攻击20%缴械3秒，4人类25%，6人类30%',
          '野兽': '2野兽全体攻击+15%，4野兽+20%',
          '食人魔': '食人魔血量+10%',
          '兽人': '2兽人全体血量+250，4兽人+350',
          '亡灵': '2亡灵敌方全体减甲8，4亡灵减甲10',
          '元素': '2元素所有元素魔抗+30'
        },
        classAction: {
          '刺客': '3刺客所有刺客有10%的4倍暴击，6刺客为20%',
          '德鲁伊': '当两个不同德鲁伊在场时，德鲁伊升星只需两个相同即可',
          '恶魔猎手': '敌方恶魔不加攻',
          '法师': '3法师所有敌人魔抗-30，6法师魔抗-60',
          '工匠': '2工匠所有工匠回10血，4工匠回20血',
          '猎人': '3猎人所有猎人攻击+25%，6猎人攻击+35%',
          '骑士': '2骑士所有骑士25%时间加盾，4骑士35%盾，6骑士45%盾',
          '萨满祭司': '2萨满祭司开局随机羊一敌人6秒',
          '术士': '3术士全体吸血+15%，6术士吸血+25%',
          '战士': '3战士所有战士护甲+8，6战士护甲+10'
        },
        filter: {
          spes: '',
          class: ''
        }
      };
    },
    computed: {
      filterList() {
        return this.list.filter(item => item.spes.indexOf(this.filter.spes) >= 0 && item.class.indexOf(this.filter.class) >=
          0);
      },
      addition() {
        let result = '';
        if (this.spesAction[this.filter.spes]) {
          result += this.spesAction[this.filter.spes];
        }
        if (this.classAction[this.filter.class]) {
          if (result) {
            result += ','
          }
          result += this.classAction[this.filter.class];
        }
        return result;
      }
    },
    methods: {
      change(obj) {
        console.log(obj);
        const files = obj.target.files;
        const reader = new FileReader();
        let rABS = true; //是否将文件读取为二进制字符串
        let wb;
        reader.onload = (e) => {
          let data = e.target.result;
          if (rABS) {
            wb = XLSX.read(data, {
              type: 'binary'
            });
          } else {
            wb = XLSX.read(btoa(this.fixdata(data)), { //手动转化
              type: 'base64'
            });
          }
          this.list = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
          console.log(this.list);
        };
        if (rABS) {
          reader.readAsBinaryString(files[0]);
        } else {
          reader.readAsArrayBuffer(files[0]);
        }
      },
      fixdata(data) { //文件流转BinaryString
        let o = "",
          l = 0,
          w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l *
          w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
      },
      storage(isSave) {
        window.localStorage['list-cache'] = isSave ? JSON.stringify(this.list) : [];
      },
      costFormatter(row, column, cellValue){
        return cellValue+"元";
      },
      handlePopHover(row, event) {
        let pop = this.$refs.touchPop;
        pop.updatePopper();
        pop.referenceElm = event.target;
        pop.showPopper = true;
        this.$nextTick(() => {
          pop.popperJS._reference = event.target;
          pop.popperJS.state.updateBound();
          if (this.timerhide) clearInterval(this.timerhide);
        });
      },
      handlePopOut(row, event) {
        this.timerhide = setTimeout(() => {
          this.$refs.touchPop.showPopper = false;
        }, 500);
        $('.el-popover').hover(() => {
          if (this.timerhide) clearInterval(this.timerhide);
        });
      },
    },
    created() {
      //   this.$set(this, 'list', window.localStorage['list-cache']);
      this.list = JSON.parse(window.localStorage['list-cache']);
      console.log('缓存中读取数据', this.list);
    }
  };

</script>

<style lang="less" scoped>
</style>
