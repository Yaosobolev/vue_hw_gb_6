<template>
    <div class="blog">
        <div class="blog__heading center">
            <h3>Articles & News</h3>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="blog__content">
            <div class="item">
                <img src="../assets/home-blog1.jpg" alt="blog image">
                <div class="item__content">
                    <h4>Let’s Get Solution For Building Construction Work</h4>
                    <div class="date">
                        <p>26 December,2022 </p>
                        <button class="btn">></button>
                    </div>
                </div>
            <div class="tag">Kitchan Design</div>
            </div>

            <div class="item">
                <img src="../assets/home-blog2.jpg" alt="blog image">
                <div class="item__content">
                    <h4>Let’s Get Solution For Building Construction Work</h4>
                    <div class="date">
                        <p>26 December,2022 </p>
                        <button class="btn">></button>
                    </div>
                </div>
            <div class="tag">Kitchan Design</div>
            </div>

            <div class="item">
                <img src="../assets/home-blog3.jpg" alt="blog image">
                <div class="item__content">
                    <h4>Let’s Get Solution For Building Construction Work</h4>
                    <div class="date">
                        <p>26 December,2022 </p>
                        <button class="btn">></button>
                    </div>
                </div>
                <div class="tag">Kitchan Design</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeBlog"
}

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
.blog {
    width: 1200px;
    height: 714px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
}
.blog__heading {
    width: 812px;
    height: 142px;
    text-align: center;
}
.blog__heading h3 {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #292F36;
}
.blog__heading p {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #4D5053;
}
.blog__content {
    width: 1200px;
    height: 520px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.item {
    width: 382;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    position: relative;
}
.item img {
    width: 340px;
    height: 290px;
    border-top-left-radius: 41px;
    border-top-right-radius: 41px;
}
.item__content {
    height: 152px;
}
.date {
    width: 52px;
    height: 52px;
    border-radius: 26px;
    border: none;
    color: #F4F0EC;
}
.tag {
    width: 129px;
    height: 41px;
    top: 249px;
    left: 41px;
    border-radius: 8px 8px 8px 0;
    background-color: #fff;
    color: #4D5053;
    position: absolute;
}
</style>