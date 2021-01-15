<template>
  <section class="w-full min-h-screen flex flex-col bg-dark">
    <Header />
    <div
      class="flex-1 flex flex-col items-center justify-center space-y-20 px-3"
    >
      <h1 class="text-gray-100 text-4xl font-bold text-center">
        Sua inscrição foi confirmada!
      </h1>
      <img src="~/assets/envelope.svg" alt="Imagem de um envelope" />
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag';

export default {
  mounted() {
    const { token } = this.$route.query;
    this.$apollo.mutate({
      mutation: gql`
        mutation($token: String!) {
          confirm(input: { token: $token })
        }
      `,
      variables: {
        token,
      },
    });
  },
};
</script>

<style></style>
