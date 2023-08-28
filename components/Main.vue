<script setup>
</script>

<template>
  <div>
    <div>
      <div class="mb-6 text-green-600">
        <span class="text-6xl">Olá, eu sou o</span>
        <span class="text-6xl font-bold"> Vitor</span>
      </div>
      <div>
        Bem-vindo à minha landing page! Sou um apaixonado pela programação e pela criação de soluções web incríveis. Do design ao código, estou sempre explorando o mundo digital para trazer coisas incríveis à vida. Se você compartilha dessa paixão ou só quer trocar uma ideia sobre programação, é só me chamar! 🚀👨‍💻
      </div>

      <div class="mt-6">
        Para me conhecer melhor, você pode conferir a minha <a class="text-green-600 cursor-pointer" @click="setSelectedTab('trajetoria')">trajetória</a> ou a minha <a class="text-green-600 cursor-pointer" @click="setSelectedTab('stack')">stack</a> de tecnologias.
      </div>
    </div>
  </div>
</template>