<template>
  <main>
    <button
      class="bg-transparent hover:bg-gray-700 text-gray font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
      v-on:click="requestPayment()"
    >
      <i class="bi bi-person"></i>
      Payment
    </button>
    <button
      class="bg-transparent hover:bg-gray-700 text-gray font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
      v-on:click="createCard()"
    >
      <i class="bi bi-person"></i>
      CreateCard
    </button>
  </main>
</template>

<script setup>
const config = useRuntimeConfig().public;

onMounted(() => {
  OmiseCard.configure({
    publicKey: config.omise.publicKey,
    image: "https://cdn.omise.co/assets/dashboard/images/omise-logo.png",
  });
});

function requestPayment() {
  OmiseCard.open({
    frameLabel: "test",
    frameDescription: "test",
    currency: "THB",
    amount: 10000,
    defaultPaymentMethod: "credit_card",
    otherPaymentMethods: [ 
      "credit_card",
      "promptpay",
    ],
    onCreateTokenSuccess: function (nonce) {
      console.log(nonce);
      // ยิ่งเข้าหลังบ้าน
    },
  });
}

function createCard() {
  Omise.createToken(
    "card",
    {
      expiration_month: 2,
      expiration_year: 2024,
      name: "Somchai Prasert",
      number: "4242424242424242",
      security_code: "123",
      street1: "476 Fifth Avenue",
      city: "New York",
      state: "NY",
      postal_code: "10320",
      country: "US",
    },
    function (statusCode, response) {
      console.log(response);
    }
  );
}
</script>
