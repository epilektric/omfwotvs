<template>
    <b-col class="television" md v-autoheight="95">
        <youtube style="margin:1em;" class="player" ref="youtube" width="300" height="169" v-autoheight="83" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
        <div class="frame">
            <div class="controls">
                <div class="button play-pause" v-on:click="playPauseVideo"></div>
                <div class="button next" v-on:click="nextVideo"></div>
                <div class="button previous" v-on:click="previousVideo"></div>
            </div>
        </div>
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
            },
            isPlaying: false,
            mutableVideoId: null
        }
    },
    props: {
        videoId: null,
        videoList: null
    },
    methods: {
        // REF: https://github.com/anteriovieira/vue-youtube/blob/master/src/vue-youtube.js

        playing() {
            this.isPlaying = true
        },
        playPauseVideo() {
            if(this.isPlaying == false) {
                this.player.playVideo()
                this.isPlaying = true
            } else {
                this.player.pauseVideo()
                this.isPlaying = false
            }
        },
        nextVideo() {
            var array = this.$props.videoList
            var i = array.indexOf(this.mutableVideoId)
            var newVideoId = array[i==array.length-1 ? 0 : i+1]
            this.mutableVideoId = newVideoId
            return this.updateVideo(newVideoId)
        },
        previousVideo() {
            var array = this.$props.videoList
            var i = array.indexOf(this.mutableVideoId)
            var newVideoId = array[i==0 ? array.length-1 : i-1]
            this.mutableVideoId = newVideoId
            return this.updateVideo(newVideoId)
        },
        updateVideo(videoId) {
            console.log(videoId)
            this.$refs.youtube.updatePlayer(videoId)
            if(this.isPlaying) {
                this.player.playVideo()
            } else {
                this.isPlaying = false
            }
        }
    },
    computed: {
        player () {
            return this.$refs.youtube.player
        }
    },
    mounted() {
        this.mutableVideoId = this.$props.videoId
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

.controls .button {
    cursor: pointer;
}
.controls .play-pause {
    position: absolute;
    top: 0;
    right: 4em;
    bottom: 0;
    left: 0;
}
.controls .next,
.controls .previous {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 20em;
}
.controls .next {
    position: absolute;
    top: 6.4em;
    right: 0;
    bottom: 4em;
    left: 20em;
}
.controls .previous {
    position: absolute;
    top: 8.6em;
    right: 0;
    bottom: 1.5em;
    left: 20em;
}
</style>
