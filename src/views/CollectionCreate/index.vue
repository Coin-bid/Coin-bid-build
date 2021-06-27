<template>
  <div class="collection-create">
     <div class="top-bar">
       <b-container fluid="lg">
         <div class="top-content">
           <h2>Create your collection</h2>
            <p class="desc">
              You can change these values later, along with configuring external URLs,
              payment options, and trading fees.
            </p>
         </div>
       </b-container>
    </div>
    <b-container fluid="lg" >

    <div class="create-form-container">
      <b-form @submit="onSubmit">

        <div class="upload-section">
            <div class="img-uploader">
              <img src="./img/img-placeholder@2x.png" alt="">
              <b-button variant="primary" class="upload-btn">Upload</b-button>
            </div>
            <div class="cover-info">
              <div class="title">封面<span class="red">*</span> </div>
              <div class="recommend">(350 x 350 recommended) </div>
              <div class="tip">只能上传jpg/png文件，且不超过500kb</div>
              <div class="summary-container">
                <div class="token">
                  <div class="icon-wrapper">
                    <img src="./img/icon-token@2x.png" alt="">
                  </div>
                  <div class="token-info">
                    <div class="value">3000CBD</div>
                    <div class="label">代币总量</div>
                  </div>
                </div>

                <div class="day">
                  <div class="icon-wrapper">
                    <img src="./img/icon-calendar@2x.png" alt="">

                  </div>
                  <div class="token-info">
                    <div class="value">188/10000CBD</div>
                    <div class="label">日产量</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <b-form-group
          id="input-group-1"
          label="作品名称"
          label-for="name"
        >


          <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Example: Treasures of the Sea"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="描述" label-for="intro"
          description="0 of 1000 characters used">
          <b-form-textarea
            id="intro"
            v-model="form.text"
            placeholder="Provide a description for your store. Markdown syntax is supported."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <div class="button-group">
        <b-button class="submit-btn" type="submit" variant="primary" size="lg">提交</b-button>

        </div>
      </b-form>
    </div>
  </b-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        desc: '',
        food: null,
        checked: [],
      },
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  height: 285px;
  background: url("./img/top-bg@2x.png") center /  auto 100% no-repeat;
  color: #B9B9B9;
  font-size: 16px;
  text-align: center;

  .top-content {
    max-width: 554px;
    padding-top:60px;
    padding-bottom: 60px;
    padding-left: 48px;
  }
  & h2 {
    font-size: 30px;
    margin: 0;
    color: #00D750;
  }
  & .desc {
    margin: 20px 0 0;
  }
}
.create-form-container {
  height: 1050px;
  background: #FFFFFF;
  box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
  margin-top: 35px;
  margin-bottom: 240px;
  padding: 56px 120px;
}

.upload-section {
  display: flex;
  margin-bottom: 46px;

  & .img-uploader {
    margin-right: 63px;
    width: 400px;
    height: 412px;
    background: #F5F7F9;
    border: 3px dashed #DDDDDD;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  flex-direction: column;

    & img {
      width: 145px;
      margin-bottom: 15px;
    }

    & .upload-btn {
      width: 145px;
    }
  }

    .title {
      margin-top: 43px;
      font-size: 16px;
      color: #000000;
    }
    .red {
      color: #FF0000;
    }
    .tip,
    .recommend {
      color: #999999;
      font-size: 16px;
      margin-top: 24px;
    }

  .summary-container {
    margin-top: 85px;
    display: flex;
    justify-content: space-between;
    .token {
      width: 204px;
      height: 110px;
      background: #FFFFFF;
      box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding-left: 24px;
      img {
        width: 40px;
        margin-right: 16px;
      }

      .value {
        font-size: 20px;
        font-weight: bold;
        color: #000100;
      }

       .label {
        color: #464A53;
        font-size: 16px;

      }
    }

    .day {
      width: 244px;
      height: 110px;
      background: #FFFFFF;
      box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
      border-radius: 10px;
       display: flex;
      align-items: center;
      padding-left: 24px;

      img {
        width: 40px;
        margin-right: 16px;
      }

       .value {
        font-size: 20px;
        font-weight: bold;
        color: #000100;
      }

      .label {
        color: #464A53;
        font-size: 16px;

      }
    }
  }
}

.cover-info {
  flex-grow: 1;
}

.button-group {
  text-align: center;
}

.submit-btn {
  width: 144px;
}

@media (max-width: 992px) {

}

@media (max-width: 576px) {
  .top-bar {
    height: 345px;
    .top-content {
      padding: 64px 0;
    }
  }
  .create-form-container {
    height: auto;
    padding: 24px;
  }
  .upload-section {
    flex-direction: column;
    .img-uploader {
      width: 100%;
    }

    .summary-container {
      flex-direction: column;
      & .token,
      & .day {
        margin-bottom: 12px;
        // wid
      }
    }
  }
}

</style>
