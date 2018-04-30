<template>
    <b-col class="television" md v-autoheight="95">
        <youtube class="player" width="300" height="169" v-autoheight="83" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
        <div class="frame"></div>
    </b-col>
</template>

<script>
import resize from 'vue-resize-directive'

export default {
    name: 'Television',
    data() {
        return {
            playerVars: {
                autoplay: 0
            }
        }
    },
    props: {
        videoId: ''
    },
    methods: {
        playing() {
            console.log('we are watching!!!')
        }
    }
}
</script>

<style scoped>
.col-md {
    padding-right: 1px;
    padding-left: 1px;
}
.frame {
    background-image: url('../assets/tv-frame.png');
    background-position: top, center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.player {
    margin: 1em; /* This isn't working. */
}
</style>
