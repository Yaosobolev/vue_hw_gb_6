<template>
    <div class="project">
        <div class="project__heading">
            <h3>Follow Our Projects</h3>
            <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
        </div>
        <div class="project__content">
            <div class="item">
                <div class="item-img"><img src="../assets/home-item1.jpg" alt="Kitchen image"></div>
                <div class="item__desc">
                    <div class="item__text">
                        <h4>Modern Kitchan</h4>
                        <p>Decor / Artchitecture</p>
                    </div>
                    <button class="item__btn">></button>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../assets/home-item2.jpg" alt="Kitchen image"></div>
                <div class="item__desc">
                    <div class="item__text">
                        <h4>Modern Kitchan</h4>
                        <p>Decor / Artchitecture</p>
                    </div>
                    <button class="item__btn">></button>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../assets/home-item3.jpg" alt="Kitchen image"></div>
                <div class="item__desc">
                    <div class="item__text">
                        <h4>Modern Kitchan</h4>
                        <p>Decor / Artchitecture</p>
                    </div>
                    <button class="item__btn">></button>
                </div>
            </div>
            <div class="item">
                <div class="item-img"><img src="../assets/home-item4.jpg" alt="Kitchen image"></div>
                <div class="item__desc">
                    <div class="item__text">
                        <h4>Modern Kitchan</h4>
                        <p>Decor / Artchitecture</p>
                    </div>
                    <button class="item__btn">></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
* {
        margin: 0;
        padding: 0;
    }
.project {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 56px;
    justify-content: center;
    align-items: center;
}
.project__heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 737px;
    height: 137px;
}
.project__heading h3 {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #292F36;
}
.project__heading p {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #4D5053;
}
.project__content {
    width: 1200px;
    height: 1312px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 56px;
}
.item {
    width: 550px;
    height: 624px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.item-img img {
    width: 550px;
    height: 550px;
}
.item__desc {
    width: 550px;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.item__text {
    width: 217px;
}
.item__text h4 {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
}
.item__text p {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
}
.item__btn {
    width: 70px;
    height: 70px;
    border: none;
    border-radius: 35px;
    background-color: #F4F0EC;
    color: #292F36;
}
</style>