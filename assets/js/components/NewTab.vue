<template>
    <div class="flex flex-col h-screen">
        <div class="grid place-items-center my-auto" v-if="quote">
            <div class="shadow-2xl rounded-lg bg-[#242424] border-2 border-[#42B883] text-center p-8 space-y-5">
                <div class="text-right mx-auto">
                    <button @click="generateScreenshot(quote)">
                        <i class="fas fa-share-alt fa-2x text-white"></i>
                    </button>
                </div>
                <h1 class="text-white italic font-Monts text-3xl">{{quote.roman}}</h1>
                <h1 class="text-[#ebebeb99] font-Karla font-bold text-3xl">{{quote.english}}</h1>
                <p class="italic font-Karla text-[#42B883]">- {{quote.source}}</p>
            </div>
        </div>
    </div>

    <div id="screenshot" class="bg-[#323A49] py-2 px-6">
        <div class="text-center space-y-5 py-2">
            <p class="text-[#52FFA8] font-semibold font-Karla text-sm">{{ source }}</p>
            <h1 class="italic font-Monts text-lg text-[#CEE3E9]">{{ roman }}</h1>
            <h1 class="font-bold font-Karla text-sm text-white">{{ english }}</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'NewTab',
    data() {
        return {
            quote: {},
            roman: '',
            english: '',
            source: ''
        }
    },
    created() {
        this.fetchQuote();
    },
    methods: {
        async fetchQuote() 
        {
            let url = "https://deen-reminder.herokuapp.com/api/v1/fetch-quotes";
            await axios.get(url).then((res) => {
                this.quote = res.data.data;
            }).catch((error) => {
                console.log(error);
            });
        },

        async generateScreenshot(item)
        {
            this.roman = item.roman;
            this.english = item.english;
            this.source = item.source;

            
        }
    }
}
</script>