<template>
  <ClientOnly>
    <div class="profile" @mouseover="upHere = true" @mouseleave="upHere = false">
      <img class="profile__image" src="https://avatars.githubusercontent.com/u/6296241?v=4" />
      <div class="profile__content">
        <div class="profile__name">
          <span>이찬희 (MarkiiimarK)</span>

          <a
            class="profile__github"
            v-on:click="navigate('https://github.com/chanhi2000')"
          ><VPIcon icon="iconfont icon-github"/></a>
          <a 
            class="profile-notion"
            v-on:click="navigate('https://markiiimark.notion.site/MarkiiimarK-Fullstack-DevOps-c231ae6c157d4baba89a3713c92449dd')"
          ><VPIcon icon="iconfont icon-notion"/></a>
          <a 
            class="profile-mail"
            v-on:click="doCopy"
          ><VPIcon icon="fas fa-envelope"/></a>
          <div class="mail-box" v-if="!!upHere" @click="doCopy">
            chanhi2000@gmail.com
          </div>
        </div>
        <div class="profile__desc">
          Never Stop Learning. Get Your Hands Dirty.<br />
          <!-- 블로그 제작 문의는 메일로 보내주세요!! -->
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
  
<script>
  export default {
    name: "Profile",
    data() {
      return {
        upHere: false
      };
    },
    methods: {
      navigate(url='') {
        window.open(url)
      },
      doCopy() {
        if (!document.queryCommandSupported("copy")) {
          return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }
        const textarea = document.createElement("textarea");
        textarea.value = "chanhi2000@gmail.com";
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("클립보드에 이메일 주소가 복사되었습니다!");
      }
    }
  };
</script>
  
<style scoped>
  .profile {
    display: flex;
    margin: 30px 0 50px;
  }
  .profile__github,.profile-notion,.profile-mail {
    display: inline-block;
    margin-right: 5px;
  }
  .profile__github:hover,.profile-notion:hover,.mail-box:hover {
    cursor: pointer;
  }
  .profile__image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .profile__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    width: 100%;
  }
  .profile__name span {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
    color: var(--c-text-lighter);
    margin-right: 10px;
  }
  .profile__desc {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 0.25rem;
    color: var(--c-text-quote);
    letter-spacing: -0.004em;
  }
  a {
    color: var(--c-text-accent);
  }
  .profile__name {
    display: flex;
    align-items: center;
  }
  .mail-box {
    margin-left: 10px;
    border-radius: 6px;
    padding: 3px 5px;
    color: white;
    background: rgb(45, 61, 80);
  }
  html[data-theme=dark] .profile__name span { color: var(--c-text-lighter); }
  html[data-theme=dark] .profile__desc { color: var(--c-text-quote); }
  html[data-theme=dark] a { color: var(--c-text-accent); }
  </style>