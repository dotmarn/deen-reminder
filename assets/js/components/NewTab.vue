<template>
    <div class="flex flex-col h-screen">
        <div class="grid place-items-center my-auto">
            <div class="shadow-2xl rounded-lg bg-[#242424] border-2 border-[#42B883] text-center p-8 space-y-5" v-if="quote">
                <h1 class="text-white italic font-Monts text-3xl">{{quote.roman}}</h1>
                <h1 class="text-[#ebebeb99] font-Karla font-bold text-3xl">{{quote.english}}</h1>
                <p class="italic font-Karla text-[#42B883]">- {{quote.source}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'NewTab',
    data() {
        return {
            quote: {}
        }
    },
    created() {
        this.fetchQuote();
    },
    methods: {
        async fetchQuote() {
            let url = "json/data.json";
            await axios.get(url).then((res) => {
                let data = res.data;
                let random = Math.floor(Math.random() * data.length);
                this.quote = data[random];
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>