<template>
  <div class="w-full min-h-screen flex flex-col bg-dark">
    <Header />
    <main
      class="flex-1 w-full max-w-screen-xl mx-auto flex flex-col items-center md:flex-row-reverse py-10"
    >
      <div class="sm:w-3/4">
        <img
          src="~/assets/receita-federal.svg"
          alt="Logo da Receita Federal"
          class="animate-bouncy"
        />
      </div>
      <form
        class="md:w-2/4 flex-col text-center px-3 sm:text-left"
        @submit.prevent="subscribe"
      >
        <h1 class="text-4xl text-gray-100 font-bold mb-5 sm:text-6xl">
          Não perca mais os leilões da Receita Federal
        </h1>
        <h2 class="text-xl text-gray-200 mb-10">
          Se inscreva e receba por e-mail sempre que um novo edital estiver
          disponível
        </h2>
        <div
          v-if="success == null"
          class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3"
        >
          <input
            v-model="email"
            type="email"
            required
            placeholder="meu@email.com"
            class="px-3 py-2 rounded-sm flex-1"
          />
          <button
            type="submit"
            :disabled="loading"
            class="px-5 py-3 bg-blue-500 text-gray-100 font-bold rounded-sm flex items-center whitespace-nowrap disabled:opacity-75"
          >
            <svg
              class="h-5 w-5 mr-2"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.832 20.61H8.499m8.333 0h6.944l-1.952-1.952a2.821 2.821 0 01-.826-1.996v-4.385a8.335 8.335 0 00-5.555-7.86v-.473a2.778 2.778 0 10-5.555 0v.473a8.339 8.339 0 00-5.555 7.86v4.387c0 .747-.298 1.465-.827 1.994l-1.95 1.951h15.276zm0 0v1.388a4.167 4.167 0 01-8.333 0v-1.389h8.333z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Inscreva-me
          </button>
        </div>
        <div
          v-else
          class="w-full rounded-sm flex justify-between px-3 py-3 text-gray-100"
          :class="[success == true ? 'bg-blue-500' : 'bg-red-500']"
        >
          <p>
            {{
              success == true
                ? 'Pronto! Enviamos um e-mail pra você com a confirmação'
                : 'Erro ao se inscrever'
            }}
          </p>
          <button
            v-if="success == false"
            class="underline"
            type="button"
            @click.prevent="reset"
          >
            Tentar novamente
          </button>
        </div>
      </form>
    </main>
    <section class="bg-black">
      <div class="max-w-screen-xl mx-auto text-white py-14 px-3">
        <h2 class="font-bold text-2xl mb-5">Editais disponíveis</h2>
        <ul
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <li
            v-for="edital in editais"
            :key="edital.id"
            class="flex flex-col rounded bg-dark p-4 w-full"
          >
            <a
              :href="`http://www25.receita.fazenda.gov.br/sle-sociedade/portal/edital/${edital.codigo}`"
              target="_blank"
              class="flex justify-between items-center border-b border-blue-500"
            >
              {{ edital.codigo }}
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <br />
            <p>
              {{
                edital.permitePessoaFisica
                  ? 'Pessoas físicas e jurídicas'
                  : 'Pessoas Jurídicas'
              }}
            </p>
            <p>Propostas até {{ edital.dataTerminoPropostas | format }}</p>
          </li>
        </ul>
      </div>
    </section>
    <footer class="w-full">
      <div class="max-w-screen-xl mx-auto py-3 px-3 flex justify-end">
        <a
          href="https://github.com/mumumilk/laion-app"
          target="_blank"
          class="text-gray-300 text-lg underline tracking-wider"
          >Github</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      email: '',
      success: null,
      loading: false,
      editais: '',
    };
  },
  mounted() {
    this.$apollo
      .query({
        query: gql`
          query {
            editais(filter: { situacao: "5fea75d680b52b00108f1e3d" }) {
              data {
                id
                codigo
                permitePessoaFisica
                dataTerminoPropostas
              }
            }
          }
        `,
      })
      .then(({ data }) => (this.editais = data.editais.data));
  },
  methods: {
    subscribe() {
      this.loading = true;
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($email: String!) {
              subscribe(input: { email: $email })
            }
          `,
          variables: {
            email: this.email,
          },
        })
        .then(({ data }) => (this.success = data.subscribe))
        .catch((e) => (this.success = false))
        .finally(() => (this.loading = false));
    },
    reset() {
      this.success = null;
    },
  },
};
</script>

<style lang="scss"></style>
