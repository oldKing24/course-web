<template>
    <el-row class="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <el-col :span="16" class="flex items-center justify-center">
            <div class="font-bold text-5xl text-light-50 mb-4 tracking-2px animate-bounce">欢迎</div>
        </el-col>
        <el-col :span="8" class="bg-light-50 flex items-center justify-center flex-col">
            <div class="font-bold text-3xl text-gray-800 animate-bounce">欢迎回来</div>
            <div class="flex item-center justify-center my-5 text-gray-500">
                <span>账号密码登录</span>
            </div>
            <el-form :model="form" class="w=[250px]">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入邮箱"/>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码"/>
                </el-form-item>
                <el-form-item>
                    <el-button class="w-[250px] rounded-full" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script  setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: '',
    password: '',
})

const onSubmit = () => {
    console.log('submit!')
    console.log(form.username)
}
</script>