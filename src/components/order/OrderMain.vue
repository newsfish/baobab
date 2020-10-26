<template>
    <div>
        这是货物详情
        <el-table
                :data=table_data
                height="700"
                style="width: 100%">
            <el-table-column
                prop="combo_pic_address"
                label="图片"
                width="180">
            </el-table-column>
            <el-table-column
                prop="stock_number"
                label="商品编号"
                width="100">
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
                label="尺寸"
                width="60">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位"
                width="50">
            </el-table-column>
            <el-table-column
                prop="orin_price"
                label="原价"
                width="50">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="单价"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="in_datetime"
                    label="进货日期"
                    width="100">
            </el-table-column>
            <el-table-column
                prop="remark"
                label="备忘">
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
                table_data:[]

            }
        },
        methods: {
            get_table_data() {
                axios.get('http://localhost:5000/query').then(res=>{
                    this.table_data = res.data;
                    console.log(res);
                    console.log(res.data)
                })

            }
        },
        mounted: function() {
            this.get_table_data();
            console.log(axios.get('http://localhost:5000/query').data)
        }
}
</script>

<style>
</style>
