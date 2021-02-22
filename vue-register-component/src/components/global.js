import Vue from 'vue'

function capitalizeFirstLetter(string) {
    console.log(string)
    console.log(string.slice(1))
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
    '.', false, /\.vue$/
    //找到components文件夹下以.vue命名的文件
)

requireComponent.keys().forEach(fileName => {
    console.log('fileName:'+fileName)
    const componentConfig = requireComponent(fileName)
    console.log('componentConfig:',componentConfig)
    const componentName = capitalizeFirstLetter(
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
        //因为得到的filename格式是: './dataList.vue', 所以这里我们去掉头和尾，只保留真正的文件名
    )

    Vue.component(componentName, componentConfig.default || componentConfig)
})