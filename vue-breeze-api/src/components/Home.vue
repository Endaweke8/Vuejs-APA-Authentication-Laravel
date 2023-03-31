<template>
  <!-- <div v-else>
    <h1>Go and Login</h1>
</div> -->
  <div
    class="h-[full] bg-no-repeat bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/blue-futuristic-waves-background-with-computer-code-technology_53876-119584.jpg')]"
  >
    <div>
      <!-- Section: Design Block -->
      <section id="home" class="">
        <div
          class="px-6 py-12 lg:h-[85vh] flex items-center md:px-12 text-white text-center lg:text-left"
        >
          <div class="container mx-auto xl:px-16 lg:mt-12">
            <div class="grid lg:grid-cols-2 gap-12 flex items-center">
              <div class="mt-12 lg:mt-12">
                <p class="text-xl mb-5 font-bold mt-[80px]">
                  Hey, I am Endaweke Enkuhone
                </p>
                <h1
                  class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12"
                >
                  I am full stack Web <br /><span class="text-blue-600"
                    >Application Developer</span
                  >
                </h1>

                <a
                  class="inline-block px-7 py-3 mr-2 bg-indigo-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#contact"
                  role="button"
                  >Work With Me</a
                >
              </div>

              <div
                class="mb-12 w-full h-full lg:mb-0 lg:mt-[80px] flex items-center lg:mr-0"
              >
                <img
                  src="../assets/endexu.jpg"
                  alt=""
                  class="h-[400px] dark:bg-gray-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

      <section
        id="about"
        class="p-4 lg:p-8 dark:bg-gray-800 lg:mt-[120px] dark:text-gray-100"
      >
        <div v-motion="motionFadesUp" class="container mx-auto space-y-12">
          <div
            class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
          >
            <div v-for="profileimage in profileimages" :key="profileimage.id">
              <img
                :src="`${endpoint}/images/profiles/` + profileimage.image"
                alt=""
                class="h-[400px] w-[400px] dark:bg-gray-500 rounded-full"
              />
            </div>

            <div
              class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 text-white"
            >
              <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabol">
                About Me
              </h2>
              <p class="mb-4 text-accent">Freelance frontend Web developer</p>

              <p class="my-2 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <p class="my-2 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>

              <a
                href="#contact"
                class="self-start bg-indigo-600 px-5 py-3 rounded-md font-medium text-white"
                >Contact Me</a
              >
            </div>
          </div>
        </div>
      </section>

      <div class="">
        <div
          class="mx-auto max-w-7xl py-12 px-4 sm:px-12 lg:flex lg:items-center lg:justify-between lg:py-16"
        >
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span class="block">Ready to dive in ?</span>
            <span class="block text-indigo-600">Start Wrok With me today</span>
          </h2>
          <div class="mt-8 lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex bg-blue-400 rounded-md shadow">
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-md text-white font-medium hover:bg-indigo-900 border border-transparent bg-indigo-600 px-5 py-3"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="services" class="mt-12">
        <div v-motion="motionFadesUp" class="container mx-auto">
          <div class="flex mb-10 flex-col items-center text-center">
            <h2 class="section-title text-white text-4xl">
              What I do for clients
            </h2>
            <p class="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              et praesentium similique sunt pariatur quod porro ut quidem
              ducimus, sint quisquam repellat, autem eos veniam in, ullam
              mollitia temporibus. Reprehenderit.
            </p>
          </div>
          <div class="grid lg:grid-cols-4 gap-8">
            <div class="bg-green-200 p-6 lg:mt-12 lg:mb-12 rounded-2xl">
              <div
                class="rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-medium mb-2">Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                qui nisi sed voluptas expedita architecto assumenda aliquam
                laudantium sapiente aperiam quibusdam necessitatibus id minima
                totam magni, eius tempora commodi harum?
              </p>
            </div>
            <div class="bg-green-200 p-6 lg:mt-12 lg:mb-12 rounded-2xl">
              <div
                class="rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-medium mb-2">Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                qui nisi sed voluptas expedita architecto assumenda aliquam
                laudantium sapiente aperiam quibusdam necessitatibus id minima
                totam magni, eius tempora commodi harum?
              </p>
            </div>
            <div class="bg-green-200 p-6 lg:mt-12 lg:mb-12 rounded-2xl">
              <div
                class="rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-medium mb-2">Branding</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                qui nisi sed voluptas expedita architecto assumenda aliquam
                laudantium sapiente aperiam quibusdam necessitatibus id minima
                totam magni, eius tempora commodi harum?
              </p>
            </div>
            <div class="bg-green-200 p-6 mb-10 lg:mt-12 lg:mb-12 rounded-2xl">
              <div
                class="rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]"
              >
                <img
                  src="https://www.maropost.com/wp-content/uploads/2021/03/SEO-background-1024x538.jpg"
                  alt="Web Design"
                  class="rounded-full"
                />
              </div>
              <h4 class="text-xl font-medium mb-2">SEO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                qui nisi sed voluptas expedita architecto assumenda aliquam
                laudantium sapiente aperiam quibusdam necessitatibus id minima
                totam magni, eius tempora commodi harum?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="skills">
        <div class="container mx-auto">
          <h1 class="text-4xl lg:text-6xl md:text-5xl text-center text-white">
            Skills
          </h1>
          <div
            class="grid lg:grid-cols-7 mt-12 grid-cols-3 md:grid-cols-5 gap-4"
          >
            <div v-for="skill in skills" :key="skill.id">
              <img
                class="lg:h-40 lg:w-40 h-20 w-20 my-2 mx-3 lg:ml-3"
                :src="`${endpoint}/images/skillsprofiles/` + skill.image"
              />
              <p class="text-white text-center">{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="container mx-auto">
        <h1
          class="text-4xl mt-[120px] mb-[80px] lg:text-6xl md:text-5xl text-center text-white"
        >
          My Latest Works
        </h1>
        <nav class="mb-12 mt-6 border-b-2 border-gray-300 dark:border-gray-700">
          <ul class="flex flex-col lg:flex-row justify-evenly items-center">
            <li>
              <button
                @click="getProjects('all')"
                class="flex hover:bg-orange-400 bg-green-400 hover:rounded-full text-center px-4 py-2"
                :class="
                  projectnavbg === 'all' ? 'bg-orange-400 rounded-full' : ''
                "
              >
                All
              </button>
            </li>
            <li
              v-for="skill in skills"
              :key="skill.id"
              class="capitalize m-4 rounded-lg cursor-pointer hover:bg-orange-400 hover:rounded-full py-2 px-4"
            >
              <button
                @click="filterProject(skill.id)"
                class="flex hover:bg-orange-400 bg-green-400 hover:rounded-full text-center px-4 py-2"
                :class="
                  projectnavbg === skill.id ? 'bg-orange-400 rounded-full' : ''
                "
              >
                {{ skill.name }}
              </button>
            </li>
          </ul>
        </nav>
        <section
          class="grid lg:grid-cols-4 mt-12 grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div
            v-for="project in projects"
            :key="project.id"
            class="items-center justify-center"
          >
            <router-link :to="project.project_url" class="mb-[800px]">
              <div class="mb-6">
                <img
                  :src="`${endpoint}/images/projectsprofiles/` + project.image"
                  class="rounded-2xl lg:h-56 h-40"
                />
              </div>
              <div class="text-white mb-12 text-center">{{ project.name }}</div>
            </router-link>
          </div>
        </section>
      </section>

      <section class=" dark:bg-gray-900">
        <div
          class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
        >
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2
              class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white"
            >
              My teams
            </h2>
            <p class="font-light text-white sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div
            class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3
                class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#" class="text-white">Bonnie Green</a>
              </h3>
              <p class="text-white">CEO/Co-founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                alt="Helene Avatar"
              />
              <h3
                class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#">Helene Engels</a>
              </h3>
              <p>CTO/Co-founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Avatar"
              />
              <h3
                class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#">Jese Leos</a>
              </h3>
              <p>SEO & Marketing</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="Joseph Avatar"
              />
              <h3
                class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#">Joseph Mcfall</a>
              </h3>
              <p>Sales</p>
              <ul class="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <div>
        <section id="contact" className="text-gray-700 body-font ">
          <h1 class="text-4xl lg:text-6xl md:text-5xl text-center text-white">
            Contact Me
          </h1>
          <div
            className="container px-5 py-24 mx-auto flex flex-col lg:flex-row text-center"
          >
            <div className=" mb-12">
              <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
              >
                My Address
              </h1>
              <p
                className="lg:w-2/3 mx-auto flex ml-2 leading-relaxed text-white"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    /></svg
                ></span>
                <span class="ml-2">endaweke1234@gmail.com</span>
              </p>

              <p
                className="lg:w-2/3 mx-auto flex ml-2 leading-relaxed text-white"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    /></svg
                ></span>
                <span class="ml-2">Bahirdar,Ethiopia</span>
              </p>
              <p
                className="lg:w-2/3 mx-auto flex ml-2 leading-relaxed text-white"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                    />
                  </svg>
                </span>
                <span class="ml-2">+251 949963101</span>
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form
                @submit.prevent="handleSendeMessage"
                className="flex flex-wrap -m-2"
              >
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">
                      Name
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-white"
                    >
                      Message
                    </label>
                    <textarea
                      v-model="form.message"
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full relative">
                  <button
                    type="submit"
                    className="flex absolute top-0 right-0 mr-2 mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer class="p-4 text-white sm:p-6 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-center mb-12">
          <span
            class="text-sm lg:text-xl text-white sm:text-center dark:text-gray-400"
            >© 2023
            <a href="https://flowbite.com/" class="hover:underline"
              >Endaweke Enkuahone</a
            >. All Rights Reserved.
          </span>
          <div
            class="flex mt-4 space-x-6 justify-center items-center sm:ml-12 sm:mt-0"
          >
            <a
              href="#"
              class="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              class="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              class="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              class="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              class="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Dribbbel account</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
const endpoint = import.meta.env.VITE_APP_API_URL;

const authStore = useAuthStore();
const posts = ref();
const skills = ref();
const projects = ref();
const profileimages = ref();

const projectnavbg = ref("all");
const navactivecolor = ref("home");

onMounted(async () => {
  await authStore.getUser();
  await getPost();
  await getSkills();
  await getProjects();
  projectnavbg.value = "all";
  await getProfiles();
});

const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSendeMessage = async () => {
  try {
    const res = await axios.post("/api/sendmessage", {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    });
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    console.log(error);
  }
};

const getPost = async () => {
  try {
    const res = await axios.get("/api/getpost");
    posts.value = res.data.posts;
  } catch (error) {
    console.log(error);
  }
};
const getSkills = async () => {
  try {
    const res = await axios.get("/api/getskills");
    skills.value = res.data.skills;
    console.log("Skills are ", skills.value);
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async (id) => {
  try {
    const res = await axios.get("/api/getprojects");
    projects.value = res.data.projects;
    console.log("Projectss are ", projects.value);
    projectnavbg.value = id;
  } catch (error) {
    console.log(error);
  }
};

const getProfiles = async () => {
  try {
    const res = await axios.get("/api/getprofileimage");
    profileimages.value = res.data.profileimages;
    console.log("profile images are ", profileimages.value);
  } catch (error) {
    console.log(error);
  }
};

const filterProject = async (id) => {
  try {
    const res = await axios.get("/api/filterprojects/" + id);
    projects.value = res.data.projects;
    console.log("Projectss are ", projects.value);
    projectnavbg.value = id;
  } catch (error) {
    console.log(error);
  }
};
</script>
