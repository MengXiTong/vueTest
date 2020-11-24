<template>
  <div class="tree">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" @node-contextmenu="handleNodeContextMenu" show-checkbox>
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span v-show="!node.isEdit" style="display:flex;align-items: center;">
          <!-- <i v-if="data.children && !node.expanded" class="el-icon-menu"></i>
          <i v-else-if="data.children && node.expanded" class="el-icon-star-on"></i> -->
          <!-- <i v-else class="el-icon-document"></i> -->
          <img v-if="data.children && !node.expanded" src="../assets/folder.png" style="margin-left:2px;margin-right: 4px;">
          <img v-else-if="data.children && node.expanded" src="../assets/folder-open.png" style="margin-right: 4px;">
          <img v-else src="../assets/file.png" style="margin-right: 6px;margin-left: 2px;">
          {{ node.label }}
        </span>
        <!-- 编辑输入框 -->
        <span v-show="node.isEdit">
          <el-input class="slot-t-input" size="mini" autofocus v-model="data.label" :ref="'slotTreeInput'+data.id" @blur.stop="NodeBlur(node, data)" @keyup.enter.native="NodeBlur(node, data)"></el-input>
        </span>
      </span>
    </el-tree>
    <el-menu v-show="menuVisible" id="rightClickMenu" class="el-menu-vertical" @select="handleRightSelect" active-text-color="#000" text-color="#000">
      <el-menu-item index="1" class="menuItem">
        <span slot="title">添加分类</span>
      </el-menu-item>
      <el-menu-item index="2" class="menuItem">
        <span slot="title">修改分类</span>
      </el-menu-item>
      <el-menu-item index="3" class="menuItem">
        <span slot="title">删除分类</span>
      </el-menu-item>
      <hr style="color: #000">
      <el-menu-item index="4" class="menuItem">
        <span slot="title">添加标签</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      menuVisible: false,
      DATA: null,
      NODE: null
    };
  },
  methods: {
    handleNodeClick(data, node) {
      console.log(data, node);
      this.menuVisible = false;
    },
    handleNodeContextMenu(event, data, node, element) {
      console.log(event, data);
      this.DATA = data;
      this.NODE = node;
      let menu = document.querySelector('#rightClickMenu');
      /* 菜单定位基于鼠标点击位置 */
      menu.style.left = event.clientX + 30 + 'px';
      menu.style.top = event.clientY - 30 + 'px';
      menu.style.position = 'absolute'; // 为新创建的DIV指定绝对定位
      menu.style.width = 160 + 'px';
      this.menuVisible = true;
    },
    handleRightSelect(key) {
      console.log(key);
      if (key == 1) {
        this.NodeAdd(this.NODE, this.DATA);
      } else if (key == 2) {
        this.NodeEdit(this.NODE, this.DATA);
      } else if (key == 3) {
        this.NodeDel(this.NODE, this.DATA);
      } else if (key == 4) {
        this.NodeAddFile(this.NODE, this.DATA);
        console.log('4');
      }
    },
    NodeBlur(n, d) {
      //输入框失焦
      console.log(n, d);
      if (n.isEdit) {
        this.$set(n, 'isEdit', false);
      }
      this.$nextTick(() => {
        this.$refs['slotTreeInput' + d.id].$refs.input.focus();
      });
    },
    NodeEdit(n, d) {
      //编辑节点
      console.log(n, d);
      if (!n.isEdit) {
        //检测isEdit是否存在or是否为false
        this.$set(n, 'isEdit', true);
      }
    },
    NodeDel(n, d) {
      //删除节点
      console.log(n, d);
      let that = this;
      if (d.children && d.children.length !== 0) {
        this.$message.error('此节点有子级，不可删除！');
        return false;
      } else {
        //新增节点可直接删除，已存在的节点要二次确认
        //删除操作
        let DelFun = () => {
          let _list = n.parent.data.children || n.parent.data; //节点同级数据
          let _index = _list.map(c => c.id).indexOf(d.id);
          console.log(_index);
          _list.splice(_index, 1);
          this.$message.success('删除成功！');
        };
        //二次确认
        let ConfirmFun = () => {
          this.$confirm('是否删除此节点？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(() => {
              DelFun();
            })
            .catch(() => {});
        };
        //判断是否是新增节点
        d.id > this.non_maxexpandId ? DelFun() : ConfirmFun();
      }
    },
    NodeAdd(n, d) {
      //新增节点
      if (!d.children) {
        this.$message.error('请在文件夹下新增');
        return false;
      }
      console.log(n, d);
      //判断层级
      if (n.level >= 3) {
        this.$message.error('最多只支持三级！');
        return false;
      }
      //新增数据
      d.children.push({
        label: '新增节点',
        children: []
      });
      //同时展开节点
      if (!n.expanded) {
        n.expanded = true;
      }
    },
    NodeAddFile(n, d) {
      //新增节点
      if (!d.children) {
        this.$message.error('请在文件夹下新增');
        return false;
      }
      console.log(n, d);
      d.children.push({
        label: '新增节点'
      });
      //同时展开节点
      if (!n.expanded) {
        n.expanded = true;
      }
    }
  },
  mounted() {
    document.addEventListener('click', e => {
      this.menuVisible = false;
    });
  }
};
</script>

<style lang="less" scoped>
</style>


