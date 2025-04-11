<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const trials = ref([]);
const loading = ref(true);
const error = ref(null);
const selectedTrial = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://clinicaltrialswebapi-cch3g5f0a7cpe0bq.canadacentral-01.azurewebsites.net/Search?&page=15&pageSize=100"      
    );
    console.log("Response:", response.data.data);
    
    // Store trial records
    trials.value = response.data.data.map(trial => trial.AfricaPactr || trial.UsaClinicalTrialsGov || trial.AustraliaNzAnzctr);
  } catch (err) {
    error.value = "Failed to fetch data!";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const selectTrial = (trial) => {
  trials.value = []; // Clear trials to hide the table
  selectedTrial.value = trial;
};

const goBack = () => {
  selectedTrial.value = null;
  fetchData(); // Re-fetch the trials to display the table again
};

onMounted(fetchData);
</script>

<template>
  <div>
    <h2><b>Clinical Trials Details</b></h2>

    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <table v-if="trials.length" class="trial-table">
      <thead>
        <tr>
          <th v-for="(field, index) in Object.keys(trials[0] || {}).slice(0, 10)" :key="index">
            {{ field.replace(/([A-Z])/g, ' $1').trim() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trial, index) in trials" :key="index" @click="selectTrial(trial)" class="clickable">
          <td v-for="(field, fIndex) in Object.keys(trial || {}).slice(0, 10)" :key="fIndex">
            {{ trial[field] || "N/A" }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Detailed View Table -->
    <div v-if="selectedTrial" class="details-container">
      <button @click="goBack" class="back-button">Back</button>
      <h3>Detailed Trial Information</h3>
      <table class="details-table">
        <thead>
          <tr>
            <th>Column 1 (Field)</th>
            <th>Column 2 (Value)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in selectedTrial" :key="key">
            <td>{{ key }}</td>
            <td>{{ value || "N/A" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}

.trial-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid #ccc;
}

.trial-table th, .trial-table td {
  border: 2px solid black;
  padding: 8px;
  text-align: left;
}

.trial-table th {
  background-color: #cff4fc;
  font-weight: bold;
}

.clickable {
  cursor: pointer;
  transition: background 0.3s;
}

.clickable:hover {
  background-color: #e0f7fa;
}

.details-container {
  margin-top: 20px;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid #ccc;
}

.details-table th, .details-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.details-table th {
  background-color: #ffecb3;
  font-weight: bold;
}

.back-button {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.back-button:hover {
  background-color: #0056b3;
}

.trial-table thead th {
  position: sticky;
  top: 0;
  background-color: #f8f8f8;
  z-index: 1;
}
</style>
