<template>
  <Row>
    <Col span="6" order="1"><div class="content light">Col-6(1)</div></Col>
    <Col span="6" order="3"><div class="content light">Col-6(2)</div></Col>
    <Col span="6" order="2"><div class="content dark">Col-6(3)</div></Col>
    <Col span="6" order="4"><div class="content dark">Col-6(4)</div></Col>
  </Row>
</template>

<script>
import Col from '../../lib/Col.vue'
import Row from '../../lib/Row.vue'
export default {
  components: {Row, Col},
}
</script>

<style lang="scss" scoped>
.xxx-row {
  margin-bottom: 18px;
  &:last-child {margin-bottom: 0;}
  .content {height: 40px; color: white; line-height: 40px; text-align: center;}
  .light {background: #d7e5f1}
  .dark {background: darken(#d7e5f1, 8%);}
}
</style>
