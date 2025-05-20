<template>
 <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="title-font text-3xl md:text-4xl font-bold text-center mb-12 text-[#D46A7E]">Travaillons ensemble</h2>

            <div class="max-w-2xl mx-auto">
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block mb-2 font-medium">Nom</label>
                            <input type="text" id="name"
                                class="w-full px-4 py-2 border border-[#D46A7E] rounded-lg focus:ring-2 focus:ring-[#D46A7E] focus:border-transparent">
                        </div>
                        <div>
                            <label for="email" class="block mb-2 font-medium">Email</label>
                            <input type="email" id="email"
                                class="w-full px-4 py-2 border border-[#D46A7E] rounded-lg focus:ring-2 focus:ring-[#D46A7E] focus:border-transparent">
                        </div>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 font-medium">Sujet</label>
                        <input type="text" id="subject"
                            class="w-full px-4 py-2 border border-[#D46A7E] rounded-lg focus:ring-2 focus:ring-[#D46A7E] focus:border-transparent">
                    </div>
                    <div>
                        <label for="message" class="block mb-2 font-medium">Message</label>
                        <textarea id="message" rows="5"
                            class="w-full px-4 py-2 border border-[#D46A7E] rounded-lg focus:ring-2 focus:ring-[#D46A7E] focus:border-transparent"></textarea>
                    </div>
                    <button type="submit"
                        class="bg-[#FF9BB3] hover:[#D46A7E] text-white px-6 py-3 rounded-full font-medium transition w-full md:w-auto cursor-pointer">Envoyer</button>
                </form>

                <div
                    class="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    <a href="#" class="flex items-center text-[#D46A7E] hover:text-[#D46A7E] transition">
                        <i class="fas fa-phone-alt text-xl mr-2"></i>
                        <span>+33 6 12 34 56 78</span>
                    </a>
                    <a href="#" class="flex items-center text-[#D46A7E] hover:text-[#D46A7E] transition">
                        <i class="fas fa-envelope text-xl mr-2"></i>
                        <span>contact@Studee.com</span>
                    </a>
                    <a href="#" class="flex items-center text-[#D46A7E] hover:text-[#D46A7E] transition">
                        <i class="fab fa-instagram text-xl mr-2"></i>
                        <span>@Studee_Photographie</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>
