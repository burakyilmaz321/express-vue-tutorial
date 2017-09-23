<template>
  <v-layout>

    <v-flex xs4>
      <panel title="Create Song">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album Image"
          v-model="song.albumImage"
        ></v-text-field>
        <v-text-field
          label="YouTube Id"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="" class="ml-4">
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"
        ></v-text-field>
        <v-text-field
          label="Tabs"
          multi-line
          v-model="song.tabs"
        ></v-text-field>
      </panel>
      <span class="error" v-if="error">{{error}}</span>
      <v-btn
        class="cyan"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
    
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        album: null,
        artist: null,
        genre: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tabs: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
