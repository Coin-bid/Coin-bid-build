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
      <b-form @submit.stop.prevent="onSubmit">

        <div class="upload-section">
            <div class="img-uploader" @click="onClickUpload">
              <template v-if="form.fileUrl">
              <img key="file-image" class="file-image" v-if="form.fileUrl" :src="form.fileUrl" alt="">
              </template>
              <template v-else>
                <img class="file-pl-image" key="file-pl-image"  :src="require('./img/img-placeholder@2x.png')" alt="">
                <b-button variant="primary" class="upload-btn" :disabled="uploadLoading">Upload</b-button>
              </template>
              <input type="file" ref="fileInput" accept="image/*" class="file-input" @change="onFileChange">
               <b-form-invalid-feedback :state="imgValidation">
                  Please upload image
                </b-form-invalid-feedback>
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
                    <div class="value">1000CBD</div>
                    <div class="label">代币总量</div>
                  </div>
                </div>

                <div class="day">
                  <div class="icon-wrapper">
                    <img src="./img/icon-calendar@2x.png" alt="">

                  </div>
                  <div class="token-info">
                    <div class="value">1/1000CBD</div>
                    <div class="label">Daily output</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <b-form-group
          id="input-group-1"
          label="Title"
          label-for="name"
        >

          <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Example: Treasures of the Sea"
            required
          ></b-form-input>
           <b-form-invalid-feedback :state="nameValidation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description" label-for="intro">
          <b-form-textarea
            id="intro"
            v-model="form.desc"
            placeholder="Provide a description for your store. Markdown syntax is supported."
            rows="3"
            max-rows="6"
            required
          ></b-form-textarea>
            <b-form-invalid-feedback :state="descValidation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
           <b-form-text id="password-help-block">
            {{form.desc.length}} of 1000 characters used
          </b-form-text>

        </b-form-group>

        <div class="button-group">
        <b-button class="submit-btn" :disabled="submitting" type="submit" variant="primary" size="lg">Submit</b-button>

        </div>
      </b-form>
    </div>
  </b-container>
  </div>

</template>

<script>
import axios from 'axios';
import config from '@/config';
import { mapState } from 'vuex';
import { NFTAuctionInterface, provider } from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

console.log(NFTAuctionInterface);
export default {
  data() {
    return {
      submitting: false,
      uploadLoading: false,

      imgValidation: true,
      nameValidation: true,
      descValidation: true,
      form: {
        fileUrl: '',
        name: '',
        desc: '',
      },
    };
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },

  methods: {
    async onSubmit(event) {
      event.preventDefault();
      if (!this.form.fileUrl) {
        this.imgValidation = false;
        return;
      }

      if (!this.form.name) {
        this.nameValidation = false;
        return;
      }

      if (!this.form.desc) {
        this.descValidation = false;
        return;
      }

      const JSONBody = {
        name: this.form.name,
        description: this.form.desc,
        image: this.form.fileUrl,
      };

      this.submitting = true;


      const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';

      const { data } = await axios.post(url, JSONBody, {
        headers: {
          pinata_api_key: config.pinataAPIKey,
          pinata_secret_api_key: config.pinataAPISecret,
        },
      });

      const { IpfsHash } = data;
      // sendTransaction

      const creatTxHash = await sendTransaction({
        to: config.NFTAuction,
        gas: 960000,
        data: NFTAuctionInterface.encodeFunctionData('createNFTByCanvas', [
          IpfsHash,
        ]),
      });

      const creatTx = await provider.waitForTransaction(creatTxHash);


       if (creatTx.status === 1) {
        __g_root__.$bvToast.toast('Create success', {
          title: 'Tips',
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Create fail', {
          title: 'Tips',
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
      // const tx = await canvasAuctionContract.functions.buy(this.amount);
      console.log(creatTx);

      this.submitting = false;
      // alert(JSON.stringify(this.form));
    },

    onClickUpload() {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      const [file] = e.target.files;

      console.log(file);
      this.uplooadFile(file);
    },

    async uplooadFile(file) {
      //      pinataAPIKey: '1a947fd8693b60266d52',
      // pinataAPISecret
      const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

      // we gather a local file for this example, but any valid readStream source will work here.
      const formData = new FormData();
      formData.append('file', file);
      this.uploadLoading = true;
      const { data } = await axios.post(url, formData, {
        maxBodyLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: config.pinataAPIKey,
          pinata_secret_api_key: config.pinataAPISecret,
        },
      });

      this.uploadLoading = false;
      const { IpfsHash } = data;
      this.form.fileUrl = config.pinataUrlPrefix + IpfsHash;

      //   {
      //     "name": "Hearing Red",
      //     "description": "Stream of consciousness face that began with pen scratches and wild mark making followed by defining the head's shape by enclosing on the chaos with red paint until the character was revealed to me.",
      //     "image": "https://ipfs.io/ipfs/QmZ8FN2A7aqXnj5ee3171ZGZHUhqBo16WC1ftbryQuaeQu"
      // }
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
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    position: relative;
    text-align: center;
    overflow: hidden;
    & .file-input {
      display: none;
    }

    & .upload-btn {
      width: 145px;
      z-index: 2;
      position: relative;
    }

    & .file-pl-image {
      width: 145px;
      margin-bottom: 15px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-top: 120px;
    }

    & .file-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      margin-bottom: 0;
      left: 0;
      top: 0;
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
