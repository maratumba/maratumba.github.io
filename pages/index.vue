<template>
  <div>
    <div class="header-wrapper" id="home">
      <section class="hero is-large">
        <div class="hero-body">
          <div class="has-text-centered">
               <h1 class="subtitle">Hey there, I'm</h1>
                <h2 class="title">
                  Yaman
                </h2>
                <h1 class="subtitle profession">Fullstack Developer & Scientist</h1>
              </div>
        </div>
      </section>
    </div>
    <!-- Begin Main Content -->
    <div class="main-content">
      <!-- Begin About Me Section -->
      <!-- <div class="section-light about-me" id="about-me" >
        <div class="columns">
          <div class="column is-12 about-me">
            <h1 class="title section-title">About Me</h1>
          </div>
          <div class="columns has-text-left is-multiline">
            <div class="column is-6 right-image " data-aos="fade-left">
              <img
                class="is-rounded"
                src="https://picsum.photos/id/366/600/375"
                alt=""
              />
            </div>
            <div
              class="column is-12 has-vertically-aligned-content"
              data-aos="fade-left"
            >
              <p class="is-larger">
                <strong
                  >I am a scientist and a developer.</strong
                >
              </p>
              <br />
              <p>
                I have degrees in Physics and Seismology, worked on 
                big data, machine learning, signal processing; developed
                web services and apps.
              </p>
              <br />
              <div class="is-divider"></div>
              <div class="columns about-links">
                <div class="column">
                  <p class="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p class="subheading">
                    123-456-7890
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p class="subheading">
                    hello@example.com
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>View my portfolio</strong>
                  </p>
                  <p class="subheading">
                    example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <section class="section-light" >
            <h1 class="section-title" data-aos="fade-right">About Me</h1>
            <p class="is-larger is-size-4" data-aos="fade-left">
              I am a full-stack developer with a science background. I design
              web services, apps and do consulting work.
            </p>
            <div class="columns mt-4 is-multiline">
              <div class="column" v-for="account in accounts" :key="account.value">
              <a :href="account.href" target="_blank" rel="noreferrer nofollow" class="is-primary button is-medium is-outlined is-fullwidth">
                <span class="icon">
                  <i :class="account.icon" ></i>
                </span>
                <span v-text="account.text"></span>
              </a>
              </div>
            </div>
          </section>
          <section class="section-light" data-aos="fade">
            <h1 class="section-title">Resume / CV</h1>
            <a
              href="https://www.dropbox.com/s/3njykzddquh6z1k/Yaman%20Ozakin%20-%20CV.pdf?dl=1"
              target="_blank"
              rel="noreferrer nofollow"
              class="button is-medium is-primary is-outlined is-fullwidth"
            >
              <span class="icon is-medium">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </section>
          <section class="section-light" data-aos="fade">
            <h1 class="section-title" data-aos="fade">Skills</h1>
            <div v-for="section in skillSections" :key="section.value" class="mb-6">
              <h2 class="section-title is-size-5 pb-0" data-aos="fade">{{ section.text }}</h2>
              <div class="columns is-multiline is-mobile">
                <skill-card
                  v-for="(skill,i) in skills[section.value]"
                  :key="skill.value"
                  class="column has-text-centered is-one-quarter-desktop is-one-third-mobile is-one-third-tablet is-one-fifth-fullhd"
                  :skill="skill.value"
                  :text="skill.text"
                  data-aos="fade"
                  :data-aos-delay="50+i*50"
                />
              </div>
            </div>
          </section>
          <section class="section-light" >
            <contact-form />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillCard from "~/components/SkillCard.vue";
import ContactForm from "~/components/ContactForm.vue";
export default Vue.extend({
  data: () => ({
    skills: [],
    skillSections: [
      {
        value: 'languages',
        text: 'Languages',
      },
      {
        value: 'frameworks',
        text: 'Frameworks',
      },
      {
        value: 'tools',
        text: 'Tools',
      },
    ],
    accounts: [
      {
        value: 'github',
        text: 'Github',
        href: 'https://github.com/maratumba',
        icon: 'fab fa-github',
      },
      {
        value: 'linkedin',
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/gulyamani/',
        icon: 'fab fa-linkedin',
      },
      {
        value: 'twtitter',
        text: 'Twitter',
        href: 'https://www.twitter.com/gulyamani/',
        icon: 'fab fa-twitter',
      },
      {
        value: 'google-scholar',
        text: 'Scholar',
        href: 'https://scholar.google.com/citations?user=9SgLlsMAAAAJ&hl=en',
        icon: 'fas fa-graduation-cap',
      },
    ]
  }),
  components: {
    SkillCard,
    ContactForm,
  },
  async asyncData(ctx) {
    // fetch our article here
    const skills = await ctx.app.$content(`skills`).fetch();
    return { skills: skills.skills };
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins|Kaushan+Script");
.has-vertically-aligned-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Poppins", Lato, Tahoma, sans-serif;
  width: 100%;
  min-height: 100%;
}

.header-wrapper {
  padding-bottom: 30px;
}
.hero-body {
  padding: 40vh 1.5rem !important;
}
.hero {
  max-height: 100vh;
  background-image: url("../assets/media/hero/lamb-traverse.jpg");
  background: linear-gradient(rgba(31, 44, 108, 0.65), rgba(31, 44, 108, 0.65)),
    rgba(0, 0, 0, 0.55) url("../assets/media/hero/lamb-traverse.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 0px 60%;
  color: white;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-family: "Poppins", sans-serif;
}

@media (max-width: 599px) {
  .hero {
    max-height: 30vh;
    background-position: center -350px;
  }
  .hero-body {
    padding: 1vh 1.5rem !important;
  }
}

.hero .title {
  font-family: "Kaushan Script", sans-serif;
  transform: rotate(-5deg);
  font-size: 5rem;
  color: whitesmoke;
}

.hero .subtitle {
  padding: 5px;
  color: whitesmoke;
}

.hero .profession {
  padding-top: 50px;
  font-size: 1.7rem;
  text-transform: uppercase;
}

.hero .hero-foot {
  height: 50px;
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.082);
}

@media (max-width: 599px) {
  .hero .hero-foot {
    display: none;
  }
}

.hero .hero-foot .hero-foot--wrapper {
  margin: 7px auto;
  height: 50px;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop {
  line-height: 38px;
  font-weight: 600;
  text-transform: lowercase;
  letter-spacing: 1px;
  font-size: 1rem;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li {
  display: inline-block;
  padding-right: 15px;
  padding-left: 15px;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li.is-active a {
  border-bottom: 2px solid #1f2c6c;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li a {
  color: #1f2c6c;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li a:hover {
  color: #1f2c6c;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid #1f2c6c;
}

.main-content {
  padding-top: 2rem;
  color: #3c4172;
  font-family: "Poppins", sans-serif;
}

.main-content .section-dark {
  background-color: #f0f3f5;
  padding: 60px 0px;
}

.main-content .section-dark.resume {
  height: 400px;
  padding-top: 100px;
}

@media (max-width: 599px) {
  .main-content .section-dark.resume {
    padding-top: 75px;
  }
}

.main-content .section-dark.resume .title {
  padding: 20px;
}

.main-content .section-dark.resume button {
  border: 2px solid #43485c;
  background: white;
  color: #43485c;
  height: 50px;
  width: 250px;
  font-size: 1rem;
  text-transform: uppercase;
}

.main-content .section-dark.resume .fa-download {
  color: #1f2c6c;
}

.main-content .section-dark.my-work {
  padding: 120px;
}

@media (max-width: 599px) {
  .main-content .section-dark.my-work {
    padding: 75px 20px;
  }
}

.main-content .section-dark.my-work .work-item {
  margin-bottom: 1rem;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

.main-content .section-dark.my-work .work-item:hover {
  -webkit-transform: scale(1.055) translateY(-2px);
  transform: scale(1.055) translateY(-2px);
  -webkit-box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
  box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
}

.main-content .section-light {
  padding: 30px;
}

.main-content .section-light.about-me {
  padding-bottom: 100px;
}

.main-content .section-light.about-me .is-larger {
  font-size: 1.2rem;
}

@media (max-width: 599px) {
  .main-content .section-light.about-me .about-links {
    text-align: center;
  }
}

.main-content .section-light.about-me .right-image img {
  border-radius: 11px;
  margin: 20px;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

@media (max-width: 599px) {
  .main-content .section-light.about-me .right-image img {
    margin: auto;
  }
}

.main-content .section-light.skills {
  padding: 100px;
}

@media (max-width: 599px) {
  .main-content .section-light.skills {
    padding: 50px 20px 40px 20px;
    padding-bottom: 20px;
  }
}

.main-content .section-light.skills h1 {
  padding: 10px;
}

.main-content .section-light.contact {
  padding: 200px;
}

.main-content .section-light.contact button {
  width: 100%;
  background-color: #43485c;
  color: white;
  height: 50px;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
}

@media (max-width: 599px) {
  .main-content .section-light.contact {
    padding: 60px 20px;
  }
}

.main-content .section-color.services {
  padding: 100px;
  background-color: #43485c;
  color: white;
}

.main-content .section-color.services .title,
.main-content .section-color.services .subtitle {
  color: white;
}

.main-content .section-color.services i {
  font-size: 3rem;
  padding: 20px;
}

.main-content .section-title {
  color: #43485c;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding-bottom: 30px;
}

.footer {
  bottom: 0;
  width: 100vw;
  padding: 0;
  height: 80px;
  line-height: 25px;
  text-align: center;
  background: #1f2c6c;
  color: whitesmoke;
  padding-top: 2rem;
}

.footer a {
  padding: 0rem 1rem 1rem 1rem;
  color: lightgrey;
}

.footer a i {
  font-size: 1.5rem;
  padding: 0px 10px;
}

.footer a .nav-item {
  color: whitesmoke;
}

#toTop {
  height: 50px;
  width: 50px;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgba(31, 44, 108, 0.65);
  color: white;
  cursor: pointer;
  border-radius: 50%;
  font-size: 2rem;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

#toTop a {
  color: white;
}

#toTop:hover {
  background-color: #43485c;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: rgba(245, 245, 245, 0);
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #43485c;
}

body.preloader-site {
  overflow: hidden;
}

.preloader-wrapper {
  height: 100%;
  width: 100%;
  background: #1f2c6c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
}

.preloader-wrapper .preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 120px;
}

.white {
  color: ghostwhite;
}
</style>