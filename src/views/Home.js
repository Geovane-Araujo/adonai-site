export default {
  name: 'Home',
  data: () => ({
    funcionalidades: [
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
      {
        icon: '',
        text: '',
        description: 'Aqui é uma funcionaalidades',
      },
    ],
  }),
  methods: {
    alterColor() {
      // console.log('d');
      // const nav = document.getElementById('navheader');
      // nav.style.backgroundColor = '#b8c5c2';
    },
  },
  mounted() {

  },
  created() {
    window.addEventListener('scroll', this.alterColor);
  },
};
