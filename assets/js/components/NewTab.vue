<template>
    <div class="flex flex-col h-screen">
        <div class="grid place-items-center my-auto" v-if="quote">
            <div class="shadow-2xl rounded-lg bg-[#242424] border-2 border-[#42B883] text-center p-8 space-y-5">
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
            let url = "https://deen-reminder.herokuapp.com/api/v1/fetch-quotes";
            await axios.get(url).then((res) => {
                this.quote = res.data.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>