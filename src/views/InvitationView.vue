<template>
  <div>
    <div class="pre-invitation" v-if="!showInvitation">
      <img src="../assets/barong.svg" alt="Barong" class="barong" />
      <button class="button-9" @click="seeInvitation">See Invitation</button>
    </div>
    <div class="audio-box">
      <audio src="/music.aac" loop ref="music" class="music"></audio>
    </div>

    <div class="invitation" v-if="showInvitation">
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
            Penganugerahan Retail Management 2021 & Penandatanganan SPJB 2022
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
      </div>
      <div class="footer">
        <div>
          <p class="footer-text">Pupuk Indonesia 2022</p>
        </div>
        <img src="../assets/pura.svg" alt="Pura" class="pura" />
      </div>

      <Vue3Lottie
        :animationData="animationData"
        :height="200"
        :width="200"
        class="barong-lottie"
      />
    </div>
  </div>
</template>

<script>
import User from "../services/user";
import animationData from "../assets/barong.json";

export default {
  data: () => ({
    user: null,
    animationData,
    showInvitation: false,
  }),
  created() {
    this.id = this.$route.params.id;

    this.user = User.getUser(this.id);

    this.animation = animationData;
  },
  methods: {
    redirect() {
      console.log("asd");
      // window.location.href = "https://google.com/contact";
    },
    scrollFunction() {
      console.log("scrolling from method");
    },
    seeInvitation() {
      this.showInvitation = true;
      console.log(this.$refs.music);
      this.$refs.music.play();
    },
  },
};
</script>
