module.exports = {
    vueTemplate: componentName =>{
        return `<template>
    <div class='${componentName}'>
    ${componentName}组件
    </div>
</tempalte>
        
<script>
export default {
    name: '${componentName}',
}
</script>

<style lang='scss'>
    .${componentName}: {
        color: red;
    }
</style>`
}
}