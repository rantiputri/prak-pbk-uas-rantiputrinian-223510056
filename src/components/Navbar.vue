<template>
  <header class="custom-navbar">
    <div class="container">
      <div class="branding">
        <span class="logo">Weather Widget Realtime</span>
      </div>
      <nav class="navigation">
        <div class="dropdown">
          <button ref="dropdownButton" @click="toggleDropdown" class="sidebar-toggle">
            <i class="fas fa-tasks"></i> Pilih Tugas
          </button>
          <transition name="dropdown">
            <ul v-if="dropdownVisible" ref="dropdownMenu" class="dropdown-menu">
              <li v-for="task in tasks" :key="task.id" class="dropdown-item">
                <a :href="task.link" target="_blank">
                  <i class="fas fa-book text-primary"></i> {{ task.name }}
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      dropdownVisible: false,
      tasks: [
        { id: 1, name: 'Tugas 1', link: 'https://github.com/rantiputri/tugas1-pbk-223510056?authuser=0' },
        { id: 2, name: 'Tugas 2', link: 'https://t2-pbk-223510056.web.app/' },
        { id: 3, name: 'Tugas 3', link: 'https://t3-rantiputrinian-pbk-e2f34.web.app/' },
        { id: 4, name: 'Tugas 4', link: 'https://rantiputrinian-t5-pbk.vercel.app/' },
        { id: 5, name: 'Tugas 5', link: 'https://tugas5-rantiputrinian-223510056-pbk.vercel.app/' },
        { id: 6, name: 'Tugas 6', link: 'https://t6-rantiputri-pbk.vercel.app/' },
        { id: 7, name: 'Tugas 7', link: 'https://rantiputrinian-223510056-t7-pbk.vercel.app/' }
      ],
    };
  },
  mounted() {
    this.setDropdownWidth();
    window.addEventListener('resize', this.setDropdownWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setDropdownWidth);
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    setDropdownWidth() {
      const buttonWidth = this.$refs.dropdownButton.offsetWidth;
      this.$refs.dropdownMenu.style.width = `${buttonWidth}px`;
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  background: linear-gradient(45deg, #3a6186, #89253e);
  color: #fff;
  padding: 15px 0;
  position: fixed;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  z-index: 1100;
  transition: all 0.3s ease;
}

.custom-navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.custom-navbar .branding .logo {
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-navbar .navigation .dropdown {
  position: relative;
}

.custom-navbar .navigation .sidebar-toggle {
  background: #ff5f6d;
  background: linear-gradient(to right, #ffc371, #ff5f6d);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
}

.custom-navbar .navigation .sidebar-toggle:hover {
  background: linear-gradient(to right, #ff4e50, #f9d423);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.custom-navbar .navigation .dropdown-menu {
  background: linear-gradient(45deg, #3a6186, #89253e);
  color: #333;
  list-style: none;
  position: absolute;
  top: 100%;
  margin: 10px -10px 0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1000;
  transform: translateY(10px);
  transition: transform 0.3s ease, opacity 0.3s ease;
  width: 150px;
}

.custom-navbar .navigation .dropdown-menu .dropdown-item {
  padding: 10px 20px;
  background: linear-gradient(to right, #ffc371, #ff5f6d);
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.custom-navbar .navigation .dropdown-menu .dropdown-item a {
  color: #ffffff;
  text-decoration: none;
  display: block;
  font-size: 1em;
  transition: color 0.3s ease;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
}

.custom-navbar .navigation .dropdown-menu .dropdown-item:hover {
  background: linear-gradient(to right, #ffffff, #ffefba);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.custom-navbar .navigation .dropdown-menu .dropdown-item:hover a {
  color: #000;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>