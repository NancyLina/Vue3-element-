<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :http-request="httpRequest"
    list-type="picture"
  >
    <el-button size="small" type="primary" @click="upLoadImage">上传图片</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts">
export default {
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
    handleRemove(file:any, fileList:any) {
      console.log(file, fileList)
    },
    handlePreview(file:any) {
      console.log(file)
    },
    httpRequest(param:any){
        var formdata = new FormData();
        formdata.append("image", param.file);
        formdata.append("userId", '1');
        console.log(param.file)
        // this.$axios.post("/uploadUserPic", formdata).then();
    },
    upLoadImage() {
        console.log("formdata")
        this.$refs.upload.submit();
    }
  }
}
</script>

<style>
.el-upload-list--picture .el-upload-list__item-name i {
    font-size: 0;
}
</style>
