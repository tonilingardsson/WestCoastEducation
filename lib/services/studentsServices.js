import config from "../util/config.js";
import HttpClient from "../models/HttpClient.js";

export const getAllStudents = async () => {
    return await new HttpClient(config.api.baseURL).get('students');
}

export const getStudentById = async (id) => {
    return await new HttpClient(config.api.baseURL).get('students', id)
}

export const createStudent = async (data) => {
    return await new HttpClient(config.api.baseURL).add('students', data)
}

export const updateStudentById = async (id, data) => {
    return await new HttpClient(config.api.baseURL).update('students', id, data)
}

export const deleteStudentById = async (id) => {
    return await new HttpClient(config.api.baseURL).delete('students', id)
}