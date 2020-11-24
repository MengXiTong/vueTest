<template>
  <div style="text-align:left;">
    <div class="mal10 mat10">
      <el-input size="mini" placeholder="请输入搜索内容" class="mal10" style="width:150px;" clearable></el-input>
      <el-button size="mini" type="default" class="mal10" icon="el-icon-search" @click="updataList">查询</el-button>
      <el-button size="mini" type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
    </div>
    <el-table ref="table" :data="list" style="width: 100%;" class="mat10" stripe border :max-height="currentHeight" @selection-change="handleSelectionChange">
      <el-table-column width="55" label="序号" align="center">
        <template slot-scope="scope">
          <!-- {{page.pageSize*(page.pageNum-1)+scope.$index+1}} -->
        </template>
      </el-table-column>
      <el-table-column prop="user" label="用户名" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系电话" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" width="220">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="handleEmpower(scope.$index, scope.row)">授权</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pos-r">
      <el-pagination class="fr" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="1900">
      </el-pagination>
    </div>
    <el-dialog width="700px" :title="dialogAddOrEdit?'添加':'编辑'" :visible.sync="dialogVisible" :before-close="handleDialogClose">
      <el-form :inline="true" ref="form" :model="form" :rules="rules" label-position="right" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户名" prop="paramName">
              <el-input v-model="form.paramName" placeholder="请输入生产序列号" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="paramTag">
              <el-input v-model="form.paramTag" placeholder="请输入姓名" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="联系方式" prop="paramValue">
              <el-input v-model="form.paramValue" placeholder="请输入手机号" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态" prop="paramType">
              <el-select v-model="form.paramType" placeholder="请选择性别" class="w180" clearable>
                <el-option v-for="item in paramTypeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="form.remark" style="width:548px;" :rows="3" placeholder="请输入备注"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reset">重 置</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'sys_para',
  data() {
    return {
      currentHeight: $(window).height() - 208,
      dialogAddOrEdit: false,
      dialogVisible: false,
      form: {},
      rowData: {
        paramName: '',
        paramTag: '',
        paramValue: '',
        paramType: null,
        remark: ''
      },
      selectedRowsData: [],
      rules: {
        paramName: [
          { required: true, message: '请输入参数名', trigger: 'blur' }
        ],
        paramTag: [
          { required: true, message: '请输入参数标识', trigger: 'blur' }
        ],
        paramValue: [
          { required: true, message: '请输入参数值', trigger: 'blur' }
        ],
        paramType: [
          { required: true, message: '请选择类型', trigger: 'change' }
        ]
      },
      paramTypeOptions: [
        {
          label: '系统',
          value: 1
        },
        {
          label: '数据库',
          value: 2
        },
        {
          label: '条目三',
          value: 3
        },
        {
          label: '条目四',
          value: 4
        }
      ],
      filter: {},
      list: [
        {
          user: 'zhangsan',
          name: '张三',
          phone: '12334767898',
          status: '启用'
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    //新增
    handleAdd() {
      this.dialogAddOrEdit = true;
      this.dialogVisible = true;
    },
    //删除
    handleDelete() {},
    //编辑
    handleEdit() {
      this.dialogAddOrEdit = true;
      this.dialogVisible = true;
    },
    handleEmpower() {},
    //判断必填信息完整
    validate() {},
    //确认提交
    confirm() {
      this.dialogVisible = false;
    },
    //重置
    reset() {
      this.dialogVisible = false;
    },
    //关闭模态框事件
    handleDialogClose(done) {
      done();
    },
    //列表选中事件
    handleSelectionChange(selection) {},
    updataList() {}
  }
};
</script>

