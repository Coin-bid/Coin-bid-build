<template functional>
  <div
    class="artists-card"
    :class="[data.staticClass || '', props.active ? 'active' : '']"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="avatar-wrapper">
      <img :src="props.avatar" alt="" class="avatar">
      <div class="name-wrapper">
        <div class="name">{{props.name}}</div>
        <div class="intro">
          {{props.intro}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.artists-card {
  width: 300px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 20px 15px 20px 30px;
  cursor: pointer;

  // border-bottom: 1px solid #D5D5D5;
  .avatar-wrapper {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      margin-right: 16px;
    }

    .name {
      color: #000000;
      font-size: 14px;
      font-weight: bold;
    }

    & .intro {
      line-height: 18px;

      color: #666666;
      font-size: 14px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;

    }
  }
  &.active,
  &:hover {
    background:#00D750;

    & .name {
      color: #fff;
    }

    & .intro {
      color: #fff;
    }
  }


}

</style>
