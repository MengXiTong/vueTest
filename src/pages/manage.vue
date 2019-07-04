<template>
  <div style="text-align:left;">
    <div class="mat10">
      <el-input size="mini" placeholder="请输入搜索内容" class="mal10" style="width:150px;" clearable></el-input>
      <el-button size="mini" type="default" class="mal10" icon="el-icon-search" @click="updataList">查询</el-button>
    </div>
    <div class="mal10 mat10">
      <el-button size="mini" type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      <el-button size="mini" type="primary" icon="el-icon-edit" @click="handleEdit">编辑</el-button>
      <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete">删除</el-button>
    </div>
    <el-table ref="table" :data="list" style="width: 100%;" class="mat10" stripe border :max-height="currentHeight" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column width="55" label="序号" align="center">
        <template slot-scope="scope">
          {{page.pageSize*(page.pageNum-1)+scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column prop="paramName" label="生产序列号" align="center">
      </el-table-column>
      <el-table-column prop="paramTag" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="paramValue" label="手机号" align="center">
      </el-table-column>
      <el-table-column prop="paramType" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="paramType" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="身高" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="使用轮椅的年限" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="轮椅电量" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="行驶里程" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="轮椅故障" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="当前状态" align="center">
      </el-table-column>
    </el-table>
    <div class="pos-r">
      <el-pagination class="fr" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="1900">
      </el-pagination>
    </div>
    <el-dialog width="740px" :title="dialogAddOrEdit?'添加':'编辑'" :visible.sync="dialogVisible" :before-close="handleDialogClose">
      <el-form :inline="true" ref="form" :model="form" :rules="rules" label-position="right" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="生产序列号" prop="paramName">
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
            <el-form-item label="手机号" prop="paramValue">
              <el-input v-model="form.paramValue" placeholder="请输入手机号" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="paramType">
              <el-select v-model="form.paramType" placeholder="请选择性别" class="w180" clearable>
                <el-option v-for="item in paramTypeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="年龄" prop="paramName">
              <el-input v-model="form.paramName" placeholder="请输入年龄" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身高" prop="paramTag">
              <el-input v-model="form.paramTag" placeholder="请输入身高" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="使用轮椅的年限" prop="paramName">
              <el-input v-model="form.paramName" placeholder="请输入使用轮椅的年限" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="轮椅电量" prop="paramTag">
              <el-input v-model="form.paramTag" placeholder="请输入轮椅电量" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="行驶里程" prop="paramName">
              <el-input v-model="form.paramName" placeholder="请输入行驶里程" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="轮椅故障" prop="paramTag">
              <el-input v-model="form.paramTag" placeholder="请输入轮椅故障" class="w180" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="当前状态" prop="paramTag">
          <el-input v-model="form.paramTag" placeholder="请输入当前状态" class="w180" clearable></el-input>
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
      list: []
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

