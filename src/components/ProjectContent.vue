<template>
    <div class="project center">
        <div class="categories">
            <button class="categories__btn">Bathroom</button>
            <button class="categories__btn">Bed Room</button>
            <button class="categories__btn">Kitchen</button>
            <button class="categories__btn">Living Area</button>
        </div>
        <div class="content">
            <div class="content__left">
                <div class="item-long">
                    <img src="../assets/proj-item-1.jpg" alt="image">
                    <div class="text-block">
                        <div class="frame">
                            <h4>Minimal Bedroom</h4>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="arrow">></button>
                    </div>
                </div>
    
                <div class="item-short">
                    <img src="../assets/proj-item-2.jpg" alt="image">
                    <div class="text-block">
                        <div class="frame">
                            <h4>Classic Minimal Bedroom</h4>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="arrow">></button>
                    </div>
                </div>
    
                <div class="item-long">
                    <img src="../assets/proj-item-3.jpg" alt="image">
                    <div class="text-block">
                        <div class="frame">
                            <h4>Minimal Bedroom table</h4>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="arrow">></button>
                    </div>
                </div>
    
                <div class="item-short">
                    <img src="../assets/proj-item-4.jpg" alt="image">
                    <div class="text-block">
                        <div class="frame">
                            <h4>Modern Bedroom</h4>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="arrow">></button>
                    </div>
                </div>
          </div>
  
          <div class="content__right">
              <div class="item-short">
                  <img src="../assets/proj-item-5.jpg" alt="image">
                  <div class="text-block">
                      <div class="frame">
                          <h4>Minimal Bedroom</h4>
                          <p>Decor / Artchitecture</p>
                      </div>
                      <button class="arrow">></button>
                  </div>
              </div>
  
              <div class="item-long">
                  <img src="../assets/proj-item-6.jpg" alt="image">
                  <div class="text-block">
                      <div class="frame">
                          <h4>Modern Bedroom</h4>
                          <p>Decor / Artchitecture</p>
                      </div>
                      <button class="arrow">></button>
                  </div>
              </div>
  
              <div class="item-short">
                  <img src="../assets/proj-item-7.jpg" alt="image">
                  <div class="text-block">
                      <div class="frame">
                          <h4>System Table</h4>
                          <p>Decor / Artchitecture</p>
                      </div>
                      <button class="arrow">></button>
                  </div>
              </div>
  
              <div class="item-short">
                  <img src="../assets/proj-item-8.jpg" alt="image">
                  <div class="text-block">
                      <div class="frame">
                          <h4>Modern Bedroom</h4>
                          <p>Decor / Artchitecture</p>
                      </div>
                      <button class="arrow">></button>
                  </div>
              </div>
  
          </div>
        </div>
        <div class="pagination">
            <button class="pagination__btn">01</button>
            <button class="pagination__btn">02</button>
            <button class="pagination__btn">03</button>
            <button class="pagination__btn">></button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectContent',
  
    data() {
      return {
        
      };
    },
  
    methods: {
      
    },
  };
  </script>
  
  <style scoped>
  * {
      margin: 0;
      padding: 0;
  }
  .center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}
  .project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 1200px;
      gap: 60px;
  }
  .categories {
    border: 1px solid #CDA274;
    border-radius: 18px;
      width: 880px;
      height: 75px;
  }
  .categories__btn{
      width: 220px;
      height: 75px;
      border: none;
      border-radius: 18px;
      background-color: #fff;
      padding: 26px 66px;
      gap: 10px;
  }
  .categories__btn:hover{
      width: 220px;
      height: 75px;
      border: none;
      border-radius: 18px;
      background-color: #CDA274;
      color: #fff;
      padding: 26px 66px;
      gap: 10px;
  }
  .content {
      display: flex;
      flex-direction: row;
      gap: 30px;
  }
  .content__left, .content__right {
      display: flex;
      flex-direction: column;
      width: 585px;
      gap: 35px;
  }
  .text-block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  .item-long {
      width: 585px;
      height: 947px;
  }
  .item-long img {
      width: 585px;
      height: 853px;
  }
  .item-short{
      width: 585px;
      height: 616px;
  }
  .item-short img{
      width: 585px;
      height: 522px;
  }
  .frame {
      display: flex;
      flex-direction: column;
      justify-content: start;
      height: 62px;
  }
  h4 {
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0.02em;
      text-align: left;
      color: #292F36;
  }
  p {
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      text-align: left;
      color: #4D5053;
  }
  .arrow {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      border: none;
      background-color: #F4F0EC;
      color: #292F36;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    width: 268px;
    height: 52px;
  }
  .pagination__btn {
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background-color: #fff;
    border-color: #CDA274;
    color: #292F36;
  }
  .pagination__btn:hover {
    background-color: #F4F0EC;
    border: none;
  }
  
  </style>