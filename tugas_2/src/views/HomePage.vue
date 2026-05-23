<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
       <ion-title>Prakiraan Cuaca Jakarta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div v-if="loading" class="ion-text-center">
          <ion-spinner name="crescent" />
          <p>Memuat data...</p>
      </div>

      <div v-else-if="error" class="ion-text-center">
        <p>{{ error }}</p>
        <ion-button @click="fetchWeather">Coba Lagi</ion-button>
      </div>

      <ion-list v-else>
        <ion-item v-for="item in weatherList" :key="item.time">
          <ion_label>
            <h2>{{ item.formattedTime }}</h2>
            <p>{{ item.formattedDate }}</p>
          </ion_label>
          <ion_badge slot="end" :color="tempColor(item.temp)">
            {{ item.temp.toFixed(1) }} °C
          </ion_badge>
        </ion-item>
      </ion-list>

      <div class="ion-padding ion-text-center">
        <ion-note>Data dari Open-Meteo API</ion-note>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonSpinner
} from '@ionic/vue'

const weatherList = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const tempColor = (t: number) => t >= 32 ? "danger" : t >= 28 ? "warning" : "success"

async function fetchWeather() {
  loading.value = true
  error.value = null
  try {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m")
    const data = await res.json()

    weatherList.value = data.hourly.time.map((t: string, i: number) => {
      const d = new Date(t)
      return {
        time: t,
        temp: data.hourly.temperature_2m[i],
        formattedTime: d.toLocaleTimeString("id-ID", {hour: "2-digit", minute: "2-digit"}),
        formattedDate: d.toLocaleDateString("id-ID", {weekday: "long", day: "numeric", month: "long", year: "numeric"})
      }
    })
  } catch (e) {
    error.value = "Gagal memuat data"
  } finally {
    loading.value = false 
  }
}

onMounted(fetchWeather)
</script>