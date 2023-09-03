<script setup>
const { locale } = useI18n()
</script>

<template>
    <select class="no-appearance bg-green-950" v-model="locale">
        <option value="en">
            {{ $t('en') }}
        </option>
        <option value="es">
            {{ $t('es') }}
        </option>
        <option value="pt">
            {{ $t('pt') }}
        </option>
    </select>
</template>

<style>
.no-appearance {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>