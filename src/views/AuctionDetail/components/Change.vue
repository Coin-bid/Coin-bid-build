<template>
  <b-container fluid="lg" >
    <div class="change-section">
      <h4 class="title"><img src="../img/icon-dolar@2x.png" alt=""> 变更历史</h4>
      <div class="change-detail">
         <table class="change-table">
           <thead>
             <tr>
               <th>Event</th>
               <th>Price</th>
               <th>Form</th>
               <th>To</th>
               <th>Date</th>
             </tr>
           </thead>
           <tbody>
            <tr v-for="item in items">
               <td>{{item.event}}</td>
               <td>{{item.price}}</td>
               <td>{{item.form}}</td>
               <td>
                 <b-button variant="primary" size="sm">Paid</b-button>
               </td>
               <td class="date-cell">{{item.date}}</td>
            </tr>
           </tbody>

         </table>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          event: 'List',
          price: '$ 8.0',
          form: '4291 Lunetta Street,Tampa',
          date: 'an hour ago',
        },
        {
          event: 'List',
          price: '$ 8.0',
          form: '4291 Lunetta Street,Tampa',
          date: 'an hour ago',
        },
        {
          event: 'List',
          price: '$ 8.0',
          form: '4291 Lunetta Street,Tampa',
          date: 'an hour ago',
        },
        // {
        //   event: 'List',
        //   price: '$ 8.0',
        // }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.change-section {
  margin-top: 44px;
  margin-bottom: 360px;
}

.title {
  font-size:20px;
  line-height:22px;
  color: #333;

  & img {
    height: 22px;
    margin-right:15px;
        vertical-align: bottom;
  }

}

.change-detail {
  // height: 430px;
  margin-top: 30px;
  background: #FFFFFF;
  box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
}

.change-table {
  width: 100%;

  tr {
    // margin-bottom: 10px;
    // box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
  }
  th {
    color: #464A53;
    font-size:18px;
  }

  td {
    color: #6A707E;
    font-size: 16px;
  }
  .date-cell {
    color: #ABAFB3;
  }
  td,
  th {
    padding: 24px 18px;
    background: #FFFFFF;

  }
}

@media (max-width: 992px) {
  .change-section {
    width: 100%;
  }

  .change-detail {
    width: 100%;
    overflow: auto;
  }
}

@media (max-width: 540px) {
}
</style>
