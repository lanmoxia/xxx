<template>
  <Row>
    <Col xs="1" sm="4" md="3" lg="4" xl="2" xxl="6">
      <div class="content dark"></div>
    </Col>
    <Col xs="2" sm="3" md="2" lg="2" xl="4" xxl="1">
      <div class="content light"></div>
    </Col>
    <Col xs="3" sm="2" md="3" lg="2" xl="1" xxl="1">
      <div class="content dark"></div>
    </Col>
    <Col xs="4" sm="1" md="2" lg="2" xl="3" xxl="2">
      <div class="content light"></div>
    </Col>
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
