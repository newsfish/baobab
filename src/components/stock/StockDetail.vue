<template>
    <div>
        袁颢哲的吃奶数据
        <el-table
                :data=table_data
                height="700"
                style="width: 100%">
            <el-table-column
                    prop="datetime"
                    label="图片"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="商品名称"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="texture"
                    label="材质"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="size"
                    label="规格"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="size"
                    label="数量"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价"
                    width="50">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Stock',
        data() {
            return {
                table_data: []

            }
        },
        methods: {
            get_table_data() {
                axios.get('http://localhost:5000/query').then(res => {
                    this.table_data = res.data;
                    console.log(res);
                    console.log(res.data)
                })

            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
        created: function () {
            this.get_table_data();
            console.log(axios.get('http://localhost:5000/query').data)
        }
    }
</script>

<style>
</style>
