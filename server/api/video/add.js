export default defineEventHandler(async () => {

  const data = await $fetch('http://localhost:3001/api/message/message')

  return data
})