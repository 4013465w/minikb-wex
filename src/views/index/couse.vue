<template>
  <div class="course">
    <div class="left">
      <div class="cell">
        <text class="cell-text">周一</text>
      </div>
      <div class="cell">
        <text class="cell-text">周二</text>
      </div>
      <div class="cell">
        <text class="cell-text">周三</text>
      </div>
      <div class="cell">
        <text class="cell-text">周四</text>
      </div>
      <div class="cell">
        <text class="cell-text">周五</text>
      </div>
      <div class="cell">
        <text class="cell-text">周六</text>
      </div>
      <div class="cell">
        <text class="cell-text">周日</text>
      </div>
    </div>
    <div class="right">
      
    </div>
  </div>
</template>
<script>
  
</script>
<style scoped>
  .course {
    flex-direction: row;
  }
  .left {
    width: 100px;
  }
  .cell {
    height: 80px;
    width: 100px;
    padding: 15px;
    border: 1px solid #666666;
  }
  .cell-text {
    line-height: 50px;
  }
  .right {
    width: 650px;
  }
</style>