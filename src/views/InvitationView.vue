<template>
  <div class="invitation" @scroll="redirect">
    <div class="header">
      <img
        src="../assets/bumn.svg"
        alt="Logo BUMN Untuk Indonesia"
        class="img-header"
      />
      <img
        src="../assets/pi.svg"
        alt="Logo Pupuk Indonesia"
        class="img-header"
      />
    </div>
    <div class="sub-header">
      <img
        src="../assets/anper.svg"
        alt="Logo Anak Perusahaan Pupuk Indonesia"
        class="logo-anper"
      />
    </div>
    <div class="content">
      <div class="content-text">
        <p>Dear,</p>
        <p class="username">{{ user.name }}</p>
        <p>You are invited to</p>
        <h1 class="title">
          Retail Management Awarding 2021 & Penandatanganan SPJB Retail Komersil
          2022
        </h1>
        <p>Wednesday, 30 March 2022</p>
        <p>19.00 WITA</p>
      </div>
      <div class="tooltip">
        <button class="button-9" @click="redirect()">
          <div class="button-content">
            <img src="../assets/zoom.svg" alt="Zoom" class="zoom-icon" />
            <span class="button-text"> Join Event </span>
          </div>
        </button>
        <span class="tooltiptext">
          Zoom Meeting Still Unavailable. Please Try Again Later
        </span>
      </div>

      <!-- <div class="audio-box">
        <audio src="/music.aac" ref="myAudio" controls></audio>
      </div> -->
    </div>
    <div class="footer">
      <div>
        <p class="footer-text">Pupuk Indonesia 2022</p>
      </div>
      <img src="../assets/pura.svg" alt="Pura" class="pura" />
      <img
        src="../assets/barong-line.svg"
        alt="Barong Line"
        class="barong-line"
      />
    </div>
  </div>
</template>

<script>
import User from "../services/user";

export default {
  data: () => ({
    user: null,
    audioPlayer: null,
  }),
  created() {
    this.id = this.$route.params.id;

    this.user = User.getUser(this.id);
    console.log(User.getUser(124));
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
    this.audioPlayer = this.$refs.myAudio;
    // this.audioPlayer.play();
  },
  methods: {
    redirect() {
      console.log("asd");
      this.audioPlayer.play();
      // window.location.href = "https://google.com/contact";
    },
    scrollFunction() {
      this.audioPlayer.play();
      console.log("scrolling from method");
    },
  },
};
</script>
