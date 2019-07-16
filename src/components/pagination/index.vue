<template>
    <ul v-if="totalPage > 1 && totalPage < 8" class="pagination">
        <li v-if="withNextPrev" :class="disablePrev">
            <a @click="!disablePrev ? btnPrev() : ''">
                <span class="pagination__icon x-icon-shevron-left" />
            </a>
        </li>
        <li
            v-for="(n, index) in totalPage"
            :key="index"
            class="pagination__page"
            :class="n == selected ? 'active ' + activeBGColor  : ''">
            <a
                @click="emitBtnClick(n)"
                :style="customActiveBGColor && n == selected ? {background: customActiveBGColor, borderColor: customActiveBGColor} : {}">
                {{ n }}
            </a>
        </li>
        <li v-if="withNextPrev" :class="disableNext">
            <a @click="!disableNext ? btnNext() : ''">
                <span class="pagination__icon x-icon-shevron-right" />
            </a>
        </li>
    </ul>

    <ul v-else-if="totalPage >= 8" class="pagination">
        <li v-if="withNextPrev" :class="disablePrev">
            <a @click="!disablePrev ? btnPrev() : ''">
                <span class="pagination__icon x-icon-shevron-left" />
            </a>
        </li>
        <li
            v-if="n.show"
            v-for="(n, index) in pages"
            :key="index"
            class="pagination__page"
            :class="n.content == selected ? 'active ' + activeBGColor : '' + n.disable">
            <a
                v-if="n.disable != 'disabled'"
                @click="emitBtnClick(n.content)" :style="customActiveBGColor && n.content == selected ? {background: customActiveBGColor, borderColor: customActiveBGColor} : {}">
                {{ n.content }}
            </a>
            <a v-else>{{ n.content }}</a>
        </li>
        <li v-if="withNextPrev" :class="disableNext">
            <a @click="!disableNext ? btnNext() : ''">
                <span class="pagination__icon x-icon-shevron-right" />
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name : 'VuePaginateAl',
        props : {
            totalPage : {
                type : Number,
                required: true
            },
            currentPage : {
                type : Number,
                default: 1,
            },
            myData : {
                default : null,
            },
            pageRange: {
                type: Number,
                default: 3
            },
            withNextPrev : {
                type : Boolean,
                default : true
            },
            // nextText : {
            //     type : String,
            //     default : 'Next'
            // },
            // prevText : {
            //     type : String,
            //     default : 'Prev'
            // },
            activeBGColor : {
                type : String,
            },
            customActiveBGColor : {
                type : String,
                default : null,
            }
        },
        data() {
            return {
                selected: this.currentPage,
                disableNext : '',
                disablePrev : '',
            }
        },
        mounted()
        {
            this.disablePrevNext();
            console.log(this.customActiveBGColor);
        },
        computed: {
            pages : function()
            {
                let items = [];
                for (let i = 0; i < this.totalPage; i++) {
                    let page = {
                       content: i + 1,
                       disable : '',
                       show : false
                    }
                    items[i] = page;
                }
                let page1 = {
                    content: "...",
                    disable : 'disabled',
                    show : false
                }
                let page2 = {
                    content: "...",
                    disable : 'disabled',
                    show : false
                }
                items.splice(1, 0, page1);
                items.splice(items.length-1, 0, page2);
                for (let i = 0; i < items.length; i++) {
                    if(i == 0 || i == items.length-1)
                        items[i].show = true;
                    if(this.selected <= this.pageRange)
                    {
                        if(this.selected == this.pageRange)
                        {
                            if(i >= 2 && i <= this.pageRange+1)
                                items[i].show = true;
                        }
                        else {
                            if(i >= 2 && i <= this.pageRange)
                                items[i].show = true;
                        }
                        items[items.length-2].show = true;
                    }
                    else if (this.selected > this.pageRange) {
                        if(i >= this.selected-1 && (this.selected + 2) < items.length-2 && i <= this.selected+1)
                        {
                            items[1].show = true;
                            items[items.length-2].show = true;
                            items[i].show = true;
                        }
                        else if (i >= items.length - 2 - this.pageRange &&(this.selected + 2) >= items.length-2)
                        {
                            items[1].show = true;
                            items[items.length-2].show = false;
                            items[i].show = true;
                        }
                    }
                }
                return items;
            },
        },
        methods : {
            emitBtnClick : function(n)
            {
                this.selected = n;
                this.$emit('btnClick', n, this.myData);
                this.disablePrevNext();
            },
            btnNext : function()
            {
                this.selected++;
                this.$emit('btnClick', this.selected, this.myData);
                this.disablePrevNext();
            },
            btnPrev : function()
            {
                this.selected--;
                this.$emit('btnClick', this.selected, this.myData);
                this.disablePrevNext();
            },
            disablePrevNext : function()
            {
                this.disablePrev = this.selected == 1 ? 'disabled' : '';
                this.disableNext = this.selected == this.totalPage ? 'disabled' : '';
            }
        }
    }
</script>

<style lang="scss" scoped src="./style.scss"></style>