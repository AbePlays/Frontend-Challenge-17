<template>
  <div class="max-w-screen-md mx-auto transform -translate-y-24 px-4">
    <div class="bg-white font-commissioner text-center p-8 rounded-lg shadow">
      <img
        src="../../assets/logo-mastercraft.svg"
        alt="mastercraft-logo"
        class="mx-auto transform -translate-y-14"
      />
      <h1 class="font-bold text-2xl -mt-4">Mastercraft Bamboo Monitor Riser</h1>
      <p class="text-dark-gray mt-4">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div class="flex justify-between h-12 mt-8">
        <button
          class="bg-moderate-cyan rounded-full px-8 text-white hover:bg-dark-cyan transition-colors duration-300"
          @click="toggleModal"
        >
          Back this project
        </button>
        <div class="flex justify-center items-center">
          <div
            class="flex items-center bg-gray-100 rounded-full h-11 cursor-pointer hover:opacity-50 transition-opacity duration-300"
            @click="toggleBookmark"
          >
            <img
              src="../../assets/icon-bookmark.svg"
              alt="bookmark"
              class="h-12 object-contain"
            />
            <p
              class="px-4 font-medium hidden sm:block"
              :class="{
                'text-moderate-cyan': isBookmarked,
                'text-dark-gray': !isBookmarked,
              }"
            >
              {{ isBookmarked ? "Bookmarked" : "Bookmark" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBookmarked: false,
    };
  },
  methods: {
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    },
  },
  inject: ["toggleModal"],
};
</script>

