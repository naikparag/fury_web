'use strict'
import axios from 'axios'

const BASE_URL = "https://api-fury.bombaybrew.in/"
const URL_COMPANY = BASE_URL + "company"

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 8000, // indicates, 1000ms ie. 1 second
  headers: {
    "Content-Type": "application/json",
  }
})

const getCompanyAll = () => api.get(URL_COMPANY)
const getCompanyById = (companyId) => api.get(URL_COMPANY + '/' + companyId)

export {
  getCompanyAll,
  getCompanyById
}
