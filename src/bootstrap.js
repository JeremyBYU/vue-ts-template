import Vue from 'vue'
import * as axios from 'axios';
import { Component, prop, watch } from 'vue-property-decorator'

axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest"
};

