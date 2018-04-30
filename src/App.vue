<template>
    <div id="app">
        <b-container>
            <b-row>
                <template v-for="(videoId, index) in videoList">
                    <tv :videoId="videoId" :videoList="videoList" @event="handler"></tv>
                    <div v-if="(index + 1) % 3 == 0" class="w-100"></div>
                </template>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import tv from '@/components/Television';

export default {
    name: 'App',
    computed: {
        break(index) {
            return index % 3 ? true : false
        },
        videoList: function(){
            // TODO: Make a form so users can add a video or video list
            var vList = [
                'c8W-auqg024',    // Garlic bread to the edge of space
                'KhaLiiSUvAw',    // Ferrari Enzo Tour
                '1U-cgn3cEGA',    // Best of Rodney Mullen
                // '_bkX5VkZg8U',    // Ken Block Gymkhana 9
                // 'W4afbDBWINU',    // Gold Robot Dancers
                // '05hTBAOnDQE',    // Cyanide & Happiness: Le Telepathe
                // 'ayf1sYiNLhQ',    // TV Test Pattern
                // 'ZApMxLmpIhQ',    // Habibi Lal Belly Dance
                // 'W4YcRYzeakA',    // Moving a bed with a bike
                // 'fNp5JZ2vA8o',    // 11 Year Old Dubstep Dance
                // 'IvUU8joBb1Q'    // Wintergatan Marble Music Machine
            ]
            var tvCount = (vList.length > 8 ? 8 : vList.length)
            var defaultVideo = 'spYwizUnxCI'   // TV Test Pattern

            if(vList.length == 0) vList = [defaultVideo];
            while (vList.length < tvCount) {
                vList = videoList.concat(vList);
            }
            return vList.sort( function() { return 0.5 - Math.random() } );
        }
    },
    methods: {
        handler(params) {
            if('inc' in params) this.incrementVideo(params)
        },
        incrementVideo(params) {
            var index = this.videoList.indexOf(params.videoId)
            var length = this.videoList.length
            var newIndex = 0
            if(index + params.inc >= 0 && index + params.inc <= length-1) newIndex = index + params.inc
            return this.videoList[newIndex]
        }
    },
    components: {
        tv
    },

}
</script>

<style>

</style>
