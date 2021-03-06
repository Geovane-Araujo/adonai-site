export default {
  name: 'Home',
  data: () => ({
    planos: [
      {
        title: 'Gratuito',
        price: 'R$ 0,00',
        funcoes: [
          {
            text: '50 Membros',
          },
          {
            text: '20 Novos Convertidos',
          },
          {
            text: '5 Usuarios',
          },
          {
            text: '2 Caixas',
          },
          {
            text: 'Dashboards',
          },
        ],
      },
      {
        title: 'Basico',
        price: 'R$ 29,99',
        funcoes: [
          {
            text: '100 Membros',
          },
          {
            text: '40 Novos Convertidos',
          },
          {
            text: '10 Usuarios',
          },
          {
            text: '4 Caixas',
          },
          {
            text: 'Dashboards',
          },
          {
            text: 'Relatórios',
          },
          {
            text: 'Acesso ao Aplicativo',
          },
          {
            text: 'WhasApp*',
          },
        ],
      },
      {
        title: 'Avançado',
        price: 'R$ 59,99',
        funcoes: [
          {
            text: '200 Membros',
          },
          {
            text: '60 Novos Convertidos',
          },
          {
            text: '15 Usuarios',
          },
          {
            text: '6 Caixas',
          },
          {
            text: 'Dashboards',
          },
          {
            text: 'Relatórios Personalizados',
          },
          {
            text: 'Modelos de Documentos',
          },
          {
            text: 'Acesso ao Aplicativo Gerencial + Membros',
          },
          {
            text: 'WhasApp*',
          },
        ],
      },
      {
        title: 'Full',
        price: 'R$ 69,99',
        funcoes: [
          {
            text: 'Cadastros Ilimitados',
          },
          {
            text: 'Dashboards',
          },
          {
            text: 'Relatórios personalizados',
          },
          {
            text: 'Modelos de Documentos personalizados',
          },
          {
            text: 'Carteirinhas e Certificaso Personalizados',
          },
          {
            text: 'Acesso ao Aplicativo Gerencial + Membros',
          },
          {
            text: 'Portal Transparencia',
          },
          {
            text: 'WhatsApp*',
          },
        ],
      },
    ],
    funcionalidades: [
      {
        icon: 'g-icon g-dashboard',
        description: 'Dashboards intuitivos e personalizados',
      },
      {
        icon: 'g-icon g-quadro',
        description: 'Gestão completa de membros',
      },
      {
        icon: 'g-icon g-new-names',
        description: 'Acompanhamento de novos convertidos',
      },
      {
        icon: 'g-icon g-safe-file',
        description: 'Aquele lugarzinho seguro para guardar esboços e devocionais',
      },
      {
        icon: 'g-icon g-certificate',
        description: 'Carteirinhas e certificados personalizados',
      },
      {
        icon: 'g-icon g-managment-finance',
        description: 'Financeiro completo com relatórios gerenciais',
      },
      {
        icon: 'g-icon g-report',
        description: 'Acompanhe os resultados de todas as igrejas do campo eclesiástico em uma só tela',
      },
      {
        icon: 'g-icon g-user-security',
        description: 'Controle de acesso de usuários',
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
