const template = 
`
<v-container>
    <h3 class="title content-title">상품 등록 편집</h3>
    <div class="my-10">
      <v-row no-gutters>
        <v-col
          cols="4"
          sm="4"
        >
          <v-list-item-avatar
            tile
            size="300"
            color="grey lighten-1"
            class="my-10"
          >
            <v-img
              height="250"
              src="../assets/sample01.png"
            ></v-img>
          </v-list-item-avatar>
        </v-col>
        <v-col
          cols="8"
          sm="8"
        >
          <v-form class="pa-4">
            <v-text-field name="상품명" label="상품명"></v-text-field>
            <v-text-field name="위치" label="위치"></v-text-field>
            <v-text-field name="가격" label="가격"></v-text-field>
            <v-radio-group v-model="row" row>
              <v-radio label="판매중" value="radio-1"></v-radio>
              <v-radio label="판매완료" value="radio-2"></v-radio>
            </v-radio-group>
            <v-select
              :items="items"
              label="카테고리"
            ></v-select>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <v-textarea
            counter
            name="상품설명"
            label="상품설명"
            :rules="rules"
            :value="value"
          ></v-textarea>
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <div class="text-center">
            <v-btn
              large
              color="primary"
              class="mx-2"
              dark
            >
              등록
            </v-btn>
            <v-btn
              large
              class="mx-2"
            >
              취소
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
`

const datas = {
    categories: ['패션잡화', '여성의류', '남성의류', '디지털/가전', '도서/티켓/취미/애완', '유아동/출산', '생활/문구/가구/식품'],
}

const GoodsRegistration = Vue.component('goods-registration', {
    template: template,
    data: function() {
        return datas;
    }
});