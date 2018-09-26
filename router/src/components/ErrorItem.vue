<template>
    <div>
        <Button type="primary" size="large" @click="exportData()">
            <Icon type="ios-download-outline"></Icon>导出</Button>
        <br>
        <Table size='small' :columns="columns1" :data="data1" ref="table"></Table>
        <br>
    </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "地址",
          key: "host"
        },
        {
          title: "Vlan",
          key: "vlan"
        },
        {
          title: "警告原因",
          key: "text"
        },
        {
          title: "时间",
          key: "time"
        }
      ],
      data1: []
    };
  },
  created() {
    var _this = this;
    this.getData();
  },
  watch: {
    $route: function() {
      this.getData();
    }
  },

  methods: {
    getData: function() {
      var _this = this;

      _this
        .$http({
          url: "/reError",
          method: "POST"
        })
        .then(function(response) {
          if (response.data.status == "1") {
            //刷新成功
            _this
              .$http({
                url: "/getError",
                method: "POST"
              })
              .then(function(response) {
                console.log(response);
                _this.$data.data1 = response.data.data.error1;
              })
              .catch(function(error) {});
          } else {
          }
        })
        .catch(function(error) {});
    },
    exportData() {
      this.$refs.table.exportCsv({
        filename: "主机问题表"
      });
    }
  }
};
</script>
