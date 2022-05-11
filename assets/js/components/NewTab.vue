<template>
    <div class="flex flex-col h-screen mx-auto">
        <div class="grid place-items-center my-auto" v-if="quote">
            <div class="shadow-2xl rounded-lg bg-[#242424] border-2 border-[#42B883] text-center p-8 space-y-5">
                <div class="text-right mx-auto">
                    <button @click="generateScreenshot(quote)">
                        <i class="fas fa-share-alt fa-2x text-white"></i>
                    </button>
                </div>
                <h1 class="text-white italic font-Monts text-3xl">{{ quote.roman }}</h1>
                <h1 class="text-[#ebebeb99] font-Karla font-bold text-3xl">{{ quote.english }}</h1>
                <p class="italic font-Karla text-[#42B883]">- {{ quote.source }}</p>
            </div>
        </div>
    </div>

        <div id="screenshot" class="bg-[#323A49] py-2 px-6 grid place-items-center my-auto">
            <div class="text-center space-y-5 px-16">
                <p class="text-[#52FFA8] font-semibold font-Karla text-base">{{ source }}</p>
                <h1 class="font-bold font-Karla text-5xl text-white">{{ english }}</h1>
                <p class="font-bold font-Karla text-lg text-[#ebebeb99]">{{ roman }}</p>
            </div>
    
            <div class="border-t border-t-[#CEE3E9]">
                <div class="flex items-center space-x-2">
                    <img src="images/16x16.png" alt="" class="">
                    <p class="font-Karla text-white">#DeenReminder</p>
                </div>
            </div>
        </div>

</template>

<script>
import axios from 'axios';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

export default {
    name: 'NewTab',
    data() {
        return {
            quote: {},
            roman: '',
            english: '',
            source: '',
            template: ''
        }
    },
    created() {
        this.fetchQuote();
    },
    methods: {
        async fetchQuote() {
            let url = "https://deen-reminder.herokuapp.com/api/v1/fetch-quotes";
            await axios.get(url).then((res) => {
                this.quote = res.data.data;
            }).catch((error) => {
                console.log(error);
            });
        },

        generateScreenshot(item) {
            this.template.style.display = 'grid';
            this.roman = item.roman;
            this.english = item.english;
            this.source = item.source;
            htmlToImage.toPng(this.template, { height: 500 })
                .then((dataUrl) => {
                    this.template.style.display = 'none';
                    saveAs(dataUrl, 'deen.png');
                }).catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.template = document.getElementById('screenshot');
        this.template.style.display = 'none';
    }
}
</script>
