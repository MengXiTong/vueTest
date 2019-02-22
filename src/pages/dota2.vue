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
    <el-table :data="filterList" border style="width: 100%" height="340">
      <el-table-column fixed prop="chess" label="棋子">
      </el-table-column>
      <el-table-column prop="spes" label="种族">
      </el-table-column>
      <el-table-column prop="class" label="职业">
      </el-table-column>
      <el-table-column prop="cost" label="价格">
      </el-table-column>
    </el-table>
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
      }
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
